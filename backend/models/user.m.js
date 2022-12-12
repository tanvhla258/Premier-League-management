module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    ID_User: {
      type: DataTypes.INT,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ten_User: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ngay_Sinh: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.INT,
      allowNull: false,
    },
  });
  return Users;
};
