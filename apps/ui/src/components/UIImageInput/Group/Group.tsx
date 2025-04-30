import Grid from "../../Grid";
import Flex from "../../Flex";
import { FC, ReactNode, useMemo, useState } from "react";
import { GroupContext } from "./context.ts";
import { Error } from "../Error/Error.tsx";
import { Title } from "../Title";

interface IProps {
  title: string;
  children: ReactNode;
}

export const Group: FC<IProps> = (props) => {
  const { title, children } = props;
  const [error, setError] = useState("");

  const contextValue = useMemo(() => ({ error, setError }), [error, setError]);

  return (
    <GroupContext.Provider value={contextValue}>
      <Grid gap={2}>
        <Grid gap={4}>
          <Title>Загрузите фото {title} в формате Jpg, до 5 MB</Title>
          <Flex gap={5}>{children}</Flex>
        </Grid>
        {error && <Error>{error}</Error>}
      </Grid>
    </GroupContext.Provider>
  );
};
