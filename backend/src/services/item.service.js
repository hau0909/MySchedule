const Item = require("../models/Item.model");
const AppError = require("../utils/AppError.utils");

// feat(task): gett ALl Tasks
exports.getAllItems = async () => {
  const items = await Item.find();

  if (!items) return { items: [] };

  return { items };
};

// feat(task): gett item by Id
exports.getItemById = async (id) => {
  const item = await Item.findById({ _id: id });

  if (!item) throw new AppError("Item not found", 404);

  return { item };
};

// feat(task): create item
exports.createItem = async ({ data, userId }) => {
  const created = await Item.create({
    ...data,
    userId,
  });

  if (!created) throw new AppError("Item created fail!", 400);
  return created;
};

// feat(task): update item
exports.updateItem = async ({ itemId, userId, updateData }) => {
  const updatedItem = await Item.findOneAndUpdate(
    {
      _id: itemId,
      userId: userId,
    },
    updateData,
    { new: true, runValidators: true },
  );

  if (!updatedItem)
    throw new AppError(
      "Item not found or you do not have permission to edit it",
      404,
    );

  return updatedItem;
};

// feat(task): delete item
exports.deleteItem = async ({ itemId, userId }) => {
  const deletedItem = await Item.findOneAndDelete({
    _id: itemId,
    userId: userId,
  });

  if (!deletedItem)
    throw new AppError(
      "Item not found or you do not have permission to delete it",
      404,
    );
};
