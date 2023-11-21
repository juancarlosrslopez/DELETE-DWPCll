// Importando Mongoose
import mongoose from 'mongoose';

// Destructurando la función Schema
const { Schema } = mongoose;

// Construir un Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

// Compilando el Schema para generar un modelo
export default mongoose.model('project', ProjectSchema);
