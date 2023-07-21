import styled from "styled-components";

const CSSJS = () => {
  return (
    <>
      <Title>Styled Components</Title>
      {/* <h1 style={{ color: "red" }}>Hello World</h1>; */}
    </>
  );
};

export default CSSJS;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
