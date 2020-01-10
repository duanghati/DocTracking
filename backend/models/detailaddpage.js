module.exports = (sequelize, DataTypes) => {
    const addpageDetail = sequelize.define('addpageDetail', {
   
      IdRef: {
        type: DataTypes.STRING(255)
      },
      StateValue: {
        type: DataTypes.STRING(255)
      },
      UpdateBy:{
        type: DataTypes.STRING(255)
      },
    })
  
    return addpageDetail
  }
  