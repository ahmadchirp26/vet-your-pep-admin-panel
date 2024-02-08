import useSearchCustomersQuery from "@/api/Customers/useSearchCustomers";
import Combobox from "@/components/ui/combobox";
import { getMatchedSubstrings } from "@/utils/get-matched-substrings";
import React from "react";

type Moderator = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};
interface Props
  extends Omit<
    React.ComponentProps<typeof Combobox<Moderator>>,
    "value" | "isLoading" | "setQuery" | "query" | "onChange"
  > {
  value?: Moderator;
  onChange: (value: Moderator | undefined) => void;
}
const SelectModerator = ({ value, onChange, ...props }: Props) => {
  const { data, status, query, setQuery } = useSearchCustomersQuery();
  return (
    <Combobox
      query={query}
      setQuery={setQuery}
      value={
        value
          ? {
              value: value,
              label: value.firstName + " " + value.lastName,
              ...value,
            }
          : // This is important as it will clear the value when the user clears the input, simplying using underfined will not work
            null
      }
      onChange={(v) => onChange(v?.value)}
      isLoading={status === "pending"}
      options={data?.searchCustomers.results?.map((customer) => ({
        value: {
          email: customer.email,
          firstName: customer.firstName,
          id: customer.id,
          lastName: customer.lastName,
        },
        label: customer.firstName + " " + customer.lastName,
        id: customer.id,
      }))}
      getOptionDisplayValue={(option) => (
        <div className="flex flex-col">
          <p>{option.label}</p>
          <p className="text-gray-500">
            {getMatchedSubstrings(option.value.email, query ?? "").map(
              (str, idx) =>
                str.matched ? (
                  <span key={idx} className="text-gray-900 font-semibold">
                    {str.string}
                  </span>
                ) : (
                  <span key={idx}>{str.string}</span>
                ),
            )}
          </p>
        </div>
      )}
      {...props}
    />
  );
};

export default SelectModerator;
