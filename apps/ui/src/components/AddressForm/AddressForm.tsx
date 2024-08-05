import {
  GeolocationControl,
  Map,
  Placemark,
  useYMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import { FC, useState } from "react";

import Grid from "../Grid";
import Street from "./Street";
import { AddressContext, IAddress } from "./context.ts";
import { isEmpty, not } from "ramda";
import { checkArea, getAddressByGeo, parseAddressToString } from "./utils.ts";
import { MapEvent } from "yandex-maps";
import Button from "../Button";
import { Dialog } from "./Dialog";
import Page from "../Page";
import { Suggestions } from "./Suggestions";
import { theme } from "$theme";
import { BackIcon24 } from "$assets";
import Flex from "../Flex";

interface IProps {
  value?: string;
  onChange: (value?: string, state?: IAddress) => void;
  onBack?: () => void;
}

const NewAddress: FC<IProps> = (props) => {
  const { value, onChange, onBack } = props;

  const [state, setState] = useState<IAddress>({ street: value });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(value);

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 12,
    controls: [] as string[],
  };
  const toggleDialog = () => setDialogOpen(not);

  const ymaps = useYMaps(["Map", "geocode"]);

  const onClick = async (event: MapEvent) => {
    const coords = event.get("coords");
    const address = await getAddressByGeo(coords, ymaps);

    const stringAddress = parseAddressToString(address);

    if (!checkArea(address.areas!)) {
      toggleDialog();
      return false;
    }
    setSearchValue(stringAddress);
    setState((prevState) => ({
      ...prevState,
      location: coords,
      street: stringAddress,
    }));
  };

  const submitHandler = () => {
    onChange(state.street, state);
  };

  return (
    <AddressContext.Provider
      value={{
        value: state,
        setValue: setState,
        ymaps,
        suggestions,
        setSuggestions,
        searchValue,
        setSearchValue,
        suggestionsActive,
        setSuggestionsActive,
      }}
    >
      <Page>
        <Page.Header>
          <Page.Header.Buttons>
            <Flex
              backgroundColor={theme.colors.primary90}
              borderRadius={10}
              padding="6px"
            >
              <BackIcon24 onClick={onBack} />
            </Flex>
          </Page.Header.Buttons>
          <Street />
        </Page.Header>
        <Page.Body>
          <Grid gap={3}>
            <Map defaultState={defaultState} onClick={onClick} width="100%">
              {state.location && <Placemark geometry={state.location} />}
              <ZoomControl />
              <GeolocationControl />
            </Map>
            <Button onClick={submitHandler}>Сохранить</Button>
            {!isEmpty(suggestions) && suggestionsActive && <Suggestions />}
          </Grid>
          {dialogOpen && (
            <Dialog onClose={toggleDialog}>
              Доставка осуществляется по Москве и ближнему Подмосковью
            </Dialog>
          )}
        </Page.Body>
      </Page>
    </AddressContext.Provider>
  );
};

export default NewAddress;
