import mongoose from "mongoose";
const noteSchema = mongoose.Schema({
    userId : String,
    title : String,
    content: String,
});
const noteMessage = mongoose.model('noteMessage',noteSchema);
export default noteMessage;