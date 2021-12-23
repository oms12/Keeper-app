import mongoose from "mongoose";
const noteSchema = mongoose.Schema({
    title : String,
    content: String,
});
const noteMessage = mongoose.model('noteMessage',noteSchema);
export default noteMessage;