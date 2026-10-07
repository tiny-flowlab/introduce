# shot_Flow 랜딩 페이지 + 홈 하이라이트 (2026-10-08)

## 목표
- 메인 홈 Works에서 shot_Flow를 한눈에 띄게 하고, 클릭하면 전용 랜딩 페이지로 간다.
- 랜딩 페이지는 제품 소개용 일반 흐름·기능·예시 화면을 보여준다 (실제 구조 아님).
- 대외 포지셔닝: "LLM 네이티브 광고 제작 도구" 문장과 일치.

## 방향 (사용자 지시)
- 실제 구조는 담지 않는다. 랜딩용으로 대외 문장 기반의 일반적인 흐름·기능만 보여준다.
- 페르소나·내부 경로·포트·모델명·벤더명은 넣지 않는다.

## 작업
- [x] `shot_flow/index.html` 신규 (URL: /shot_flow/) — 메인과 같은 색·폰트 토큰, KO/EN 토글, 모바일 대응
  - [x] Hero: shot_Flow · 한 줄 설명 · 배지(개발 중 / Google TPU Builder Program)
  - [x] How it works: Brief → Concept → Storyboard → Shot plan → Visuals (대외 문장 기준 5단계)
  - [x] Features: 일관성 유지 / 샷별 모델 라우팅 / AI 크리에이티브 파트너 / 결과 평가·수정 가이드
  - [x] 작업 화면 목업 (일반적인 예시 화면, 실제 메뉴 아님)
  - [x] Footer: 비공개 개발 중 안내 · 연락처 · 메인으로
- [x] `index.html` Works: shot_Flow 카드 전폭 + 강조 테두리·Featured 라벨 + 랜딩 링크
- [ ] (보류) 작은 시각 버그 4개: 한글 가짜 기울임, Hero 버튼/SCROLL 겹침, 카드 글자 대비, 모바일 About 줄 끝
- [x] 검증: HTML 파싱, `git diff --check`, Playwright 데스크톱·모바일 스크린샷 직접 확인, Caddy가 /shot_flow/ 서빙하는지
- [x] changelog 갱신, 커밋 (push는 별도 확인)

## Review
- /shot_flow/ 200, /shot_flow → 308 리다이렉트 (Caddy file_server 그대로 서빙)
- Playwright 1440×900 / 390×844: 콘솔 에러 0, 가로 스크롤 없음, KO/EN 전환 동작, 홈 카드 제목 클릭 → /shot_flow/ 이동 확인
- 랜딩 내용은 대외 문장 기반 예시(가상 캠페인·목업)이며 실제 구조·메뉴·모델명 없음
- 시각 버그 4개는 사용자 확인 전이라 이번 범위에서 제외

---

# V2 리디자인 (2026-10-08)

## 결정 사항 (사용자)
- 정체성: 개인 연구소("작은흐름 연구소 / tiny_flowlab") 유지
- 비주얼: 완전히 새로 — 시안 2~3개 먼저 보고 고른다
- V1 보존: git 태그 `v1`(완료) + 교체 시점에 `/v1/` 경로로 복사

## 콘텐츠 (V1에서 그대로 가져옴, 문구 변경 최소)
- Hero(연구소 소개) · About(whoami + TPU Builder Program) · Works(shot_Flow Featured → /shot_flow/, 나머지 카드) · Contact(contact@tiny-flowlab.com)
- KO/EN 전환, 모바일 대응 유지

## Phase 1 — 시안 3개 (병렬, 각자 단일 HTML)
- [x] A. Editorial Journal — 밝은 오프화이트, 세리프 헤드라인, 잡지형 그리드 (연구소 저널 느낌)
- [x] B. Lab Notebook — 흰 바탕 + 모눈·주석, 굵은 산세리프 + 모노 메모, 포인트 컬러 1개 (실험 노트 느낌)
- [x] C. Flow — 부드러운 그라데이션·물결 모티프, 큰 타이포, 여백 많은 차분한 톤 ("흐름" 은유)
- [x] 위치: `v2_concepts/{a,b,c}.html` (커밋 안 함, 고른 뒤 삭제)
- [x] 검증: Playwright 데스크톱·모바일 스크린샷 직접 확인 → 사용자에게 비교 제시

## Phase 2 — 선택안 본 구현
- [x] 현재 index.html → `v1/index.html` (상대경로 보정)
- [x] 선택 시안(C)으로 새 index.html, shot_Flow 랜딩도 새 톤에 맞출지 결정
- [x] 검증 후 커밋

## Review
- 시안 3개(Codex Luna Max fast 병렬) → 사용자 C 선택. 워커 결과는 직접 스크린샷으로 재확인(A는 Hero 좌측 여백 0 버그, A·B·C 모두 © 2024 → 2026 수정)
- 교체 후 /, /v1/, /shot_flow/ 데스크톱·모바일: 콘솔 에러 0, 4xx 0, 깨진 이미지 0, 가로 스크롤 없음, 홈→랜딩 링크 동작
