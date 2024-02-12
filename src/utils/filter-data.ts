// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function filterData<T extends Record<string, any>>(
  array: T[],
  filterKeys: string[]
) {
  return array.filter((obj) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(obj).some((key) => filterKeys.includes(key));
  });
}
