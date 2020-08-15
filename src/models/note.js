import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  text: String,
  x: Number,
  y: Number,
  zIndex: Number,
}, { toJSON: { virtuals: true } });

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
