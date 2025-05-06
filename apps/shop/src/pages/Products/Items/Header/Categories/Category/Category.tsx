import { FC, useEffect } from "react";
import { ListNavigation } from "@book-eat/ui";
import { useScroll } from "../ScrollProvider";

interface IProps {
  id: string;
  title: string;
}

const Category: FC<IProps> = (props) => {
  const { id, title } = props;
  const { currentId } = ListNavigation.useListNavigationContext();
  const { scrollToId } = useScroll();

  useEffect(() => {
    if (currentId === id) {
      scrollToId(id);
    }
  }, [currentId, id, scrollToId]);

  return (
    <div data-id={id}>
      <ListNavigation.MenuNavItem id={id}>{title}</ListNavigation.MenuNavItem>
    </div>
  );
};

export default Category;
