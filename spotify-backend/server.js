import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import albumRouter from './src/routes/albumRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';

//APP CONFIG

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// MIDDLEWARES
app.use(express.json());

const allowedOrigins = [
    'https://priyadjain9spotify.netlify.app',
    'https://priyadjain9spotifyadmin.netlify.app/'
  ];
  
const corsOptions = {
    origin: function (origin, callback) {
     
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };

  app.use(cors(corsOptions));


// INITIALIZING ROUTES
app.use("/api/song",songRouter);
app.use("/api/album",albumRouter);
app.get('/',(req,res)=> res.send('API Working'));
app.listen(port,()=> console.log(`Server started on ${port}`));