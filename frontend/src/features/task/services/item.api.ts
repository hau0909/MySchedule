import { fetcher } from "@/lib/fetcher";
import { Item } from "@/types/Item";

export const createNewItem = async (item: Item) => {
  return await fetcher("/items", {
    method: "POST",
    body: JSON.stringify(item),
  });
};
