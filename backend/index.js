const express = require('express');
const app = express();
const cors = require('cors');
const activitiesRouter = require('./routes/activityRoutes.js'); 



const port = 3000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
app.use("/activity", activitiesRouter)


app.listen(port, () => {
  console.log(`Node.js HTTP server is running on port ${port}`);
});

var MongoClient = require('mongodb').MongoClient;
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const url = 'mongodb://0.0.0.0:27017'; // use local host instead of 0.0.0.0 if not working
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log("Successfully connected to database!"); 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
