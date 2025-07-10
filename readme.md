# 🎮 GameMon 서버 실행 가이드

이 프로젝트는 MySQL 기반의 Node.js 애플리케이션입니다. 아래 단계에 따라 개발 환경을 설정하고 실행할 수 있습니다.

## 📁 1. 데이터베이스 생성

MySQL 콘솔에서 아래 명령어를 실행합니다:

```sql
CREATE DATABASE gamemon;
```

## 🛠 2. 환경 변수 설정 (.env 파일 생성)

프로젝트 루트에 .env 파일을 생성하고 아래 내용을 입력합니다:

```.env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=gamemon
DB_USER=your_db_user      # 실제 DB 사용자 이름으로 변경
DB_PASS=your_db_password  # 실제 DB 비밀번호로 변경
```

🔒 주의: .env 파일은 절대 Git에 업로드하지 마세요!

## 📦 3. 의존성 설치

아래 명령어를 통해 필요한 패키지를 설치합니다

```
npm install
```

## 🚀 4. 개발 서버 실행

개발 모드로 서버를 실행합니다

```
npm run dev
```

## 🌱 5. Seed 데이터 삽입 (선택)

더미 데이터를 DB에 삽입하려면 아래 명령어를 실행하세요:

```npm run seed```

# 📘 text TO text Quiz API 문서

이 API는 다양한 카테고리(나라, 상식, 넌센스, 가사)의 퀴즈 문제를 랜덤으로 조회하고 정답을 확인할 수 있는 기능을 제공합니다.

---

## 🧩 퀴즈 타입 목록

- `country` : 나라 퀴즈
- `common` : 상식 퀴즈
- `nonsense` : 넌센스 퀴즈
- `lyrics` : 가사 퀴즈
- `emoji` : 이모지 퀴즈



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

### 📍 이모지 퀴즈

- 랜덤 조회: `GET /quiz/emoji/random`
- 정답 확인: `POST /quiz/emoji/check`

---

## 📌 참고

- 모든 응답은 `application/json` 형식으로 반환됩니다.
- 정답이 맞았을 경우 `correctAnswer`는 `null`로 반환됩니다.
- 정답이 틀렸을 경우 `correctAnswer`에 실제 정답이 포함됩니다.
