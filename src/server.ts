import mongoose from "mongoose";
import app from "./app"
import config from "./config/index";

const port = config.port

async function main() {
  try {
    await mongoose.connect(config.database as string);
      console.log("🛢️  Database is connected successfully");
      
      app.listen(port, () => {
        console.log(`Application listening on port ${port}`)
      })
  } catch (error) {
    console.log("Fail to connect database", error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
