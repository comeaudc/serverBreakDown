//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import dogRoutes from './routes/dog.mjs';
import Dogs from './models/dogSchema.mjs';
import doggos from './utilities/data.mjs';

//Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to DB
connectDB();

//Middleware
app.use(express.json());

//Routes
app.use('/dog', dogRoutes);

//Create a seed route to fill our database with data
app.get('/seed', async (req, res) => {
  // This allows us to clear db before putting new data in (optional)
  // await Dogs.deleteMany({})

  //This creates all data entries from array in db
  await Dogs.create(doggos);

  res.send('seeding db');
});

//Error Checking Middleware
app.use((err, _req, res, next) => {
  res.status(500).json({ msg: 'You have encountered an error' });
});

//Listen to our express server
app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
