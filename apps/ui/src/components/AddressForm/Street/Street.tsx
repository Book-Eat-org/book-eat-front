import { useAddressContext } from "../context.ts";
import { useEffect, useId } from "react";
import { isNil } from "ramda";
import { UIInput } from "$components";
import { parseAddressToString } from "../utils.ts";

const Street = () => {
  const fieldId = useId();
  const {
    setSearchValue,
    searchValue,
    ymaps,
    setSuggestionsActive,
    value,
    setSuggestions,
  } = useAddressContext();

  useEffect(() => {
    const isValuesIdentity = searchValue === parseAddressToString(value);
    if (isValuesIdentity || isNil(searchValue)) {
      return;
    }
    ymaps
      ?.suggest(searchValue, {
        boundedBy: [
          [55.232016, 38.765356],
          [56.457481, 36.310508],
        ],
      })
      .then(setSuggestions);
  }, [searchValue, ymaps, value]);

  const onChange = (value: string) => {
    setSuggestionsActive(true);
    setSearchValue(value);
  };

  return (
    <UIInput
      id={fieldId}
      placeholder="Город, улица, дом*"
      value={searchValue}
      onChange={onChange}
    />
  );
};

export default Street;
