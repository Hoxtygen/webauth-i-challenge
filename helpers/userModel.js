const db = require('../data/dbConfig');

async function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function addUser(userData) {
  return db('users')
    .insert(userData);
}

async function findByEmail(email) {
  return db('users').where({ email }).first();
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
