import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyledPage } from './styled-page';

const Story: ComponentMeta<typeof StyledPage> = {
  component: StyledPage,
  title: 'views/StyledPage',
};
export default Story;

const Template: ComponentStory<typeof StyledPage> = (args) => (
  <StyledPage {...args} />
);

export const SimplePage = Template.bind({});
SimplePage.args = {};
