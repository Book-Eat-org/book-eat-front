import { useAddressContext } from "../context.ts";
import { useEffect, useId, useState } from "react";
import { isNotNil, prop } from "ramda";
import { Autocomplete } from "$components";

const Street = () => {
  const fieldId = useId();
  const { value: stateValue, setValue, ymaps } = useAddressContext();
  const [suggested, setSuggested] = useState([]);

  const { street } = stateValue;
  const onChange = (value: string) => {
    console.log(value);
  };

  const onTextChange = (value: string) => {
    console.log(value);
    setValue({ ...stateValue, street: value });
  };

  useEffect(() => {
    if (isNotNil(street)) {
      console.log(street, ymaps);
      ymaps
        ?.suggest(street, {
          boundedBy: [
            [55.232016, 38.765356],
            [56.457481, 36.310508],
          ],
        })
        .then(setSuggested);
    }
  }, [street, ymaps]);

  return (
    <Autocomplete
      id={fieldId}
      renderValue={prop("value")}
      valueExtractor={prop("value")}
      onTextChange={onTextChange}
      placeholder="Город, улица, дом*"
      value={street}
      options={suggested}
      onChange={onChange}
      textValue={street}
    />
  );
};

export default Street;
