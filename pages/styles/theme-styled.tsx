import { NextPage } from "next";
import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`;

const Page: NextPage = () => {
  return (
    <div>
      <Text>Theme에서 참조한 색상 사용</Text>
    </div>
  );
};

export default Page;
