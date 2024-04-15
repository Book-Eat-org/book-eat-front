import { ChangeEvent, FC } from "react";
import classes from "./Search.module.css";
import { useOrganizationsContext } from "../../context.ts";

const Search: FC = () => {
  const { setSearchValue, searchValue } = useOrganizationsContext();

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value ?? "");

  return (
    <input
      className={classes.wrapper}
      placeholder="Поиск"
      value={searchValue}
      onChange={onChange}
    />
  );
};

export default Search;
