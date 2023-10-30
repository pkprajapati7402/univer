import { Meta, StoryFn } from '@storybook/react';
import { Container } from '@univerjs/design'; // Introduction to components for parent containers

import { BaseDragProps, Drag } from './Drag';

const meta: Meta<typeof Drag> = {
    title: 'Components / Drag',
    component: Drag,
    parameters: {
        layout: 'left',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Container style={{ height: '300px' }}>
                <Story />
            </Container>
        ),
    ],
};

export default meta;
// 创建一个模板
const Template: StoryFn<BaseDragProps> = (args) => <Drag {...args} />;

// 添加一些默认属性
export const Default: StoryFn<BaseDragProps> = Template.bind({});
Default.args = {
    // 在这里设置您的组件的默认属性
    children: <div>test drag</div>,
};
