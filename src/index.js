import express from "express";
import cors from "cors";
import authRoutes from './routes/auth.js'
import servicesRoutes from './routes/services.js'
import orderRoutes from './routes/order.js'
import courseRoutes from './routes/course.js'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import morgan from 'morgan'
const app = express();
app.use(cors());
app.use(express.json());


// Set security HTTP headers
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common"));

// Limit Api Calls 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/', limiter);

// Routes 

app.use('/auth', authRoutes);
app.use('/', orderRoutes);
app.use('/', servicesRoutes);
app.use('/', courseRoutes);


export default app;