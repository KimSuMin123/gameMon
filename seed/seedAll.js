const { sequelize } = require("../models");

const seedCountries = require("./seed-quiz-country");
const seedQuizCommon = require("./seed-quiz-common");
const seedQuizNonsense = require("./seed-quiz_nonsense");
const seedQuizLyrics = require("./seed-quiz-lyrics");

async function seedAll() {
  try {
    console.log("🔄 전체 시드 실행 시작");

    await sequelize.sync({ force: true });
    console.log("✅ DB 테이블 초기화 완료");

    await seedCountries();
    await seedQuizCommon();
    await seedQuizNonsense();
    await seedQuizLyrics();

    console.log("🎉 전체 시드 데이터 삽입 완료");
    process.exit();
  } catch (err) {
    console.error("❌ 전체 시드 삽입 실패:", err);
    process.exit(1);
  }
}

seedAll();
