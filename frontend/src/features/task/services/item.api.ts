import { fetcher } from "@/lib/fetcher";
import { Item } from "@/types/Item";

export const createNewItem = async (item: Item) => {
  return await fetcher("/items", {
    method: "POST",
    body: JSON.stringify(item),
  });
};

export const getAllItems = async () => {
  const data = await fetcher("/items", {
    method: "GET",
  });

  if (data) {
    if (data.items) return data.items as Item[];
  }
};
