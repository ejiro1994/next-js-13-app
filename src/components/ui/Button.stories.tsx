// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

// import type { Meta, StoryObj } from '@storybook/react';

// import  Button  from '../components/ui/Button';

// // More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
// const meta: Meta<typeof Button> = {
//   title: 'Example/Button',
//   component: Button,
//   tags: ['autodocs'],
//   argTypes: {

//   },
// };

// export default meta;

type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'click me!',
  },
}

export const Secondary: Story = {}

export const Large: Story = {}

export const Small: Story = {}
