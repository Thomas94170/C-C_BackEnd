const graphql = require("graphql");
const Product = require("../model/product");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
} = graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    filter: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hello graphQl";
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({});
      },
    },
  },
});

var schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
