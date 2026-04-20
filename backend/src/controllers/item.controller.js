const itemService = require("../services/item.service");
const asyncHandlerUtils = require("../utils/asyncHandler.utils");

// feat(task): get all tasks
exports.getAllItems = asyncHandlerUtils(async (req, res, next) => {
  try {
    const result = await itemService.getAllItems({
      reqLimit: req.body.limit,
      reqPage: req.body.page,
    });

    res.status(200).json({
      items: result.items,
      page: result.page,
      totalItems: result.totalItems,
      totalPages: result.totalPages,
    });
  } catch (error) {
    next(error);
  }
});

// feat(task): get task by id
exports.getItemById = asyncHandlerUtils(async (req, res, next) => {
  try {
    const item = await itemService.getItemById(req.params.id);

    res.status(200).json({
      item: item,
    });
  } catch (error) {
    next(error);
  }
});

// feat(task): create task
exports.createItem = asyncHandlerUtils(async (req, res, next) => {
  try {
    const item = await itemService.createItem({
      data: req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      item: item,
    });
  } catch (error) {
    next(error);
  }
});

// feat(task): delete task
exports.deleteItem = asyncHandlerUtils(async (req, res, next) => {
  try {
    await itemService.deleteItem({
      itemId: req.params.id,
      userId: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

// feat(task): update task
exports.updateItem = asyncHandlerUtils(async (req, res, next) => {
  try {
    const result = await itemService.updateItem({
      itemId: req.params.id,
      userId: req.user.id,
      updateData: req.body,
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
