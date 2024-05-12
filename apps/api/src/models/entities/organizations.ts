export interface IOrganization {
  id: string;
  logoUrl?: string;
  title?: string;
  description?: string;
  legalInfo: {
    inn: string;
    ogrn: string;
    actualAddress: string;
    legalAddress: string;
    phone: string;
    email: string;
  };
}
