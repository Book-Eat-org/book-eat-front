import {Button, Grid, notification, Popup} from "$components";
import { Meta } from "@storybook/react";

export const Variants = () => {
    const onSubmit = () => {
        notification.success('Изменения сохранены!')
    }
    return (
        <Button onClick={onSubmit}>Успешно</Button>
    )
};


const meta: Meta<typeof Popup> = {
  component: Popup,
};
export default meta;
