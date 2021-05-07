import React from 'react';
import Card from "../card/Card"


export default {
    title: 'Layout/card',
    component: Card,
    argTypes: {
      
    },
  };

const Template = (args) => <Card {...args} />;

export const card = Template.bind({});
