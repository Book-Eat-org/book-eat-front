export interface IFormValues {
  image?: string;
  title?: string;
  inn?: number;
  ogrnip?: number;
  files?: { value: File; id: string }[];
  actualContactsAddress?: string;
  actualContactsPhones: {
    id: string;
    value: string;
  }[];
  actualContactsEmails: {
    id: string;
    value: string;
  }[];
  legalContactsAddress?: string;
  legalContactsEmails: {
    id: string;
    value: string;
  }[];
  legalContactsPhones: {
    id: string;
    value: string;
  }[];
}
