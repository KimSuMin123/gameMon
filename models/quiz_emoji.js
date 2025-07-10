module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "quiz_emoji",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false, // 이모지 표현
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false, // 정답 텍스트
      },
    },
    {
      tableName: "quiz_emoji",
      timestamps: false,
    }
  );
};
