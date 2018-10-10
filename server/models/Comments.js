const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    message: String,
    from: {type: Schema.Types.ObjectId, ref:"User"},
    to: {type: Schema.Types.ObjectId, ref:"User"},
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Comments = mongoose.model("Comment", CommentSchema);
module.exports = Comments;