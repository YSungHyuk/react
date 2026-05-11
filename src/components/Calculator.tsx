import { useState } from "react";

type Operator = "+" | "-" | "*" | "/";

type ButtonValue =
  | "C"
  | "="
  | "."
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | Operator;

type CalculatorState = {
  display: string;
  expression: string;
  lastValue: string;
  lastOperator: Operator | "";
  isResult: boolean;
};

type CalculatorButton = {
  value: ButtonValue;
  className: string;
};

const initialState: CalculatorState = {
  display: "0",
  expression: "",
  lastValue: "",
  lastOperator: "",
  isResult: false,
};

const buttons: CalculatorButton[] = [
  { value: "C", className: "calc-clear" },
  { value: "/", className: "calc-operator" },
  { value: "1", className: "calc-num" },
  { value: "2", className: "calc-num" },
  { value: "3", className: "calc-num" },
  { value: "*", className: "calc-operator" },
  { value: "4", className: "calc-num" },
  { value: "5", className: "calc-num" },
  { value: "6", className: "calc-num" },
  { value: "+", className: "calc-operator" },
  { value: "7", className: "calc-num" },
  { value: "8", className: "calc-num" },
  { value: "9", className: "calc-num" },
  { value: "-", className: "calc-operator" },
  { value: ".", className: "calc-dot" },
  { value: "0", className: "calc-num" },
  { value: "=", className: "calc-operator calc-result" },
];

const isOperator = (value: string): value is Operator => {
  return ["+", "-", "*", "/"].includes(value);
};

const isLastCharOperator = (expression: string) => {
  const lastChar = expression[expression.length - 1];

  return isOperator(lastChar);
};

const getLastNumber = (expression: string) => {
  const match = expression.match(/-?\d+\.?\d*$/);

  return match?.[0] ?? "";
};

const formatNumber = (value: number) => {
  const roundedValue = Number(value.toFixed(10));

  return Object.is(roundedValue, -0) ? "0" : String(roundedValue);
};

const calculateExpression = (expression: string) => {
  const tokens = expression.match(/\d+\.?\d*|\.\d+|[+\-*/]/g);

  if (!tokens) {
    throw new Error("Invalid expression");
  }

  const normalizedTokens: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const prevToken = normalizedTokens[normalizedTokens.length - 1];
    const nextToken = tokens[i + 1];

    if (
      token === "-" &&
      (normalizedTokens.length === 0 || isOperator(prevToken)) &&
      nextToken &&
      /^\d+\.?\d*$|^\.\d+$/.test(nextToken)
    ) {
      normalizedTokens.push(`-${nextToken}`);
      i++;
    } else {
      normalizedTokens.push(token);
    }
  }

  const firstValue = Number(normalizedTokens[0]);

  if (!Number.isFinite(firstValue)) {
    throw new Error("Invalid expression");
  }

  const numbers: number[] = [firstValue];
  const operators: Operator[] = [];

  for (let i = 1; i < normalizedTokens.length; i += 2) {
    const operator = normalizedTokens[i];
    const nextValue = Number(normalizedTokens[i + 1]);

    if (!isOperator(operator) || !Number.isFinite(nextValue)) {
      throw new Error("Invalid expression");
    }

    if (operator === "*") {
      numbers[numbers.length - 1] *= nextValue;
    } else if (operator === "/") {
      if (nextValue === 0) {
        throw new Error("Cannot divide by zero");
      }

      numbers[numbers.length - 1] /= nextValue;
    } else {
      operators.push(operator);
      numbers.push(nextValue);
    }
  }

  return numbers.reduce((total, number, index) => {
    const operator = operators[index - 1];

    if (operator === "+") {
      return total + number;
    }

    if (operator === "-") {
      return total - number;
    }

    return total;
  });
};

