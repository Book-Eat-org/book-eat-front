import {
  Email,
  Inn,
  Ogrnip,
  Phone,
  Title,
  Address,
  ActualAdress,
} from "./Fields";
import Block from "../Block";

const LegalInfo = () => (
  <Block>
    <Title />
    <Inn />
    <Ogrnip />
    <ActualAdress />
    <Phone />
    <Email />
    <Address />
  </Block>
);

export default LegalInfo;
