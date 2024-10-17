import { NewPage } from "$components";
import { Meta, StoryObj } from "@storybook/react";

export const Base = () => {
  return (
    <div style={{ height: "500px" }}>
      <NewPage>
        <NewPage.Header>
          <NewPage.Header.Top>
            <NewPage.Header.Top.Left>
              <span>Left</span>
            </NewPage.Header.Top.Left>
            <NewPage.Header.Top.Central>
              <span>Central</span>
            </NewPage.Header.Top.Central>
            <NewPage.Header.Top.Right>
              <span>Right</span>
            </NewPage.Header.Top.Right>
          </NewPage.Header.Top>
        </NewPage.Header>
        <NewPage.Header.Title>
          <span>Title</span>
        </NewPage.Header.Title>
      </NewPage>
      <NewPage.Body>
        <span>body</span>
      </NewPage.Body>
    </div>
  );
};

type Story = StoryObj<typeof NewPage>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof NewPage> = {
  component: NewPage,
};
export default meta;
