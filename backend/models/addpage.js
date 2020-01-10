module.exports = (sequelize, DataTypes) => {
    const addpage = sequelize.define('addpage', {
      create_date: {
        type: DataTypes.DATE
      },
      approve_date: {
        type: DataTypes.DATE
      },
      success_date: {
        type: DataTypes.DATE
      },
      title: {
        type: DataTypes.STRING(255)
      },
      work_section: {
        type: DataTypes.STRING(255)
      },
      detail: {
        type: DataTypes.STRING(500)
      },
      status:{
        type: DataTypes.STRING(255)
      },
    })
  
  
    return addpage
  }
  