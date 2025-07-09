const { country: Country, sequelize } = require("../models");

const countries = [
  { country: "대한민국", capital: "서울" },
  { country: "일본", capital: "도쿄" },
  { country: "미국", capital: "워싱턴 D.C." },
  { country: "프랑스", capital: "파리" },
  { country: "영국", capital: "런던" },
  { country: "독일", capital: "베를린" },
  { country: "중국", capital: "베이징" },
  { country: "러시아", capital: "모스크바" },
  { country: "스페인", capital: "마드리드" },
  { country: "이탈리아", capital: "로마" },
  { country: "캐나다", capital: "오타와" },
  { country: "멕시코", capital: "멕시코시티" },
  { country: "브라질", capital: "브라질리아" },
  { country: "아르헨티나", capital: "부에노스아이레스" },
  { country: "칠레", capital: "산티아고" },
  { country: "콜롬비아", capital: "보고타" },
  { country: "페루", capital: "리마" },
  { country: "베네수엘라", capital: "카라카스" },
  { country: "우루과이", capital: "몬테비데오" },
  { country: "에콰도르", capital: "키토" },
  { country: "벨기에", capital: "브뤼셀" },
  { country: "네덜란드", capital: "암스테르담" },
  { country: "포르투갈", capital: "리스본" },
  { country: "스위스", capital: "베른" },
  { country: "오스트리아", capital: "빈" },
  { country: "노르웨이", capital: "오슬로" },
  { country: "스웨덴", capital: "스톡홀름" },
  { country: "핀란드", capital: "헬싱키" },
  { country: "덴마크", capital: "코펜하겐" },
  { country: "체코", capital: "프라하" },
  { country: "폴란드", capital: "바르샤바" },
  { country: "헝가리", capital: "부다페스트" },
  { country: "루마니아", capital: "부쿠레슈티" },
  { country: "불가리아", capital: "소피아" },
  { country: "크로아티아", capital: "자그레브" },
  { country: "그리스", capital: "아테네" },
  { country: "터키", capital: "앙카라" },
  { country: "우크라이나", capital: "키이우" },
  { country: "벨라루스", capital: "민스크" },
  { country: "몽골", capital: "울란바토르" },
  { country: "인도", capital: "뉴델리" },
  { country: "파키스탄", capital: "이슬라마바드" },
  { country: "방글라데시", capital: "다카" },
  { country: "네팔", capital: "카트만두" },
  { country: "태국", capital: "방콕" },
  { country: "베트남", capital: "하노이" },
  { country: "말레이시아", capital: "쿠알라룸푸르" },
  { country: "싱가포르", capital: "싱가포르" },
  { country: "인도네시아", capital: "자카르타" },
  { country: "필리핀", capital: "마닐라" },
  { country: "미얀마", capital: "네피도" },
  { country: "캄보디아", capital: "프놈펜" },
  { country: "라오스", capital: "비엔티안" },
  { country: "스리랑카", capital: "콜롬보" },
  { country: "이란", capital: "테헤란" },
  { country: "이라크", capital: "바그다드" },
  { country: "시리아", capital: "다마스쿠스" },
  { country: "사우디아라비아", capital: "리야드" },
  { country: "아랍에미리트", capital: "아부다비" },
  { country: "카타르", capital: "도하" },
  { country: "쿠웨이트", capital: "쿠웨이트시티" },
  { country: "오만", capital: "무스카트" },
  { country: "예멘", capital: "사나" },
  { country: "이집트", capital: "카이로" },
  { country: "나이지리아", capital: "아부자" },
  { country: "남아프리카공화국", capital: "프리토리아" },
  { country: "케냐", capital: "나이로비" },
  { country: "에티오피아", capital: "아디스아바바" },
  { country: "알제리", capital: "알제" },
  { country: "모로코", capital: "라바트" },
  { country: "가나", capital: "아크라" },
  { country: "세네갈", capital: "다카르" },
  { country: "콩고민주공화국", capital: "킨샤사" },
  { country: "탄자니아", capital: "도도마" },
  { country: "앙골라", capital: "루안다" },
  { country: "짐바브웨", capital: "하라레" },
  { country: "르완다", capital: "키갈리" },
  { country: "마다가스카르", capital: "안타나나리보" },
  { country: "호주", capital: "캔버라" },
  { country: "뉴질랜드", capital: "웰링턴" },
  { country: "피지", capital: "수바" },
  { country: "사모아", capital: "아피아" },
  { country: "팔라우", capital: "멜레케오크" },
  { country: "통가", capital: "누쿠알로파" },
  { country: "키리바시", capital: "타라와" },
  { country: "솔로몬제도", capital: "호니아라" },
  { country: "미크로네시아", capital: "팔리키르" },
  { country: "파푸아뉴기니", capital: "포트모르즈비" },
];

async function seed() {
  try {
    console.log("✅ 시드 실행 시작");

    await sequelize.sync({ force: true }); // 테이블 재생성
    console.log("✅ 테이블 생성 완료");

    await Country.bulkCreate(countries);
    console.log("✅ 시드 데이터 삽입 완료");

    process.exit();
  } catch (err) {
    console.error("❌ 데이터 삽입 실패:", err);
    process.exit(1);
  }
}

seed();
