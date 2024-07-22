import { useAddressContext } from "../../context.ts";
import { Flex, Typography } from "$components";
import { FC } from "react";
import { ArrowRightIcon24 } from "$assets";
import { getAddressByGeo, parseAddressToString } from "../../utils.ts";

interface IProps {
  value: string;
}

export const Item: FC<IProps> = (props) => {
  const { value } = props;
  const {
    setValue,
    setSuggestions,
    suggestions,
    setSuggestionsActive,
    setSearchValue,
    ymaps,
  } = useAddressContext();

  const item = suggestions.find((suggestion) => suggestion.value === value);

  const onClick = async () => {
    const geo = await getAddressByGeo(item?.value ?? "", ymaps);
    setValue(geo);
    setSearchValue(parseAddressToString(geo));
    setSuggestions([]);
    setSuggestionsActive(false);
  };

  return (
    <Flex onClick={onClick} justifyContent="space-between">
      <Typography size="16/16" fontWeight={500}>
        {item?.displayName}
      </Typography>
      <ArrowRightIcon24 />
    </Flex>
  );
};
