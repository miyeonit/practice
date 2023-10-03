import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { StyledButton } from "../components/StyledButton";

export default {
  title: "StyledButton",
  component: StyledButton,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "radio" },
      options: ["primary", "success", "text"],
    },
    children: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof StyledButton>;

const incrementAction = action("increment");

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

export const TemplateTest = Template.bind({});

export const Primary = (props) => {
  const [count, setCount] = useState(0);

  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count);
    setCount((c) => c + 1);
  };

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      primary
    </StyledButton>
  );
};

export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      primary
    </StyledButton>
  );
};

export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      primary
    </StyledButton>
  );
};

TemplateTest.args = {
  variant: "primary",
  children: "Primary",
};
