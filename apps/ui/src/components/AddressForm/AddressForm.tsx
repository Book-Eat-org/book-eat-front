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
import { isNotNil } from "ramda";
import { getAddressByGeo } from "./utils.ts";
import { MapEvent } from "yandex-maps";
import Button from "../Button";

interface IProps {
  value?: string;
  onChange: (value?: string, state?: IAddress) => void;
}

const NewAddress: FC<IProps> = (props) => {
  const { value, onChange } = props;

  const [state, setState] = useState<IAddress>({ street: value });

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 12,
    controls: [] as string[],
  };

  const ymaps = useYMaps(["Map", "geocode"]);

  const onClick = async (event: MapEvent) => {
    const coords = event.get("coords");
    const { building, street, city } = await getAddressByGeo(coords, ymaps);
    const newStreet = [city, street, building].filter(isNotNil).join();
    setState((prevState) => ({
      ...prevState,
      location: coords,
      street: newStreet,
    }));
  };

  const submitHandler = () => {
    onChange(state.street, state);
  };

  return (
    <AddressContext.Provider
      value={{ value: state, setValue: setState, ymaps }}
    >
      <Grid gap={3}>
        <Map defaultState={defaultState} onClick={onClick} width="100%">
          {state.location && <Placemark geometry={state.location} />}
          <ZoomControl />
          <GeolocationControl />
        </Map>
        <Street />
        <Button onClick={submitHandler}>Сохранить</Button>
      </Grid>
    </AddressContext.Provider>
  );
};

export default NewAddress;
