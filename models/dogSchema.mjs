import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cute: {
    type: Boolean,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Dogs', dogSchema);
