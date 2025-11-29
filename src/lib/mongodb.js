import { MongoClient } from "mongodb";

// Use environment variable for MongoDB connection string
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env");
}

let client;
let clientPromise;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Development: reuse client across hot reloads
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Production: create a new client for each instance
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the promise to use in API routes
export default clientPromise;
