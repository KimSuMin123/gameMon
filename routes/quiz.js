const express = require("express");
const router = express.Router();
const { country: Country } = require("../models");

// 랜덤 국가 반환
router.get("/random", async (req, res) => {
  try {
    const count = await Country.count();
    const randomOffset = Math.floor(Math.random() * count);
    const random = await Country.findOne({ offset: randomOffset });
    res.json({ id: random.id, country: random.country });
  } catch (err) {
    console.error("❌ 랜덤 조회 실패:", err); // 추가
    res.status(500).json({ error: "랜덤 조회 실패" });
  }
});

// 수도 정답 확인
router.post("/check", async (req, res) => {
  const { id, capital } = req.body;
  if (!id || !capital)
    return res.status(400).json({ success: false, message: "필수값 누락" });

  try {
    const country = await Country.findByPk(id);
    if (!country)
      return res.status(404).json({ success: false, message: "국가 없음" });

    const isCorrect =
      country.capital.toLowerCase() === capital.trim().toLowerCase();
    res.json({
      success: true,
      result: isCorrect ? "정답입니다!" : "오답입니다.",
      correctCapital: isCorrect ? null : country.capital,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: "오류 발생" });
  }
});

module.exports = router;
