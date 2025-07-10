module.exports = (sequelize, DataTypes) => {
  const QuizLyrics = sequelize.define(
    "quiz_lyrics",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      question: {
        type: DataTypes.TEXT, // 가사 일부
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING, // 곡 제목
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return QuizLyrics;
};
