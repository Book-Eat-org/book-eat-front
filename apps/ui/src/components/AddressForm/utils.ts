import { IAddress } from "./context.ts";
import { GeocodeResult } from "yandex-maps";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { MOSCOW_REGIONS } from "./constants.ts";
import { isNotNil } from "ramda";

export const getAddressByGeo = async (
  coords: string,
  ymaps: YMapsApi | null,
): Promise<IAddress> => {
  const res = await ymaps?.geocode(coords);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const firstGeoObject: GeocodeResult = res?.geoObjects.get(0);

  const areas = firstGeoObject.getAdministrativeAreas();

  const building = firstGeoObject.getPremiseNumber();
  const street = firstGeoObject.getThoroughfare();
  const city = firstGeoObject.getLocalities();

  return { building, street, city, areas };
};

export const parseAddressToString = (value: IAddress): string => {
  const { city, street, building } = value;

  return [city, street, building].filter(isNotNil).join();
};

export const checkArea = (areas: [string, string | undefined]) => {
  const [city, region] = areas;

  if (city === "Москва") {
    return true;
  }

  if (city === "Московская область") {
    return MOSCOW_REGIONS.some((item) => item === region);
  }

  return false;
};
