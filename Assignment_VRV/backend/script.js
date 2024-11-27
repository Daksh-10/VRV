const { MongoClient } = require("mongoose");

// Replace the URL with your MongoDB connection string
const uri = "mongodb://localhost:27017/groups"; // or your MongoDB Atlas URL

async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db(); // Get the database instance
    // Perform operations on the database, e.g., db.collection('myCollection').find()

    return db; // You can return the db instance for further use
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB();
