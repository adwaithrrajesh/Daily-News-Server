import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();


const adminRoute = require('./routes/adminRoute')

app.use('/admin',adminRoute)


// Start the server
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
