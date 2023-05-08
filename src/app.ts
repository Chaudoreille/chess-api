import express from 'express';
import indexRoutes from './routes/index.routes';

const app = express();
const port = 3000;

app.use("/", indexRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default app;