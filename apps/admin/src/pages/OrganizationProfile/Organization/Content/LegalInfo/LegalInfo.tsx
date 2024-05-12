import { Email, Inn, Ogrnip, Phone, Title } from "./Fields";
import Block from "../Block";

const LegalInfo = () => (
  <Block>
    <Title />
    <Email />
    <Phone />
    <Inn />
    <Ogrnip />
  </Block>
);

export default LegalInfo;
