import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await new MongoClient(
        "mongo db connection string"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup Inserted" });
    } catch (err) {
      console.log(err);
      res.status(201).json({ message: "error aaya" });
    }
  }
}

export default handler;
