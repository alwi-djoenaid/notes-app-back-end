const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema, NoteQuerySchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateNoteIdQuery: (query) => {
    const validationResult = NoteQuerySchema.validate(query);
    if (validationResult.error) {
      throw new Error(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;