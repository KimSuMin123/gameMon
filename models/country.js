module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // ✅ 자동 증가
        primaryKey: true, // ✅ 기본 키
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // ✅ createdAt, updatedAt 비활성화
    }
  );

  return Country;
};
