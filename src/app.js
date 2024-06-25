import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productRouter from './routers/productRouter.js';
// import commentRouter from './routers/commentRouter.js';

import './db/db.js';

export const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/product/', productRouter);
// app.use('/comment/', commentRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});
