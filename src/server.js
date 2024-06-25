import { app } from './app.js';

const { PORT } = process.env;

const startServer = async () => {
  try {
    const port = PORT || 1234;
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
