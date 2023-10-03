import styled, { css } from "styled-components";

const variants = {
  primary: {
    color: "skyblue",
    backgroundColor: "#1D3461",
    border: "none",
  },

  success: {
    color: "green",
    backgroundColor: "#5AB203",
    border: "none",
  },

  transparent: {
    color: "#ffffff",
    backgroundColor: "transparent",
    border: "1px solid black",
  },
} as const;

type StyledButtonProps = {
  variant: keyof typeof variants;
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    // variant에 주어진 키를 기반으로, 대응할 스타일을 얻는다
    const style = variants[variant];

    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor}
      border: ${style.border};
    `;
  }}

  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
