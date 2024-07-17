import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import { pokemonRouter } from './src/routes/pokemon-route';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', pokemonRouter);
app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`);
});
