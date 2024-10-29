const routes = require('./routes');
const NotesHandler = require('./handler');

const notes = [

];

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service }) => {
    const notesHandler = new NotesHandler();
    server.route(routes(notesHandler));
  },
};