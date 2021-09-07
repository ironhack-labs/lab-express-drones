// Iteration #1

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


const drones=[
    {
    name:'',
    
    propellers:'',

    maxSpeed:'',

    },
    {
        name:'',
        
        propellers:'',
    
        maxSpeed:'',
    
    },
    {
    name:'',
    
    propellers:'',

    maxSpeed:'',

    },

    {
        name:'',
        
        propellers:'',
    
        maxSpeed:'',
    
    }]



    const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })
      .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
      })
      .catch((err) => {
        console.error("Error connecting to mongo: ", err);
      });

      //`.create()` method with the array as an argument

      Drone.create(drones)
      .then(dronesFromDB=>{
          console.log(`Created ${dronesFromDB.length}drones`);

        // Once created, close the DB connection
        mongoose.connection.close();

      })
      .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));