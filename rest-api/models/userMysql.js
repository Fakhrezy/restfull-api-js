const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/mysqlConfig');

// Definisi Model User dengan Sequelize
const UserMysql = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  // Secara default, timestamps sudah aktif, jadi tidak perlu menambahkannya.
});

module.exports = UserMysql;
