import { Grid, NewPage, Skeleton } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { menuEndpoints, menuSelectors } from "$api";
import GroupList from "./GroupList";
import { FC, useMemo, useState } from "react";
import { Header } from "./Header";
import { MenuPageContext } from "./context.ts";
import { isEmpty } from "ramda";
import { Empty } from "./Empty";

const searchingTextEquals = (searchingText: string, targetText: string) =>
  isEmpty(searchingText)
    ? true
    : targetText.toLowerCase().includes(searchingText.toLowerCase());

export const List: FC = () => {
  const data = useSelector(menuSelectors.selectAll);
  const { isFetching } = menuEndpoints.useGetMenuByOrganizationQuery();

  const [searchValue, setSearchValue] = useState("");
  const [searchModeActive, setSearchModeActive] = useState(false);

  const contextValue = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      searchModeActive,
      setSearchModeActive,
    }),
    [searchValue, setSearchValue, searchModeActive, setSearchModeActive],
  );

  if (isFetching) {
    return <Skeleton count={12} gap={3} height={40} />;
  }

  const filteredData = data.filter((item) =>
    searchingTextEquals(searchValue, item.title),
  );

  const grouped = {
    "1": filteredData,
  };

  return (
    <MenuPageContext.Provider value={contextValue}>
      <NewPage>
        <Header />
        <NewPage.Body>
          {isEmpty(filteredData) ? (
            <Empty />
          ) : (
            <Grid gap={2}>
              {Object.keys(grouped).map((key) => (
                <GroupList groupId={key} key={key} />
              ))}
            </Grid>
          )}
        </NewPage.Body>
      </NewPage>
    </MenuPageContext.Provider>
  );
};
