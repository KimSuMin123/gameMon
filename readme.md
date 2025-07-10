실행 방법

1. npm install
2. npm run dev
3. npm run seed

# 📘 text TO text Quiz API 문서

이 API는 다양한 카테고리(나라, 상식, 넌센스, 가사)의 퀴즈 문제를 랜덤으로 조회하고 정답을 확인할 수 있는 기능을 제공합니다.

---

## 🧩 퀴즈 타입 목록

- `country` : 나라 퀴즈
- `common` : 상식 퀴즈
- `nonsense` : 넌센스 퀴즈
- `lyrics` : 가사 퀴즈
- `emoji` : 이모지 퀴즈

---

## 1. 📌 랜덤 퀴즈 조회

> 각 퀴즈 카테고리에서 무작위로 문제를 1개 가져옵니다.

### ✅ 요청

```http
GET /quiz/<type>/random
```

- 예시: `GET /quiz/country/random`

### 🔁 응답 예시

```json
{
  "id": 1,
  "question": "프랑스"
}
```

---

## 2. 📌 정답 확인

> 문제 ID와 사용자의 정답을 보내면, 정답 여부를 확인합니다.

### ✅ 요청

```http
POST /quiz/<type>/check
```

- 예시: `POST /quiz/country/check`

### 📨 요청 바디

```json
{
  "id": 1,
  "answer": "파리"
}
```

### 🔁 응답 예시 (정답일 경우)

```json
{
  "success": true,
  "result": "정답입니다!",
  "correctAnswer": null
}
```

### 🔁 응답 예시 (오답일 경우)

```json
{
  "success": true,
  "result": "오답입니다.",
  "correctAnswer": "파리"
}
```

---

## 📂 카테고리별 예시

### 📍 나라 퀴즈

- 랜덤 조회: `GET /quiz/country/random`
- 정답 확인: `POST /quiz/country/check`

### 📍 상식 퀴즈

- 랜덤 조회: `GET /quiz/common/random`
- 정답 확인: `POST /quiz/common/check`

### 📍 넌센스 퀴즈

- 랜덤 조회: `GET /quiz/nonsense/random`
- 정답 확인: `POST /quiz/nonsense/check`

### 📍 가사 퀴즈

- 랜덤 조회: `GET /quiz/lyrics/random`
- 정답 확인: `POST /quiz/lyrics/check`

---

## 📌 참고

- 모든 응답은 `application/json` 형식으로 반환됩니다.
- 정답이 맞았을 경우 `correctAnswer`는 `null`로 반환됩니다.
- 정답이 틀렸을 경우 `correctAnswer`에 실제 정답이 포함됩니다.
