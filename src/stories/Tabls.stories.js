import Tablr from "../tablr/Tablr"

export default {
    title: 'Tablrs/Tablr A',
    component: Tablr,
    argTypes:{
        // help you control the input in the page interface the type of 
        // the control and even if its controlable
    }
};

const Template = args => <Tablr {...args} />;

export const Default = Template.bind({});
Default.args = {
    rows: [
      ['This', 'is', 'just', 'a', 'test'],
      ['This', 'is', 'also', 'a', 'test'],
      ['Just', 'a', 'little', 'more', 'data'],
      ['Row', 'number', 'four', 'right', 'here'],
    ],
    headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
  };