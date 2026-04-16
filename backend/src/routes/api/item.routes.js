const express = require("express");
const router = express.Router();
const itemController = require("../../controllers/item.controller");

const authMiddleware = require("../../middleware/auth.middleware");

// feat(tasks): get all tasks
router.get("/", authMiddleware, itemController.getAllItems);
// feat(tasks): get item by Id
router.get("/:id", authMiddleware, itemController.getItemById);
// feat(tasks): create task
router.post("/", authMiddleware, itemController.createItem);
// feat(tasks): update task
router.patch("/:id", authMiddleware, itemController.updateItem);
// feat(tasks): delete task
router.delete("/:id", authMiddleware, itemController.deleteItem);

module.exports = router;
