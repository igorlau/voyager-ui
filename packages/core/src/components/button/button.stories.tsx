import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Primary Button',
    color: 'secondary',
  },
};

export const LeadingRenderer: Story = {
  args: {
    children: 'Primary Button',
    leading: '🚀',
  },
};

export const TrailingRenderer: Story = {
  args: {
    children: 'Primary Button',
    trailing: '🚀',
  },
};