module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      name: {
        type: DataTypes.STRING(255)
      },
      position: {
        type: DataTypes.STRING(255)
      },
      username: {
        type: DataTypes.STRING(100)
      },
      password: {
        type: DataTypes.STRING(500)
      },
      role: {
        type: DataTypes.ENUM("admin", "user")
      }
    })
  
    return user
  }
  