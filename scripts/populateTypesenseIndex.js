require("dotenv").config();

const Typesense = require("typesense");

module.exports = (async () => {
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      },
    ],
    apiKey: process.env.TYPESENSE_ADMIN_API_KEY,
  };

  console.log("Config: ", TYPESENSE_CONFIG);

  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

  const schema = {
    name: "products",
    num_documents: 0,
    fields: [
      {
        name: "ProductName",
        type: "string",
        facet: false,
      },
      {
        name: "Price",
        type: "int32",
        facet: false,
      },
    ],
    default_sorting_field: "Price",
  };

  const products = require("./data/products.json");

  try {
    const collection = await typesense.collections("products").retrieve();
    console.log("Found existing collection of products");
    console.log(JSON.stringify(collection, null, 2));

    if (collection.num_documents !== products.length) {
      console.log("Collection has different number of documents than data");
      console.log("Deleting collection");
      await typesense.collections("products").delete();
    }
  } catch (err) {
    console.error(err);
  }

  console.log("Creating schema...");
  console.log(JSON.stringify(schema, null, 2));

  await typesense.collections().create(schema);

  console.log("Populating collection...");

  products.forEach(async (product) => {
    delete product.id
  });
  try {
    const returnData = await typesense
      .collections("products")
      .documents()
      .import(products);

    console.log("Return data: ", returnData);
  } catch (err) {
    console.error(err);
  }
})();
