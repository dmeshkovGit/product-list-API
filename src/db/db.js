import mongoose from 'mongoose';

// const DB_URI = process.env.DB_URI;

mongoose
  .connect(
    'mongodb+srv://dmitriymeshkov:TJXlbCBICMNurocc@cluster0.huei6hx.mongodb.net/db-products?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
