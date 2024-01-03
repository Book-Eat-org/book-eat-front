import { loginApi } from "$api";
import { useNavigate } from "react-router-dom";
import { PAGE_URLS } from "$constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizedSelector, setAuthorizedAction } from "../store";

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { data, isSuccess, isLoading } = loginApi.useCheckAuthQuery();

  const authorized = useSelector(authorizedSelector);
  const navigate = useNavigate();

  const checkAuthAuthorized = Boolean(data?.id);

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
