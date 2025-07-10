module.exports = (sequelize, DataTypes) => {
  const QuizNonsense = sequelize.define(
    "quiz_nonsense",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return QuizNonsense;
};
