const express = require("express");
const cors = require("cors");
const app = express();
const port = 4500;
const mongoBDClient = require("./mongoClient");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//interagir avec la bdd en s'y connectant
const Product = require("./model/product");

//filtre par categorie
app.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category: category });
  try {
    res.send(products);
  } catch {
    res.status(500).send(err);
  }
});

//graphQL qui nous sert a interagir avec l interface
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Serveur fonctionne et écoute sur le port ${port}`);
  mongoBDClient.init();
});
