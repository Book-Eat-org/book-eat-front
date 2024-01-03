
import {UICheckbox} from "$components";
import {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";


export const Base = () => {
    const [selected,setSelected] = useState(false);


    return   <>
        <UICheckbox selected={selected} onChange={setSelected}/>
    </>
}



type Story = StoryObj<typeof Base>;

export const Test: Story = {
    render:Base,
};

const meta: Meta<typeof UICheckbox> = {
    component: UICheckbox,
};
export default meta;
