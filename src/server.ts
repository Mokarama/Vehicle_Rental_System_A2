import app from "./app";
import config from "./config";
import initDB from "./config/db";

const port = config.port || 4000;

const startServer = async () => {
  await initDB(); // DB init

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();