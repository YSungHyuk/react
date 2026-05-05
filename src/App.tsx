import styled from "styled-components";

const Title = styled.h1`
  color: red;
  text-decoration: underline;
`;

const Wrapper = styled.section`
  padding: 2rem;
  border: 1px solid red;
`;
export default function App() {
  return (
    <>
      <Wrapper>
        <Title>App Component</Title>
      </Wrapper>
    </>
  );
}
