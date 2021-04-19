const mongoose = require('mongoose');
const chalk = require(`chalk`)

mongoose
  .connect('mongodb://localhost/express-drones-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(x =>
    console.log(chalk.green.inverse(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  )
  .catch(err => console.error(chalk.red.inverse('Error connecting to mongo', err)));
