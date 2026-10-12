# Changelog — flowlab_homepage

All notable changes to the `introduce` repository (tiny-flowlab/introduce).

---

## [2.7] — 2026-10-12
### Changed
- 사이트 파일을 `public/`으로 분리하고 Caddy 웹 루트를 `public/`으로 변경 — 저장소 루트를 통째로 서빙하면서 숨김 목록(`hide`)으로 막던 방식이라, 새 파일이 생길 때마다 노출 위험이 있었음. 이제 `public/`에 있는 것만 서빙되는 허용 목록 방식
- `tasks/`를 공개 저장소 추적에서 제외(.gitignore) — 내부 작업 메모·로컬 경로가 공개되고 있었음. 이전 커밋 기록에는 남아 있음

---

## [2.6] — 2026-10-12
### Added
- `robots.txt` — 기존에는 Cloudflare 관리형 주석만 있고 규칙이 없어 모든 봇에 열려 있었음. 검색·AI 열람(답변 참고)은 허용, AI 학습만 차단(`Content-Signal: ai-train=no` + 학습 전용 크롤러 Disallow)
- Caddy 접속 로그(JSON, `~/.local/state/caddy-flowlab/access.log`, 10MiB×5·30일) — 크롤러·AI 봇 방문을 직접 확인하기 위해. Caddyfile은 git 제외 파일이라 서버에만 반영

---

## [2.5] — 2026-10-12
### Changed
- 홈 디자인 다듬기 — CI v8 반영 뒤 빈 여백이 많고 Works가 글자뿐이라 한 번 더 정리
  - 섹션·Contact 세로 패딩 축소, 섹션 머리 한 줄 문구를 제목 아래로 붙여 시선 이동을 줄임
  - Works 대표 패널(tiny_brain·shot_Flow) 상단에 v8 썸네일(`assets/works/`)
  - Lab 목록 데스크톱 2열 + 행 높이 축소(세로 길이 감소), 모바일은 1열 유지
  - 헤더 워드마크 앞에 v8 축약 심볼(`logo_v8_symbol_white.svg`) — 120px 미만이라 CI 규정대로 compact 사용

---

## [2.4] — 2026-10-12
### Changed
- CI v8 반영(원본 `flowlab-artifact` 태그 `ci-v8`) — 홈페이지가 확정된 CI와 다른 예전 로고를 쓰고 있어 정본으로 맞춤
  - 히어로 로고: `logo_white.png` → v8 세로 조합 `logo_v8_vertical_white.svg`. 정사각형 히어로 자리에 맞춰 세로 조합을 쓰고, CI 규정(로고 글로우 금지)에 따라 drop-shadow 제거
  - 파비콘: SVG+ICO 세트로 교체(홈·shot_flow·tiny_brain), `favicon.png`·`apple-touch-icon.png`는 같은 이름으로 v8 버전 덮어쓰기
  - OG 이미지(`og-home`·`og-shotflow`·`og-tinybrain`)를 v8 로고가 들어간 버전으로 교체(파일명 유지, SNS 캐시는 공유 디버거로 갱신 필요)
### Added
- Agents 블록 카드 5개에 v8 에이전트 아이콘(`assets/agents/*.png`)
- 예전 `logo_*.png`는 v1 아카이브가 쓰므로 유지

---

## [2.3] — 2026-10-08
### Changed
- shot_Flow 랜딩 Studio 섹션: CSS 자리표시 목업을 데모 스크린샷(`assets/shotflow-demo.jpg`)으로 교체 — 실제 하네스 화면은 내부 구조·페르소나가 드러나 쓸 수 없어, 순수 목업 UI에 Nano Banana 2.1로 생성한 다양한 가상 모델 룩북 6컷(같은 가방)을 넣어 일관성 기능을 보여줌. "예시 화면·가상 모델" 표기 유지
- 랜딩 Hero 스토리보드 6칸도 실루엣 자리표시 → 같은 룩북 사진(`assets/shotflow/s01–06.jpg`)으로 교체, 브리프 문구를 "다양한 모델이 같은 가방을 든 6컷 룩북"으로 맞춤

---

