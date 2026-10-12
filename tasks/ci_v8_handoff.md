# CI v8 홈페이지 반영 인수인계 (2026-10-12)

작은흐름 연구소 CI가 v8로 확정됐다. 원본·생성 도구는 다른 저장소에 있고, 이 저장소는 **결과물을 복사해 쓰기만** 한다.

- 원본 저장소: `/home/tiny/my_work/_prototype/flowlab-artifact` (태그 `ci-v8`)
- 규정: 그 저장소의 `ci/README.md`, 토큰 `ci/ci.json`
- 미리보기: http://dev.tinypia.com:19999/ci · `/brand` · `/drafts`

## v8 심볼
채운 상태바가 있는 터미널 창 + 왼쪽 아래에 겹친 도톰한 키캡(`>`) + 키캡에서 커지는 리본이 `flowlab$` 프롬프트 뒤의 블록 커서를 가리킨다.
의미: 작은 입력 → 커지는 흐름 → 끝나지 않은 몰입("작은 흐름이 만드는 거대한 몰입").

## 규칙 (지켜야 함)
- 로고·워드마크는 **흑백 정본**. 어두운 배경엔 `white`, 밝은 배경엔 `ink`. 흰 배경에 `white` 금지
- 시안 `#71e5e2`·바이올렛 `#b5a2ff`는 사이트 UI 강조색으로만 쓴다. 로고에 칠하지 않는다(그라데이션·글로우 금지)
- 로고 파일을 다시 그리거나 비율을 바꾸지 않는다. 바꿀 일이 있으면 원본 저장소에서 `build_ci.py`로 다시 만든다
- `symbol_full`은 가로 120px 미만이면 `symbol_compact`(또는 favicon)로 대체

## 가져다 쓸 파일 (원본 저장소 기준 경로)
| 홈페이지 용도 | 원본 | 현재 이 저장소 |
|---|---|---|
| 헤더/히어로 로고 | `ci/svg/lockup_horizontal_white.svg` (PNG: `ci/png/lockup_horizontal_white_1024.png`) | `assets/logo_white.png` (index.html 히어로 `hero-mark`) |
| 세로 조합(필요 시) | `ci/svg/lockup_vertical_white.svg` | — |
| 심볼 단독 | `ci/svg/symbol_full_white.svg` | `assets/logo_symbol.png` |
| 파비콘 | `ci/favicon/favicon.svg`, `favicon.ico`, `favicon-16/32/48.png` | `assets/favicon.png` |
| 애플 터치 아이콘 | `ci/favicon/apple-touch-icon-180.png` | `assets/apple-touch-icon.png` |
| PWA/큰 아이콘 | `ci/favicon/icon-192.png`, `icon-512.png` | — |
| **홈 OG(1200×630)** | `deliverables/brand/og/home.png` | `assets/og-home.png` (index.html og:image·twitter:image) |
| Works OG(1200×630) 9종 | `deliverables/brand/og/<프로젝트>.png` | `assets/og-shotflow.png`, `og-tinybrain.png` 등 |
| Works 썸네일 9종 | `deliverables/brand/thumb/<프로젝트>.png` | (카드에 쓰면) |
| 에이전트 아이콘 5종(Hermes·Grok·Muse·Dots·Hark) | `deliverables/brand/icon/<이름>_{64,128,256}.png` | About 아래 `Agents` 블록 |
| 배너·섹션 배경·커버 | `deliverables/brand/banner/`, `section/section_bg_1920x1080.png`, `cover/` | (선택) |

`deliverables/`는 원본 저장소에서 git에 넣지 않는 생성물이다. 목록과 출처는 `deliverables/brand/manifest.json`.
프로젝트 이름: ai_timeline, chatbot_io, community_manager, knowledge_base, novel_studio, shot_flow, statusline, tiny_brain, wsl2_setup.

## 할 일 (제안)
- [x] 히어로·헤더 로고를 v8 가로 조합으로 교체 (SVG 우선, 어두운 배경이면 `white`)
- [x] 파비콘 세트 교체: `<link rel="icon" href="./assets/favicon.svg" type="image/svg+xml">` + `favicon.ico` 대체 + apple-touch-icon
- [x] Works OG/썸네일을 v8 로고가 들어간 버전으로 교체 (파일명 매핑 확인)
- [x] Agents 블록 아이콘 적용 여부 결정
- [x] 홈 OG 교체: `deliverables/brand/og/home.png` → `assets/og-home.png` (같은 파일명으로 덮으면 index.html 수정 불필요. SNS 캐시는 공유 디버거로 갱신)
- [x] 예전 로고 파일(`logo_*.png`) 정리 여부 결정 — 다른 페이지(`shot_flow/`, `tiny_brain/`, `v1/`)에서 쓰는지 먼저 확인
- [ ] 반영 후 changelog.md 기록, 배포는 사용자 승인 후 `deploy.sh`

## 다시 만들어야 할 때 (원본 저장소에서)
    cd /home/tiny/my_work/_prototype/flowlab-artifact
    .venv/bin/python ci/build_ci.py      # CI 전체 (svg/png/favicon/ci.json)
    .venv/bin/python compose.py          # 브랜드 산출물(deliverables/brand, 홈 OG만: --only home)
    .venv/bin/python ci/card_draft.py    # 명함 시안(out/card)

## 반영 결과 (2026-10-12)
- 히어로: 가로 대신 **세로 조합**(`assets/logo_v8_vertical_white.svg`) — 정사각형 히어로 자리에 맞춤(사용자 결정). 로고 drop-shadow 제거. 헤더는 텍스트 로고라 변경 없음
- 파비콘: `favicon.svg`+`favicon.ico` 링크(홈·shot_flow·tiny_brain), `favicon.png`(32px)·`apple-touch-icon.png` 덮어쓰기
- OG: 홈·shot_flow·tiny_brain 3종 같은 이름으로 덮어쓰기. 나머지 Works OG·썸네일은 이 저장소에서 쓰는 곳이 없어 가져오지 않음
- Agents: 128px 아이콘을 `assets/agents/`에 두고 36px로 표시
- 예전 `logo_*.png`: v1 아카이브가 쓰므로 유지(사용자 결정)
- changelog 2.4 기록 완료. 배포(`deploy.sh`)는 사용자 승인 대기
