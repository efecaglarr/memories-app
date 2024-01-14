import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
 /* The CORS mechanism supports secure cross-origin requests and data 
transfers between browsers and servers. Browsers use CORS in APIs such as fetch() or 
XMLHttpRequest to mitigate the risks of cross-origin HTTP requests. */

app.use('/posts', postRoutes); // For http://local.host:4444/posts

app.get('/', (req,res) => {
  res.send('Hello to Memories API');
})

const PORT = process.env.PORT || 4444;

app.use((req, res) => {
  res.status(404).send('Not Found');
});

mongoose.connect(process.env.CONNECTION_URL)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})
.catch((error) => {
  console.log(error.message)
});


