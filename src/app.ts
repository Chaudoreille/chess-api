import express from 'express';
import indexRoutes from './routes/index.routes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "http://localhost";

app.use("/", indexRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at ${host}:${port}`);
});

export default app;