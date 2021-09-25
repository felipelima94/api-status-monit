import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();
import "./database"
import { UrlController } from "./controllers/UrlContoller";
import { TagController } from "./controllers/TagContoller";
import { CategoryController } from "./controllers/CategoryContoller";

const app = express();
const PORT = 3000;
app.use(express.json())

app.get('/', (req, res) => res.send("<img src='https://th.bing.com/th/id/R.9df3d8c082694026baf983665b14e296?rik=y1pDjTDDSEJL5Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f_NBycgEcXyEM%2fTIwJkHC6n5I%2fAAAAAAAAAEE%2fGKa-vpLItm8%2fs1600%2fMun%2bHa.jpg&ehk=r6ydDEFs0esMHtZefQy6YKYKZMpaMwlNBz7kxa8B66c%3d&risl=&pid=ImgRaw&r=0'>"));

app.use('/url', new UrlController().getRoutes())
app.use('/tag', new TagController().getRoutes())
app.use('/category', new CategoryController().getRoutes())

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`))