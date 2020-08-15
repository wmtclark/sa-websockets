import Note from '../models/note';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      // eslint-disable-next-line no-param-reassign
      result[item.id] = item;
      console.log(result);
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findByIdAndDelete(id).then(() => {
    console.log('note deleted!');
  });
};

export const createNote = (fields) => {
  const newnote = new Note();

  Object.keys(fields).forEach((k) => {
    newnote[k] = fields[k];
  });
  return newnote.save();
};

export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        // eslint-disable-next-line no-param-reassign
        note[k] = fields[k];
      });
      return note.save();
    });
};
