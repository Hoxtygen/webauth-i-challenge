const bcrypt = require('bcryptjs');

const encrypt = {
  encryptPassword(pwd) {
    return bcrypt.hashSync(pwd, bcrypt.genSaltSync(14));
  },
  comparePassword(encryptedPwd, pwd) {
    return bcrypt.compareSync(pwd, encryptedPwd);
  },
};

module.exports = encrypt;
