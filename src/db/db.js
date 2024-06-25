import mongoose from 'mongoose';
import 'dotenv/config';
const { DB_URI } = process.env;

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
