import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductCard } from './product-card';

const Story: ComponentMeta<typeof ProductCard> = {
  component: ProductCard,
  title: 'ProductCard',
};
export default Story;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
