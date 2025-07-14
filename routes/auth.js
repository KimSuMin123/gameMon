const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User } = require("../models");

// ✅ 아이디 중복 확인
router.get("/check-username", async (req, res) => {
  const { username } = req.query;
  const exist = await User.findOne({ where: { username } });
  res.json({ available: !exist });
});

// ✅ 닉네임 중복 확인
router.get("/check-nickname", async (req, res) => {
  const { nickname } = req.query;
  const exist = await User.findOne({ where: { nickname } });
  res.json({ available: !exist });
});

// ✅ 회원가입 처리
router.post("/register", async (req, res) => {
  const { username, password, passwordConfirm, name, nickname, email } =
    req.body;

  if (!/^[a-zA-Z0-9]{6,20}$/.test(username)) {
    return res.status(400).json({ error: "아이디 형식 오류" });
  }

  if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,20}$/.test(password)) {
    return res.status(400).json({ error: "비밀번호 형식 오류" });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ error: "비밀번호 불일치" });
  }

  const existUsername = await User.findOne({ where: { username } });
  if (existUsername) return res.status(409).json({ error: "아이디 중복" });

  const existNickname = await User.findOne({ where: { nickname } });
  if (existNickname) return res.status(409).json({ error: "닉네임 중복" });

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    username,
    password: hashed,
    name,
    nickname,
    email,
  });

  res.json({ success: true });
});
module.exports = router;
