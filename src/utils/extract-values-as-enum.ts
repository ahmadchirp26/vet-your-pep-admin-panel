type Option = {
  value: string;
};
export function extractValuesAsEnum<T extends Option>(options: Array<T> | readonly T[]) {
  if (!options.length) throw new Error("No options provided");
  return [
    options[0].value,
    ...options.slice(1).map((option) => option.value),
  ] as const;
}
