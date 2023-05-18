import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import {employeeRoute} from './routes/employees.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello World');
  });

  app.use('/employees', employeeRoute);

  mongoose.connect('mongodb+srv://lahiruyasasme:E0DB6rGcOUwy6zzk@employees.utzxsdd.mongodb.net/?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  

  app.listen(5000, () => {
    console.log('Server listening on port 5000');
  });