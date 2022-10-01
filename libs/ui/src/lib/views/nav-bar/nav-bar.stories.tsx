import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from './nav-bar';

const Story: ComponentMeta<typeof NavBar> = {
  component: NavBar,
  title: 'views/NavBar',
};
export default Story;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [{ href: '/', text: 'Home' }]
};
