import { fetcher } from "@/lib/fetcher";
import { Item } from "@/types/Item";

export const createNewItem = async (item: Item) => {
  return await fetcher("/items", {
    method: "POST",
    body: JSON.stringify(item),
  });
};

export const getAllItems = async (page: number) => {
  const data = await fetcher(`/items?page=${page}&limit=10`, {
    method: "GET",
  });

  if (data) {
    if (data.items)
      return {
        items: data.items as Item[],
        page: data.page,
        totalItems: data.totalItems,
        totalPages: data.totalPages,
      };
  }
};

export const updateItem = async (item: Item) => {
  return await fetcher(`/items/${item._id}`, {
    method: "PATCH",
    body: JSON.stringify(item),
  });
};

export const deleteItem = async (id: string) => {
  return await fetcher(`/items/${id}`, {
    method: "DELETE",
  });
};
