import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import produtoRouter from './routes/produto';
const app = express();
app.use(express.json());
app.use('/produtos', produtoRouter);
app.use(errorHandler);
export default app;