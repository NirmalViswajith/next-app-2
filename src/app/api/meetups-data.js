import { MongoClient } from "mongodb";

async function handler(req, res){
  if(req.method === 'POST'){
    try {
      
      const client = await MongoClient.connect('mongodb+srv://next_user_01:fcV37qBRLkKXscEj@cluster0.4nbdx5u.mongodb.net/?retryWrites=true&w=majority');
      const db = client.db();
      const collection = db.collection('meetups');
      const data = req.body;
      const result = await collection.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({ message: 'Meetup Inserted!!!' });
    } catch (error) {
      console.error('Error inserting meetup:', error);
      res.status(500).json({ message: 'Error inserting meetup' });
    }
    
  }
}


export default handler;