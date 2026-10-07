# Changelog — flowlab_homepage

All notable changes to the `introduce` repository (tiny-flowlab/introduce).

---

## [0.6] — 2026-10-08
### Added
- `shot_Flow` 비공개 카드 추가 (이미지 하네스 프로젝트, 대외 노출명) (tiny_brain 바로 다음) — 대외 제출 포지셔닝(LLM 네이티브 광고 제작 도구) 문구와 일치시킴
- `agy-statusline-custom` 공개 저장소 카드 추가 (Antigravity CLI 상태바, 2026.05.24) — 공개 저장소 그룹 최상단
- CSS: `tag-js`
### Changed
- 비공개 프로젝트 최종 커밋 날짜 갱신 (4월 이후 반년간 작업 반영)
  - `tiny_brain` 10.08 / `find_insight_writer` 10.03 / `flowlab_community` 07.13 / `status-dashboard` 10.03
- fork 저장소(`StandRig`, `claude-code-system-prompts`)는 본인 작업이 아니어서 제외

---

## [0.5] — 2026-04-22
### Changed
- Works 카드 순서 재정렬
  - **1st**: `tiny_brain` (전체폭 개요)
  - **2nd group**: tiny_brain 서포트 3개 (`find_insight_writer`, `flowlab_community`, `status-dashboard`) + `chatbot-io-server`
  - **3rd group**: 나머지 공개 저장소 최신 커밋순 (`wsl2-ai-dev-setup` → `novel-studio-copilot-cli` → `ai-timeline-2025` → `resume_search`)

---

## [0.4] — 2026-04-22
### Changed
- Works 섹션 큐레이션 2차 정제
  - `chatbot-server-kakaotalk` 카드 제거
  - `find_insight_writer` 설명에서 민감 표현 제거
  - `chatbot-io-server` 설명 중립화
### Added
- `tiny_brain` 전체폭 개요 카드 Works 최상단 추가 (Private · 개발 중)
- 모든 카드에 최종 커밋 날짜 표시 (`card-date` CSS 클래스)
  - 공개 저장소: GitHub API 기준
  - 비공개 저장소: 로컬 `git log` 기준

---

## [0.3] — 2026-04-22
### Added
- GitHub org(`tiny-flowlab`) 공개 저장소 4개 카드 추가
  - `novel-studio-copilot-cli`, `chatbot-io-server`
- `tiny_brain` 하위 비공개 프로젝트 카드 추가
  - `find_insight_writer`, `flowlab_community`, `status-dashboard`, `chatbot-server-kakaotalk`
  - Private 배지(`🔒`) + `card-lock` 스타일, `tag-private` "개발 중" 태그
- CSS: `tag-private`, `tag-nextjs`, `tag-fastapi`, `card-lock`
### Removed
- `tiny-flowlab.github.io`, `tiny-loop.github.io`, `simplehtml` 카드 제거
- `x-miner` 카드 제거

---

## [0.2] — 2026-04-22
### Added
- 모바일 반응형 레이아웃 추가
  - `@media (max-width: 768px)`: 단일 컬럼, 패딩 축소, 폰트 크기 조정
  - `@media (max-width: 480px)`: 소형 폰 대응
  - `#ocean{min-height:auto}` 명시적 ID 오버라이드 (CSS 우선순위 버그 수정)
  - `100dvh` 적용(모바일 브라우저 chrome 대응)
### Changed
- 좌상단 로고: `logo_clean.png` 이미지 → `tiny_flowlab` monospace 텍스트 (`nav-logo-text`)
- 히어로 CI 이미지: `88px` → `220px` (2.5배, `logo_white.png` 2048×1144)
  - 모바일 breakpoints: `180px`(768px) / `160px`(480px)

---

## [0.1] — 2026-04-22
### Infrastructure
- Cloudflare Tunnel 연동 완료 (포트 40080, 토큰 모드)
- Caddy 정적 파일 서버 설정 (`caddy-flowlab.service`)
- 도메인: `flowlab.tinypia.com`

---

*이 파일은 웹서버에서 서빙되지 않습니다.*
