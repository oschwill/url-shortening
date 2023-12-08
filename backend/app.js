import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';

// ROUTES
import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';

const app = express();
app.use(cors());

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/', urlsRouter);

// connect to mongodb
connectDB();

// Server Start
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`RUNNING ON ${PORT}`));
