import type { Meta, StoryObj } from "@storybook/react";

import { PricingCard } from ".";

const meta = {
  title: "Components/PricingCard",
  component: PricingCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Baseline: Story = {
  args: {
    option: {
      size: "10x10",
      price: 100,
      features: ["boats", "christmas stuff", "tupperware", "...more"],
      mostPopular: true,
    },
  },
};
