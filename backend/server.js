import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Define Schema (No Subject Field)
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

// ✅ Create Model
const Message = mongoose.model("Message", messageSchema);

// ✅ Contact Form Route (POST)
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).send("All fields are required!");
    }

    // Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.send("Message sent successfully!");
  } catch (error) {
    console.error("❌ Error saving message:", error);
    res.status(500).send("Error saving message!");
  }
});

// ✅ Start the Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
