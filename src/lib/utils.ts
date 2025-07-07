export const getRoundedBorder = (index: number, list: any[]) => {
  if (list.length === 1) return "rounded-md";
  if (index === 0) return "rounded-t-md";
  if (index === list.length - 1) return "rounded-b-md";
};
