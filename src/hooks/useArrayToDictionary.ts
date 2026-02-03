export const useArrayToDictionary = (
  array: Record<string, string>[],
  keyField: string
): Record<string, Record<string, string>> => {
  return array.reduce(
    (dict, item) => {
      const key = item[keyField];
      if (key !== undefined) {
        dict[key] = item;
      }
      return dict;
    },
    {} as Record<string, Record<string, string>>
  );
};
