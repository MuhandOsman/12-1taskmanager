const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.db_url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) console.error(err);
    console.log("connected to database");
    
    
});


const db = client.db();

module.exports = db;