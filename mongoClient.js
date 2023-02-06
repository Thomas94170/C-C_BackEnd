const mongoose = require("mongoose");
const URI =
  "mongodb+srv://adminClickCollect:1234azerty@cluster-clickcollect.3kfs6xj.mongodb.net/marketplace?retryWrites=true&w=majority";

const MongoClient = {
  init: () => {
    try {
      mongoose.set("strictQuery", false);

      const client = mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      client.then(() => console.log("connexion ok à la BDD"));
    } catch (e) {
      throw Error(e);
      error.log("erreur" + e);
    }
  },
};

module.exports = MongoClient;
