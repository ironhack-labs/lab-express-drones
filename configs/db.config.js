const mongoose = require('mongoose');
const uri = "mongodb+srv://hisamparker:y!K3AcgtJMgiAAsQ@cluster0.pviiy.mongodb.net/droneDB?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
