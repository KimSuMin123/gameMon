const { quiz_country: Country, sequelize } = require("../models");

const countries = [
  {
    question: "대한민국",
    answer: "서울",
    flag: "https://flagcdn.com/w320/kr.png",
  },
  { question: "일본", answer: "도쿄", flag: "https://flagcdn.com/w320/jp.png" },
  {
    question: "미국",
    answer: "워싱턴 D.C.",
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    question: "프랑스",
    answer: "파리",
    flag: "https://flagcdn.com/w320/fr.png",
  },
  { question: "영국", answer: "런던", flag: "https://flagcdn.com/w320/gb.png" },
  {
    question: "독일",
    answer: "베를린",
    flag: "https://flagcdn.com/w320/de.png",
  },
  {
    question: "중국",
    answer: "베이징",
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    question: "러시아",
    answer: "모스크바",
    flag: "https://flagcdn.com/w320/ru.png",
  },
  {
    question: "스페인",
    answer: "마드리드",
    flag: "https://flagcdn.com/w320/es.png",
  },
  {
    question: "이탈리아",
    answer: "로마",
    flag: "https://flagcdn.com/w320/it.png",
  },
  {
    question: "캐나다",
    answer: "오타와",
    flag: "https://flagcdn.com/w320/ca.png",
  },
  {
    question: "호주",
    answer: "캔버라",
    flag: "https://flagcdn.com/w320/au.png",
  },
  {
    question: "브라질",
    answer: "브라질리아",
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    question: "인도",
    answer: "뉴델리",
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    question: "터키",
    answer: "앙카라",
    flag: "https://flagcdn.com/w320/tr.png",
  },
  {
    question: "멕시코",
    answer: "멕시코시티",
    flag: "https://flagcdn.com/w320/mx.png",
  },
  {
    question: "베트남",
    answer: "하노이",
    flag: "https://flagcdn.com/w320/vn.png",
  },
  { question: "태국", answer: "방콕", flag: "https://flagcdn.com/w320/th.png" },
  {
    question: "이집트",
    answer: "카이로",
    flag: "https://flagcdn.com/w320/eg.png",
  },
  {
    question: "남아프리카공화국",
    answer: "프리토리아",
    flag: "https://flagcdn.com/w320/za.png",
  },
  {
    question: "아르헨티나",
    answer: "부에노스아이레스",
    flag: "https://flagcdn.com/w320/ar.png",
  },
  {
    question: "칠레",
    answer: "산티아고",
    flag: "https://flagcdn.com/w320/cl.png",
  },
  {
    question: "콜롬비아",
    answer: "보고타",
    flag: "https://flagcdn.com/w320/co.png",
  },
  { question: "페루", answer: "리마", flag: "https://flagcdn.com/w320/pe.png" },
  {
    question: "베네수엘라",
    answer: "카라카스",
    flag: "https://flagcdn.com/w320/ve.png",
  },
  {
    question: "우루과이",
    answer: "몬테비데오",
    flag: "https://flagcdn.com/w320/uy.png",
  },
  {
    question: "에콰도르",
    answer: "키토",
    flag: "https://flagcdn.com/w320/ec.png",
  },
  {
    question: "벨기에",
    answer: "브뤼셀",
    flag: "https://flagcdn.com/w320/be.png",
  },
  {
    question: "네덜란드",
    answer: "암스테르담",
    flag: "https://flagcdn.com/w320/nl.png",
  },
  {
    question: "포르투갈",
    answer: "리스본",
    flag: "https://flagcdn.com/w320/pt.png",
  },
  {
    question: "스위스",
    answer: "베른",
    flag: "https://flagcdn.com/w320/ch.png",
  },
  {
    question: "오스트리아",
    answer: "빈",
    flag: "https://flagcdn.com/w320/at.png",
  },
  {
    question: "노르웨이",
    answer: "오슬로",
    flag: "https://flagcdn.com/w320/no.png",
  },
  {
    question: "스웨덴",
    answer: "스톡홀름",
    flag: "https://flagcdn.com/w320/se.png",
  },
  {
    question: "핀란드",
    answer: "헬싱키",
    flag: "https://flagcdn.com/w320/fi.png",
  },
  {
    question: "덴마크",
    answer: "코펜하겐",
    flag: "https://flagcdn.com/w320/dk.png",
  },
  {
    question: "체코",
    answer: "프라하",
    flag: "https://flagcdn.com/w320/cz.png",
  },
  {
    question: "폴란드",
    answer: "바르샤바",
    flag: "https://flagcdn.com/w320/pl.png",
  },
  {
    question: "헝가리",
    answer: "부다페스트",
    flag: "https://flagcdn.com/w320/hu.png",
  },
  {
    question: "루마니아",
    answer: "부쿠레슈티",
    flag: "https://flagcdn.com/w320/ro.png",
  },
  {
    question: "불가리아",
    answer: "소피아",
    flag: "https://flagcdn.com/w320/bg.png",
  },
  {
    question: "크로아티아",
    answer: "자그레브",
    flag: "https://flagcdn.com/w320/hr.png",
  },
  {
    question: "그리스",
    answer: "아테네",
    flag: "https://flagcdn.com/w320/gr.png",
  },
  {
    question: "우크라이나",
    answer: "키이우",
    flag: "https://flagcdn.com/w320/ua.png",
  },
  {
    question: "벨라루스",
    answer: "민스크",
    flag: "https://flagcdn.com/w320/by.png",
  },
  {
    question: "몽골",
    answer: "울란바토르",
    flag: "https://flagcdn.com/w320/mn.png",
  },
  {
    question: "파키스탄",
    answer: "이슬라마바드",
    flag: "https://flagcdn.com/w320/pk.png",
  },
  {
    question: "방글라데시",
    answer: "다카",
    flag: "https://flagcdn.com/w320/bd.png",
  },
  {
    question: "네팔",
    answer: "카트만두",
    flag: "https://flagcdn.com/w320/np.png",
  },
  {
    question: "말레이시아",
    answer: "쿠알라룸푸르",
    flag: "https://flagcdn.com/w320/my.png",
  },
  {
    question: "싱가포르",
    answer: "싱가포르",
    flag: "https://flagcdn.com/w320/sg.png",
  },
  {
    question: "인도네시아",
    answer: "자카르타",
    flag: "https://flagcdn.com/w320/id.png",
  },
  {
    question: "필리핀",
    answer: "마닐라",
    flag: "https://flagcdn.com/w320/ph.png",
  },
  {
    question: "미얀마",
    answer: "네피도",
    flag: "https://flagcdn.com/w320/mm.png",
  },
  {
    question: "캄보디아",
    answer: "프놈펜",
    flag: "https://flagcdn.com/w320/kh.png",
  },
  {
    question: "라오스",
    answer: "비엔티안",
    flag: "https://flagcdn.com/w320/la.png",
  },
  {
    question: "스리랑카",
    answer: "콜롬보",
    flag: "https://flagcdn.com/w320/lk.png",
  },
  {
    question: "이란",
    answer: "테헤란",
    flag: "https://flagcdn.com/w320/ir.png",
  },
  {
    question: "이라크",
    answer: "바그다드",
    flag: "https://flagcdn.com/w320/iq.png",
  },
  {
    question: "시리아",
    answer: "다마스쿠스",
    flag: "https://flagcdn.com/w320/sy.png",
  },
  {
    question: "사우디아라비아",
    answer: "리야드",
    flag: "https://flagcdn.com/w320/sa.png",
  },
  {
    question: "아랍에미리트",
    answer: "아부다비",
    flag: "https://flagcdn.com/w320/ae.png",
  },
  {
    question: "카타르",
    answer: "도하",
    flag: "https://flagcdn.com/w320/qa.png",
  },
  {
    question: "쿠웨이트",
    answer: "쿠웨이트시티",
    flag: "https://flagcdn.com/w320/kw.png",
  },
  {
    question: "오만",
    answer: "무스카트",
    flag: "https://flagcdn.com/w320/om.png",
  },
  { question: "예멘", answer: "사나", flag: "https://flagcdn.com/w320/ye.png" },
  {
    question: "나이지리아",
    answer: "아부자",
    flag: "https://flagcdn.com/w320/ng.png",
  },
  {
    question: "케냐",
    answer: "나이로비",
    flag: "https://flagcdn.com/w320/ke.png",
  },
  {
    question: "에티오피아",
    answer: "아디스아바바",
    flag: "https://flagcdn.com/w320/et.png",
  },
  {
    question: "알제리",
    answer: "알제",
    flag: "https://flagcdn.com/w320/dz.png",
  },
  {
    question: "모로코",
    answer: "라바트",
    flag: "https://flagcdn.com/w320/ma.png",
  },
  {
    question: "가나",
    answer: "아크라",
    flag: "https://flagcdn.com/w320/gh.png",
  },
  {
    question: "세네갈",
    answer: "다카르",
    flag: "https://flagcdn.com/w320/sn.png",
  },
  {
    question: "콩고민주공화국",
    answer: "킨샤사",
    flag: "https://flagcdn.com/w320/cd.png",
  },
  {
    question: "탄자니아",
    answer: "도도마",
    flag: "https://flagcdn.com/w320/tz.png",
  },
  {
    question: "앙골라",
    answer: "루안다",
    flag: "https://flagcdn.com/w320/ao.png",
  },
  {
    question: "짐바브웨",
    answer: "하라레",
    flag: "https://flagcdn.com/w320/zw.png",
  },
  {
    question: "르완다",
    answer: "키갈리",
    flag: "https://flagcdn.com/w320/rw.png",
  },
  {
    question: "마다가스카르",
    answer: "안타나나리보",
    flag: "https://flagcdn.com/w320/mg.png",
  },
  {
    question: "뉴질랜드",
    answer: "웰링턴",
    flag: "https://flagcdn.com/w320/nz.png",
  },
  { question: "피지", answer: "수바", flag: "https://flagcdn.com/w320/fj.png" },
  {
    question: "사모아",
    answer: "아피아",
    flag: "https://flagcdn.com/w320/ws.png",
  },
  {
    question: "팔라우",
    answer: "멜레케오크",
    flag: "https://flagcdn.com/w320/pw.png",
  },
  {
    question: "통가",
    answer: "누쿠알로파",
    flag: "https://flagcdn.com/w320/to.png",
  },
  {
    question: "키리바시",
    answer: "타라와",
    flag: "https://flagcdn.com/w320/ki.png",
  },
  {
    question: "솔로몬제도",
    answer: "호니아라",
    flag: "https://flagcdn.com/w320/sb.png",
  },
  {
    question: "미크로네시아",
    answer: "팔리키르",
    flag: "https://flagcdn.com/w320/fm.png",
  },
  {
    question: "파푸아뉴기니",
    answer: "포트모르즈비",
    flag: "https://flagcdn.com/w320/pg.png",
  },
  {
    question: "이스라엘",
    answer: "예루살렘",
    flag: "https://flagcdn.com/w320/il.png",
  },
  { question: "북한", answer: "평양", flag: "https://flagcdn.com/w320/kp.png" },
  {
    question: "리투아니아",
    answer: "빌뉴스",
    flag: "https://flagcdn.com/w320/lt.png",
  },
  {
    question: "라트비아",
    answer: "리가",
    flag: "https://flagcdn.com/w320/lv.png",
  },
  {
    question: "에스토니아",
    answer: "탈린",
    flag: "https://flagcdn.com/w320/ee.png",
  },
];

module.exports = async function () {
  console.log("🌍 Country 퀴즈 시드 실행 시작");
  await Country.bulkCreate(countries);
  console.log("✅ Country 퀴즈 시드 완료");
};
