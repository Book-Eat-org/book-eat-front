import { partition } from "ramda";

import { useWatch } from "react-hook-form";

import { UIGrid } from "@book-eat/ui";
import { Contacts as EnumContacts } from "$enums";

import { IFormValues } from "../../models";
import { AddEmail } from "./AddEmail";
import { AddPhone } from "./AddPhone";
import { Email } from "./Email";
import { Phone } from "./Phone";
import { Phones } from "./Phones";
import { Name } from "./Name";

export const Contacts = () => {
  const additionalFields = useWatch<IFormValues, "additionalFields">({
    name: "additionalFields",
  });

  const [emails, phones] = partition(
    ({ title }) => title === EnumContacts.Mail,
    additionalFields,
  );

  return (
    <UIGrid gap="8px">
      <Phone />
      <Name />
      {phones?.map(({ id }) => <Phones id={id} key={id} />)}
      {emails?.map(({ id }) => <Email id={id} key={id} />)}
      <AddPhone />
      <AddEmail />
    </UIGrid>
  );
};
