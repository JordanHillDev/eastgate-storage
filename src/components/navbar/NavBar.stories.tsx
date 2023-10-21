import type { Meta, StoryObj } from "@storybook/react";

import { NavBar } from ".";

const meta = {
  title: "Components/NavBar",
  component: NavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ height: "200vh" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Baseline: Story = {};
