import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    theme: 'dark',
    options: ['option1', 'option2', 'option3', 'option4'],
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
};

export const light: Story = {
  args: {
    theme: 'light',
  },
};
