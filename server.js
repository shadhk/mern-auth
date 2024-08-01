import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

dotenv.config()
const PORT = process.env.PORT || 5000;

connectDB()
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use('/api/users', userRoutes)
app.use('/', (req,res)=>{
  res.send("server runs successfully")
})

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
