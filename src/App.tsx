import styled from "styled-components";

const Title = styled.h1<{ $color: string; $decoration: string }>`
  color: ${(props) => props.$color};
  text-decoration: ${(props) => props.$decoration};
`;

const BigTitle = styled(Title)`
  font-size: 50px;
`;

const Wrapper = styled.section`
  padding: 2rem;
  border: 1px solid red;
`;

const BlueBorderWrapper = styled(Wrapper)`
  border-color: blue;
`;

export default function App() {
  return (
    <>
      <BlueBorderWrapper>
        <Title $color="#ff0000" $decoration="line-through">
          App Component
        </Title>
        <BigTitle $color="#0000ff" $decoration="underline">
          App Component
        </BigTitle>
      </BlueBorderWrapper>
    </>
  );
}
