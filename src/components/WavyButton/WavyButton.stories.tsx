import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WavyButton from "./WavyButton";

export default {
  title: "ReactComponentLibrary/WavyButton",
  component: WavyButton,
} as ComponentMeta<typeof WavyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WavyButton> = (args) => (
  <WavyButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
};
