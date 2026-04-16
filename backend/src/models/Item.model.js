const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    type: { type: String, enum: ["task", "event", "meeting"], default: "task" },
    status: {
      type: String,
      enum: ["pending", "in-done", "archived", "closed"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },

    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

ItemSchema.index({ userId: 1, status: 1 });

module.exports = mongoose.model("Item", ItemSchema);
