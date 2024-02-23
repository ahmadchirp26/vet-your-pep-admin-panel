import useGetChannels from "@/api/Channels/useGetChannels";

import Combobox from "@/components/ui/combobox";
import { getMatchedSubstrings } from "@/utils/get-matched-substrings";
import React from "react";

type Channel = {
  id: string;
  title: string;
};
interface Props
  extends Omit<
    React.ComponentProps<typeof Combobox<Channel>>,
    "value" | "isLoading" | "setQuery" | "query" | "onChange"
  > {
  value?: Channel;
  onChange: (value: Channel | undefined) => void;
}
const SelectChannel = ({ value, onChange, ...props }: Props) => {
  const { data, status, query, setQuery } = useGetChannels();
  // const { data, status, query, setQuery } = useSearchCustomersQuery();
  return (
    <Combobox
      query={query}
      setQuery={setQuery}
      value={
        value
          ? {
              value: value,
              label: value.title,
              ...value,
            }
          : // This is important as it will clear the value when the user clears the input, simplying using underfined will not work
            null
      }
      onChange={(v) => onChange(v?.value)}
      isLoading={status === "pending"}
      options={data?.getChannels?.results?.map((channel) => ({
        value: {
          title: channel.title,
          id:channel.id
        },
        label: channel.title,
        id: channel.id,
      }))}
      getOptionDisplayValue={(option) => (
        <div className="flex flex-col">
          <p>{option.label}</p>
          {/* <p className="text-gray-500">
            {getMatchedSubstrings(option.value.title, query ?? "").map(
              (str, idx) =>
                str.matched ? (
                  <span key={idx} className="font-semibold text-gray-900">
                    {str.string}
                  </span>
                ) : (
                  <span key={idx}>{str.string}</span>
                ),
            )}
          </p> */}
        </div>
      )}
      {...props}
    />
  );
};

export default SelectChannel;
