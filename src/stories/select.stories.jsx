import Select from "../select"

export default {
    title: 'Input/select',
    component: Select,
    argTypes:{
        // help you control the input in the page interface the type of 
        // the control and even if its controlable
    }
};
const indexate =()=> {console.log("kill them all")}
const Template = args => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {items:["hi","hellow","hmm"],onItem:indexate}