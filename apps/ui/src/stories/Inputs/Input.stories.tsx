
import {UIGrid, UIInput} from "$components";
import {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";


export const Input = () => {
    const [value,setValue] = useState<string | undefined>();

    return   (
        <UIGrid>
            <UIInput title="Заголовок" placeholder="Введите текст" value={value} onChange={setValue}/>
        </UIGrid>
    )
}



type Story = StoryObj<typeof Input>;

export const Test: Story = {
    render:Input,
};

const meta: Meta<typeof UIInput> = {
    component: UIInput,
};
export default meta;
