import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';


const app = express()


app.use(bodyParser.json({ limit : "30mb", extended : true }));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }));

app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://root:root@cluster0.wlelx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running successfully on ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);  --> no longer required