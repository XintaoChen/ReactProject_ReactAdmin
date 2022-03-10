const mongoose = require("mongoose");
const uri =
  "mongodb+srv://EKTeureka:eureka123123@cluster0.edopx.mongodb.net/test";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "BMS",
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
  process.exit(1);
});

db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" + db.port);
});

module.exports = db.uri;
