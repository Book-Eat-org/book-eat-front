import { IAddress } from "./context.ts";
import { GeocodeResult } from "yandex-maps";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";

export const getAddressByGeo = async (
  coords: string,
  ymaps: YMapsApi | null,
): Promise<IAddress> => {
  const res = await ymaps?.geocode(coords);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const firstGeoObject: GeocodeResult = res?.geoObjects.get(0);

  const building = firstGeoObject.getPremiseNumber();
  const street = firstGeoObject.getThoroughfare();
  const city = firstGeoObject.getLocalities();

  return { building, street, city };
};
