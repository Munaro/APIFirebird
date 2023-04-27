import express from 'express';
import cors from 'cors';
import { router } from './routes.js';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`server up on http://localhost:${port}`));