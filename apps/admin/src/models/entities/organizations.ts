export interface IOrganization {
  id: string;
  image?: string;
  title?: string;
  name?: string;
  inn?: string;
  ogrnip?: string;
  fileIds?: string[];
  actualContacts?: {
    address?: string;
    phones: {
      id: string;
      value: string;
    }[];
    emails: {
      id: string;
      value: string;
    }[];
  };
  legalContacts?: {
    address?: string;
    phones: {
      id: string;
      value: string;
    }[];
    emails: {
      id: string;
      value: string;
    }[];
  };
}
