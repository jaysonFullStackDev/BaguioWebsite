import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`This app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
