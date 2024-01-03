import { useWatch } from "react-hook-form";
import { IFormValues } from "../models";
import { AddEmail } from "./AddEmail";
import { AddPhone } from "./AddPhone";
import { Emails } from "./Emails";
import { Phones } from "./Phones";
import { Address } from "./Address";
import Block from "../Block";

export const LegalContacts = () => {
  const { legalContactsPhones, legalContactsEmails } = useWatch<IFormValues>();

  return (
    <Block>
      <Address />
      {legalContactsPhones?.map(({ id }) => <Phones id={id} key={id} />)}
      {legalContactsEmails?.map(({ id }) => <Emails id={id} key={id} />)}
      <AddPhone />
      <AddEmail />
    </Block>
  );
};
