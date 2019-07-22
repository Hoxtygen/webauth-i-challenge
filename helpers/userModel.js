const db = require('../data/dbConfig');

async function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function addUser(userData) {
  return db('users')
    .insert(userData);
    /* .then((ids) => {
      const [id] = ids;
      return findById(id);
    }); */
}

async function findByEmail(user) {
  return db('users').where(user);
}

async function find() {
  return db('users').select();
}


module.exports = {
  addUser,
  findByEmail,
  findById,
  find,
};
