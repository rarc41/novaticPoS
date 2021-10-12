import mongoose from 'mongoose';

const url = 'mongodb+srv://mintic:mintic@mintic.tfghq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB conectado');
});

connection.on('error', (error) => {
  console.log(error);
  process.exit(0);
});
