const mongoose = require("mongoose");

const TimelineItemSchema = new mongoose.Schema({
  timelineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Timeline",
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
});

module.exports = mongoose.model("TimelineItem", TimelineItemSchema);