## [2.2] — 2026-10-08
### Added
- About 아래 `Agents / 05 running` 블록 — 연구소에서 돌리는 에이전트(Hermes·Grok Bot·Muse·Dots·Hark)와 각자 맡은 일, 로컬 LLM(llama.cpp) 테스트 병행을 소개
### Changed
- About Philosophy 문장이 모바일에서 단어 중간에 끊기지 않도록 keep-all 적용
- Works에서 `resume_search` 제거, 비공개 `Community Manager`(AI놀이터 행사 운영 백오피스)·`Knowledge Base Tiny`(사람·AI 공용 지식저장소) 추가 — 공개 저장소보다 진행 중인 비공개 작업 비중이 커져 목록을 갱신

---

## [2.1] — 2026-10-08
### Added
- `tiny_brain/index.html` 랜딩 (/tiny_brain/) — 비전, 설계 철학 6원칙, 수집→구조화→검토→발행 흐름과 공통 상태 언어, 구성 프로젝트, 현재 상태. 사용자 승인 범위(흐름+구성 프로젝트)만 공개하고 포트·IP·페르소나·내부 결정 번호·수집 채널 실명은 제외
- 공유 이미지 `og-tinybrain.png`
### Changed
- 홈 Works: tiny_brain 패널을 랜딩으로 연결하고, 하위 프로젝트 3개(find_insight_writer, flowlab_community, status-dashboard) 행을 랜딩으로 흡수 — 홈은 대표 패널 2개 + Lab 목록 6개로 간결화

---

## [2.0] — 2026-10-08
### Changed
- 홈페이지 V2: "Deep Flow" 디자인으로 전면 교체 (인디고 블랙 + 물결 라인 + 시안·바이올렛). V1 네이비 개발자 템플릿에서 벗어나 "흐름" 정체성을 시각화. 다크 시안 3개 중 사용자 선택
  - Works: tiny_brain·shot_Flow 하이라이트 패널 + 나머지 9개 리스트 (홀수 칸 문제 해소)
  - Contact: GitHub만 유지 (V1의 LinkedIn·X는 빈 링크였음)
- V1은 git 태그 `v1` + `/v1/` 경로로 보존
- shot_Flow 랜딩에서 Google TPU Builder Program 배지 제거 (About에는 유지)
- shot_Flow 랜딩을 V2 톤(색·폰트 토큰, Hero 물결 라인)으로 맞춤 — 홈→랜딩 이동 시 톤이 끊기지 않도록
### Added
- 파비콘·apple-touch-icon (CI 아이콘 부분), OG/Twitter 메타 + 공유 이미지 2장(`og-home.png`, `og-shotflow.png`) — 메신저·SNS에 링크 공유 시 미리보기 표시

---

## [0.7] — 2026-10-08
### Added
- `shot_flow/index.html` 랜딩 페이지 (/shot_flow/) — 대외 포지셔닝 기반 소개: Hero(TPU Builder 배지), 5단계 흐름, 기능 4종, 예시 Studio 목업, 파일럿 문의. 실제 내부 구조는 의도적으로 담지 않음
### Changed
- Works `shot_Flow` 카드를 전폭 Featured로 강조하고 랜딩 페이지로 연결 — 대표 프로젝트가 카드 목록에 묻히지 않도록

---

## [0.6] — 2026-10-08
### Added
- `shot_Flow` 비공개 카드 추가 (이미지 하네스 프로젝트, 대외 노출명) (tiny_brain 바로 다음) — 대외 제출 포지셔닝(LLM 네이티브 광고 제작 도구) 문구와 일치시킴
- `agy-statusline-custom` 공개 저장소 카드 추가 (Antigravity CLI 상태바, 2026.05.24) — 공개 저장소 그룹 최상단
- About 터미널 `whoami`에 `Program: Google TPU Builder Program` 참여 줄 추가 (KO/EN)
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
- 도메인: `flowlab.tinypia.com` (→ 2026-10 기준 `tiny-flowlab.com`으로 이전, 구 도메인은 리다이렉트)

---

*이 파일은 웹서버에서 서빙되지 않습니다.*
