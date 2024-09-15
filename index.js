import express from 'express';
import saints from "./server/routes/saints.js"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Saints API service listening on port ${port}`)
});

// Load the /saints routes
app.use("/saints", saints);