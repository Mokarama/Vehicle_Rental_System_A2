import app from "./app";
import initDB from "./config/db";

const port = process.env.PORT || 4000;

const startServer = async () => {
  await initDB();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();