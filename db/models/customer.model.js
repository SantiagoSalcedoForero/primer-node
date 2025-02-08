const { Model, DataTypes, Sequelize } = require('sequelize')

const { USER_TABLE } = require('./user.model')
const Unique = require('faker/lib/unique')

const CUSTOMER_TABLE = 'customers'

const CustomerSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    Unique: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class Customer extends Model {

  static associate(models) {
    this.belongsTo(models.User, {as: 'user'})
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    }
  }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE }
