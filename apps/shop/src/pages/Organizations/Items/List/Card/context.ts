import { EntityId } from "@reduxjs/toolkit";
import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { organizationsSelectors } from "@book-eat/api";

interface IOrganizationCardContext {
  id: EntityId;
}

export const OrganizationCardContext = createContext<IOrganizationCardContext>({
  id: "",
});

export const useOrganizationContext = () => useContext(OrganizationCardContext);

export const useOrganization = () => {
  const { id } = useOrganizationContext();

  return useSelector((state) => organizationsSelectors.selectById(state, id));
};
