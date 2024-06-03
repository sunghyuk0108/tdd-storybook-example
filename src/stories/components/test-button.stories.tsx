// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TestButton from '@/shared/components/test-button';

const meta: Meta<typeof TestButton> = {
  // title 지정 시 스토리북 메뉴 탭에 적용됨
  title: 'Test/test-button',
  component: TestButton,
  // 자동으로 레이아웃 중앙에 배치함
  parameters: {
    layout: 'centered',
  },
  // autodocs를 생성함
  tags: ['autodocs'],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  // args type을 지정함
  args: {
    onClick: action('clicked'),
    label: 'string | React.ReactNode',
    intent: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    label: 'Test Button',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    label: 'Test Button',
  },
};
export const Disabled: Story = {
  args: {
    intent: 'secondary',
    label: 'Test Button',
    disabled: true,
  },
};
