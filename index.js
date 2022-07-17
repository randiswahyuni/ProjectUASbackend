
import express from "express";
import cors from "cors";
import MhsRoute from "./routes/MhsRoute.js";
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(MhsRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));