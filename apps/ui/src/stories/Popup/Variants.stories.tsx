import {Button, Grid, notification, Popup} from "$components";
import { Meta } from "@storybook/react";

export const Variants = () => {
    const onSubmit = () => {
        notification.success('Изменения сохранены!')
    }
    return (
        <Grid gap={5}>
            <Popup isActive={true} onClose={() => undefined}>
                <Popup.Title>Категория *</Popup.Title>
                <Popup.Message>Вы действительно хотите удалить заведение?</Popup.Message>
                <Popup.Footer><Button variant="danger" width="100%" onClick={onSubmit}>Удалить заведение</Button></Popup.Footer>
            </Popup>
        </Grid>
    )
};


const meta: Meta<typeof Popup> = {
  component: Popup,
};
export default meta;
