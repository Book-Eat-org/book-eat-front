import {
  Email,
  Inn,
  Ogrnip,
  Phone,
  Title,
  Address,
  ActualAdress,
  Brand,
} from "./Fields";
import Block from "../Block";

const LegalInfo = () => (
  <Block>
    <Brand />
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
