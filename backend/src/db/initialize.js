import mongoose from 'mongoose'

mongoose
  .connect('mongodb://localhost/bq-car')
  .then(() => console.log('🎯 Mongodb connected'))
  .catch(error => console.log(error))