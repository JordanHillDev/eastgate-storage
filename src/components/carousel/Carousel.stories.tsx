import type { Meta, StoryObj } from "@storybook/react";
import { carouselImages } from "@/global/constants/carouselImages";
import { Carousel } from ".";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Baseline: Story = {
  args: {
    images: [],
  },
};
