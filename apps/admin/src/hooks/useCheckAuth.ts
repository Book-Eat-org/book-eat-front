import { organizationsEndpoints } from "$api";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthorizedAction } from "../store";
import { PAGES, PageURLS } from "$constants";

export const useCheckAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { error, isLoading } =
    organizationsEndpoints.useGetCurrentOrganisationQuery();
  const navigate = useNavigate();

  const unauthorized = error?.code === "AUTH_004";

  const isOnLoginPage = location.pathname.includes(PAGES[PageURLS.Login]);

  useEffect(() => {
    if (unauthorized) {
      navigate(PAGES[PageURLS.Login]);
    } else {
      isOnLoginPage && navigate(PAGES[PageURLS.Orders]);
      dispatch(setAuthorizedAction(true));
    }
  }, [unauthorized]);

  return { isLoading };
};
