const mongoose = require('mongoose')
const DB_NAME = 'drones'
mongoose
    .connect(`mongodb://localhost:27017/${DB_NAME}`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Succesfully conected to ${DB_NAME}`))
    .catch((error) => console.log('Error connecting to DB', error))

process.on('SIGINT', () => {
    mongoose.connection
        .close()
        .then(() => console.log('Succesfully disconnected from DB'))
        .catch((e) => console.error('Error disconnecting from DB', e))
        .finally(() => process.exit())
})