export default function Calculator() {
  const [currentExpression, setCurrentExpression] =
    useState<CalculatorState>(initialState);

  const handleNumber = (
    value: ButtonValue,
    prev: CalculatorState,
  ): CalculatorState => {
    if (prev.isResult) {
      return {
        ...initialState,
        display: value,
        expression: value,
      };
    }

    if (prev.expression === "" || prev.expression === "-") {
      const nextExpression = prev.expression + value;

      return {
        ...prev,
        display: nextExpression,
        expression: nextExpression,
      };
    }

    const lastNumber = getLastNumber(prev.expression);

    if ((lastNumber === "0" || lastNumber === "-0") && value === "0") {
      return prev;
    }

    if ((lastNumber === "0" || lastNumber === "-0") && value !== "0") {
      const nextExpression = prev.expression.slice(0, -1) + value;

      return {
        ...prev,
        display: nextExpression,
        expression: nextExpression,
      };
    }

    const nextExpression = prev.expression + value;

    return {
      ...prev,
      display: nextExpression,
      expression: nextExpression,
    };
  };

  const handleDot = (prev: CalculatorState): CalculatorState => {
    if (prev.isResult) {
      return {
        ...initialState,
        display: "0.",
        expression: "0.",
      };
    }

    if (prev.expression === "") {
      return {
        ...prev,
        display: "0.",
        expression: "0.",
      };
    }

    if (prev.expression === "-") {
      return {
        ...prev,
        display: "-0.",
        expression: "-0.",
      };
    }

    if (isLastCharOperator(prev.expression)) {
      const nextExpression = prev.expression + "0.";

      return {
        ...prev,
        display: nextExpression,
        expression: nextExpression,
      };
    }

    const lastNumber = getLastNumber(prev.expression);

    if (lastNumber.includes(".")) {
      return prev;
    }

    const nextExpression = prev.expression + ".";

    return {
      ...prev,
      display: nextExpression,
      expression: nextExpression,
    };
  };

  const handleOperator = (
    value: Operator,
    prev: CalculatorState,
  ): CalculatorState => {
    if (prev.expression === "") {
      if (value === "-") {
        return {
          ...prev,
          display: "-",
          expression: "-",
          isResult: false,
        };
      }

      return prev;
    }

    if (prev.expression === "-") {
      return prev;
    }

    const baseExpression = prev.expression.endsWith(".")
      ? prev.expression + "0"
      : prev.expression;

    const nextExpression = isLastCharOperator(baseExpression)
      ? baseExpression.slice(0, -1) + value
      : baseExpression + value;

    return {
      ...prev,
      display: nextExpression,
      expression: nextExpression,
      lastOperator: value,
      isResult: false,
    };
  };

  const handleResult = (prev: CalculatorState): CalculatorState => {
    if (
      !prev.expression ||
      prev.expression === "-" ||
      isLastCharOperator(prev.expression)
    ) {
      return prev;
    }

    const baseExpression = prev.expression.endsWith(".")
      ? prev.expression + "0"
      : prev.expression;

    const targetExpression =
      prev.isResult && prev.lastOperator && prev.lastValue
        ? baseExpression + prev.lastOperator + prev.lastValue
        : baseExpression;

    try {
      const result = calculateExpression(targetExpression);
      const resultText = formatNumber(result);
      const match = targetExpression.match(/([+\-*/])(-?\d+\.?\d*)$/);

      return {
        display: resultText,
        expression: resultText,
        lastOperator: (match?.[1] as Operator) ?? prev.lastOperator,
        lastValue: match?.[2] ?? prev.lastValue,
        isResult: true,
      };
    } catch {
      return {
        ...initialState,
        display: "Error",
        isResult: true,
      };
    }
  };

  const handleButtonClick = (value: ButtonValue) => {
    setCurrentExpression((prev) => {
      if (value === "C") {
        return initialState;
      }

      if (value === ".") {
        return handleDot(prev);
      }

      if (value === "=") {
        return handleResult(prev);
      }

      if (isOperator(value)) {
        return handleOperator(value, prev);
      }

      return handleNumber(value, prev);
    });
  };

  return (
    <article className="calculator">
      <div className="calc-form">
        <input
          type="text"
          className="calc-output"
          readOnly
          value={currentExpression.display}
        />

        {buttons.map(({ value, className }) => (
          <button
            key={value}
            type="button"
            className={className}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </article>
  );
}
