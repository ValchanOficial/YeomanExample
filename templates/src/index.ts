import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes'

dotenv.config();

const PORT = process.env.PORT || '<%= port %>';

const app  = express();
app.use(cors());
app.use(express.json())
app.use('/', routes);

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});