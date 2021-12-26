import mongoose from 'mongoose'

async function main() {
  await mongoose.connect('mongodb://localhost:27017/creatory-api')
}

main()
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => console.log(`Database Error: ${err}`))
