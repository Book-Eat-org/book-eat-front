import { FormProvider, useForm } from "react-hook-form";

import { Confirmation, Password, Phone } from "./Fields";
import ForgotPassword from "./ForgotPassword";
import { IFormState } from "./models";
import Submit from "./Submit";
import { UIGrid } from "@book-eat/ui";
import { loginApi } from "$api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthorizedAction } from "../../store";
import { Page } from "$components";
import { PAGES, PageURLS } from "$constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [trigger, { data }] = loginApi.useLoginMutation();

  useEffect(() => {
    if (data?.status === "ok") {
      dispatch(setAuthorizedAction(true));
      navigate(PAGES[PageURLS.Users]);
    }
  }, [data]);

  const defaultValues: IFormState = {
    confirmation: false,
  };

  const methods = useForm<IFormState>({
    defaultValues,
  });

  const handleSubmit = async (data: IFormState) => {
    const { username, password } = data;

    if (username && password) {
      trigger({ username, password });
    }
  };

  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Авторизация для партнеров</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <FormProvider {...methods}>
          <UIGrid gap="20px">
            <UIGrid gap="30px">
              <Phone />
              <Password />
            </UIGrid>
            <UIGrid justifyContent="end">
              <ForgotPassword />
            </UIGrid>
            <UIGrid>
              <Confirmation />
            </UIGrid>
            <Submit onSubmit={methods.handleSubmit(handleSubmit)} />
          </UIGrid>
        </FormProvider>
      </Page.Body>
    </Page>
  );
};

export default Login;
