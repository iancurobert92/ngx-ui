import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Grid } from './grid';

const meta: Meta<Grid> = {
  title: 'Example/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Grid>;

export const Default: Story = {};
