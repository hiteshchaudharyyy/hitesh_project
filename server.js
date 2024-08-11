const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();
app.use(cors());  // Allow CORS for cross-origin requests
app.use(fileUpload()); 
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use('/api', fileRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
