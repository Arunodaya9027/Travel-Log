const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/travel-log')     
//         console.log("Connected to MongoDB Successfully");  
//     } catch (err) {
//         console.log("Error: ", err);
//     }
// }

const connect = async () => {  try {
    await mongoose.connect(
    process.env.MONGO_URI, {      
        useNewUrlParser: true,
      useUnifiedTopology: true,    
    });
    console.log("Server is Connected to the Database");  } catch (err) {
    console.log("Server is NOT connected to the Database", err.message);  }
};

module.exports = connect;