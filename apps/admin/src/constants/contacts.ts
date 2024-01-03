import { Contacts } from "$enums";

export const CONTACTS_CONFIG: Record<Contacts, { label: string }> = {
  [Contacts.Phone]: {
    label: "Телефон",
  },
  [Contacts.Telegram]: {
    label: "Telegram",
  },
  [Contacts.WhatsApp]: {
    label: "WhatsApp",
  },
  [Contacts.Mail]: {
    label: "Почта",
  },
};
