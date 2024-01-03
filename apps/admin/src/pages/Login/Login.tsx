import { FormProvider, useForm } from "react-hook-form";

import { Confirmation, Password, Phone } from "./Fields";
import ForgotPassword from "./ForgotPassword";
import classes from "./Login.module.css";
import { IFormState } from "./models";
import Submit from "./Submit";
import { UIGrid } from "@book-eat/ui";
import { loginApi } from "$api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_URLS } from "$constants";
import { useDispatch } from "react-redux";
import { setAuthorizedAction } from "../../store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [trigger, { data }] = loginApi.useLoginMutation();

  useEffect(() => {
    if (data?.isAuthenticated) {
      dispatch(setAuthorizedAction(true));
      navigate(PAGE_URLS.CONNECT);
    }
  }, [data]);

  const defaultValues: IFormState = {
    confirmation: false,
  };

  const methods = useForm<IFormState>({
    defaultValues,
  });

  const handleSubmit = async (data: IFormState) => {
    const { phone, password } = data;

    if (phone && password) {
      trigger({ username: phone, password: password });
    }
  };

  return (
    <FormProvider {...methods}>
      <UIGrid gap="30px" className={classes.wrapper}>
        <span className={classes.title}>Вход</span>
        <UIGrid gap="20px">
          <span className={classes.subtitle}>
            Введите номер телефона, зарегистрированный в системе
          </span>
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
      </UIGrid>
    </FormProvider>
  );
};

export default Login;
