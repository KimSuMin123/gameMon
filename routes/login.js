const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User } = require("../models");

// 🔐 로그인 라우터
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 사용자 존재 여부 확인
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "존재하지 않는 사용자입니다." });
    }

    // 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "비밀번호가 틀렸습니다." });
    }

    // JWT 토큰 발급
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ success: true, token });
  } catch (error) {
    console.error("로그인 오류:", error);
    res.status(500).json({ error: "서버 오류" });
  }
});

module.exports = router;
