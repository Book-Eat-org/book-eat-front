import { organizationsEndpoints } from "$api";
import { useNavigate } from "react-router-dom";
import { PAGE_URLS } from "$constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizedSelector, setAuthorizedAction } from "../store";
import { isEmpty, isNotNil } from "ramda";

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { data, isSuccess, isLoading } =
    organizationsEndpoints.useGetCurrentOrganisationQuery();
  const authorized = useSelector(authorizedSelector);
  const navigate = useNavigate();

  const checkAuthAuthorized = Boolean(
    Array.isArray(data?.ids) && !isEmpty(data.ids.filter(isNotNil)),
  );

  useEffect(() => {
    if (isSuccess && !checkAuthAuthorized) {
      navigate(PAGE_URLS.LOGIN);
    }
    if (checkAuthAuthorized) {
      dispatch(setAuthorizedAction(true));
    }
  }, [checkAuthAuthorized, isSuccess]);

  return { authorized, isLoading };
};
