import { ComponentStory, ComponentMeta } from '@storybook/react';
import UiLink from './link'

const Story: ComponentMeta<typeof UiLink> = {
    component: UiLink,
    title: 'components/UiLink'
}
export default Story;

const Template: ComponentStory<typeof UiLink> = (args) => <UiLink {...args} />

export const SimpleLink = Template.bind({})
SimpleLink.args = {
    href: '/',
    text: 'Home'
}