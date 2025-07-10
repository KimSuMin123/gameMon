const express = require("express");
const router = express.Router();
const models = require("../models");

const quizModelMap = {
  country: models.quiz_country,
  common: models.quiz_common,
  nonsense: models.quiz_nonsense,
  lyrics: models.quiz_lyrics,
  emoji: models.quiz_emoji,
};

router.get("/:type/random", async (req, res) => {
  const { type } = req.params;
  const Model = quizModelMap[type];

  if (!Model) return res.status(400).json({ error: "잘못된 퀴즈 타입" });

  try {
    const count = await Model.count();
    const randomOffset = Math.floor(Math.random() * count);
    const random = (await Model.findAll({ offset: randomOffset, limit: 1 }))[0];

    if (!random) return res.status(404).json({ error: "문제가 없습니다" });

    res.json({ id: random.id, question: random.question });
  } catch (err) {
    console.error("❌ 랜덤 문제 조회 실패:", err);
    res.status(500).json({ error: "문제 조회 실패" });
  }
});

// ✅ 정답 확인
router.post("/:type/check", async (req, res) => {
  const { type } = req.params;
  const Model = quizModelMap[type];
  const { id, answer } = req.body;

  if (!Model)
    return res
      .status(400)
      .json({ success: false, message: "잘못된 퀴즈 타입" });
  if (!id || !answer)
    return res.status(400).json({ success: false, message: "필수값 누락" });

  try {
    const item = await Model.findByPk(id);
    if (!item)
      return res.status(404).json({ success: false, message: "문제 없음" });

    const isCorrect = item.answer.toLowerCase() === answer.trim().toLowerCase();

    res.json({
      success: true,
      result: isCorrect ? "정답입니다!" : "오답입니다.",
      correctAnswer: isCorrect ? null : item.answer,
    });
  } catch (err) {
    console.error("❌ 정답 확인 오류:", err);
    res.status(500).json({ success: false, error: "오류 발생" });
  }
});

module.exports = router;
