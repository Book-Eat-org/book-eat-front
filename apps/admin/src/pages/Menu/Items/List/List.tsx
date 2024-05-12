import { Skeleton } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { menuEndpoints, menuSelectors } from "$api";
import GroupList from "./GroupList";
import { groupBy, intersection, isEmpty } from "ramda";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  placesIds: EntityId[];
}

const List: FC<IProps> = (props) => {
  const { placesIds } = props;

  const data = useSelector(menuSelectors.selectAll);
  const { isFetching } = menuEndpoints.useGetMenuByOrganizationQuery();

  if (isFetching) {
    return <Skeleton count={12} gap={3} height={40} />;
  }

  const grouped = {
    "1": data,
  };

  return (
    <div>
      {Object.keys(grouped).map((key) => (
        <GroupList groupId={key} key={key} points={placesIds} />
      ))}
    </div>
  );
};

export default List;
