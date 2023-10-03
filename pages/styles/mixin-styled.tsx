import { NextPage } from "next";
import styled, { css } from "styled-components";

const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid #ff0000;
  border-radius: 10px;
`;

const font = css`
  color: #1e90ff;
  font-size: 2em;
`;

const Button = styled.button`
  background: transparent;
  margin: 1em;
  cursor: point;
  ${redBox}
  ${font}
`;

const Text = styled.button`
font-weight:bold:
${redBox}
${font}
${Button}
`;

const Page: NextPage = () => {
  return (
    <>
      <div>
        <Button>HELLO</Button>
        <Text>World</Text>
      </div>
    </>
  );
};

export default Page;
