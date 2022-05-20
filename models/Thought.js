const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      length: [1, 280],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //   * Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      require: true,
    },
    reactions: {
      //   * Array of nested documents created with the `reactionSchema`
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);

moduel.exports = Thought;
