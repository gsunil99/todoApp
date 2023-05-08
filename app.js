import express from 'express';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from 'cors';
//import { connectDb } from './data/database.js';

const app = express();
config({
  path: './data/config.env',
});
//connectDb();

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(errorMiddleware);
app.use(
  cors({
    origin: [process.env.FRONTENT_URL],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
  })
);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);

app.get('/', (req, res) => {
  res.send('Nice!!!');
});

export default app;
