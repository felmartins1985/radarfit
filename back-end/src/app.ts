import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from './middlewares/error';
import produtoRouter from './routes/produto';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/produtos', produtoRouter);
app.use(errorHandler);
export default app;