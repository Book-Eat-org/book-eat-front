import { Email, Inn, Ogrnip, Phone, Title, Address } from "./Fields";
import Block from "../Block";

const LegalInfo = () => (
  <Block>
    <Title />
    <Address />
    <Inn />
    <Ogrnip />
    <Email />
    <Phone />
  </Block>
);

export default LegalInfo;
