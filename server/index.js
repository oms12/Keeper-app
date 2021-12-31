import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv";
import bodyParser  from "body-parser";

import postRoutes from "./routes/notes.js";
import userRoutes from "./routes/users.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
/// app set up

app.use(bodyParser.urlencoded({limit :"30mb",extended : true}));
//console.log(process.env.uri);
mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB connection established successfully");
});

app.get("/",(req,res)=>
{
  res.send("Welcome to Keeper App Api");
})


app.use("/posts",postRoutes);
app.use("/users",userRoutes);
app.listen(process.env.PORT || 3000,()=>{
  console.log("server started");
 });
