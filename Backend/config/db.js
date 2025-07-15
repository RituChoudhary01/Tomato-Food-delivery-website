import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://00learnear01:1234@cluster0.5pexbey.mongodb.net/food-delivery')
    console.log(" MongoDB Connected")
  } catch (error) {
    console.error(" MongoDB Connection Failed:", error)
    process.exit(1)
  }
}

