const AI_TIMELINE_DATA = [
    {
        "id": "evt_001",
        "date": "2025-01-07",
        "type": "hardware",
        "category": "gpu",
        "title": "NVIDIA CES 2025 (RTX 50 시리즈)",
        "description": "젠슨 황이 CES에서 RTX 5090 등 블랙웰 기반 소비자용 GPU를 발표했습니다. 채팅방에서는 높은 가격과 AI 추론 성능, VRAM 용량에 대한 논의가 주를 이뤘습니다.",
        "links": [
            {
                "text": "NVIDIA News",
                "url": "https://nvidianews.nvidia.com/"
            }
        ]
    },
    {
        "id": "evt_002",
        "date": "2025-01-20",
        "type": "model",
        "category": "reasoning",
        "title": "DeepSeek-R1 출시 (DeepSeek 쇼크)",
        "description": "중국의 DeepSeek가 GPT-4급 추론 능력을 갖춘 R1 모델을 오픈 웨이트로 공개했습니다. 저비용 학습 효율성이 증명되며 엔비디아 주가에 일시적 충격을 주었습니다.",
        "connections": [
            "evt_001",
            "evt_004",
            "evt_036"
        ],
        "metrics": {
            "Impact": "Market Disruption",
            "AIME 2024": "79.8 (Pass@1)"
        },
        "links": []
    },
    {
        "id": "evt_003",
        "date": "2025-01-30",
        "type": "model",
        "category": "multimodal",
        "title": "DeepSeek Janus Pro 공개",
        "description": "DeepSeek가 텍스트와 이미지 이해 및 생성을 통합한 멀티모달 모델 Janus Pro를 공개했습니다.",
        "links": []
    },
    {
        "id": "evt_004",
        "date": "2025-01-31",
        "type": "model",
        "category": "reasoning",
        "title": "OpenAI o3-mini 출시",
        "description": "OpenAI가 DeepSeek R1에 대응하여 STEM 및 코딩에 특화된 비용 효율적 추론 모델 o3-mini를 출시했습니다. 무료 사용자에게도 추론 기능을 개방했습니다.",
        "links": [],
        "connections": [
            "evt_002"
        ],
        "metrics": {
            "Specialty": "STEM / Coding",
            "Effort Levels": "Low / Medium / High"
        }
    },
    {
        "id": "evt_005",
        "date": "2025-02-06",
        "type": "model",
        "category": "foundation",
        "title": "Gemini 2.0 Flash Thinking 업데이트",
        "description": "구글이 Gemini 2.0 Flash Thinking을 업데이트했습니다. 응답 속도와 추론 능력이 개선되어, 검색 및 자료 조사 용도로 채팅방 내에서 호평을 받았습니다.",
        "links": [
            {
                "text": "Google Blog",
                "url": "https://blog.google/technology/google-deepmind/gemini-model-thinking-updates/"
            }
        ]
    },
    {
        "id": "evt_006",
        "date": "2025-02-17",
        "type": "model",
        "category": "foundation",
        "title": "xAI Grok-3 공개",
        "description": "일론 머스크의 xAI가 10만 개의 H100으로 훈련된 Grok-3를 공개했습니다. 실시간 X 데이터 연동과 'Think' 모드가 탑재되었습니다.",
        "links": []
    },
    {
        "id": "evt_008",
        "date": "2025-02-24",
        "type": "model",
        "category": "coding",
        "title": "Claude 3.7 Sonnet 출시",
        "description": "Anthropic이 'Extended Thinking' 모드를 탑재한 Claude 3.7 Sonnet을 출시했습니다. 코딩 및 에이전트 작업에서 탁월한 성능을 입증했습니다.",
        "connections": [
            "evt_035"
        ],
        "links": [
            {
                "text": "Anthropic News",
                "url": "https://www.anthropic.com/news/claude-3-7-sonnet"
            }
        ]
    },
    {
        "id": "evt_007",
        "date": "2025-02-25",
        "type": "video",
        "category": "open-source",
        "title": "Alibaba Wan 2.1 공개",
        "description": "알리바바 클라우드가 비디오 생성 모델 Wan 2.1을 오픈소스로 공개했습니다. RTX 4090 등 소비자용 GPU에서도 구동 가능한 효율성을 보여주었습니다.",
        "links": [],
        "metrics": {
            "Performance": "480p generation in 4 mins on 4090"
        }
    },
    {
        "id": "evt_009",
        "date": "2025-02-26",
        "type": "model",
        "category": "sLLM",
        "title": "Mistral Small 24B 출시",
        "description": "Mistral AI가 개인용 장비에서도 구동 가능한 고성능 모델 Mistral Small 24B를 출시했습니다. 로컬 LLM 사용자들 사이에서 가성비 모델로 언급되었습니다.",
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/mistralai/Mistral-Small-24B-Instruct-2501"
            }
        ]
    },
    {
        "id": "evt_010",
        "date": "2025-03-04",
        "type": "model",
        "category": "sLLM",
        "title": "Kakao Kanana Nano 공개",
        "description": "카카오가 온디바이스 및 경량화 목적의 'Kanana Nano' 모델을 공개했습니다. 채팅 로그에서는 한국어 성능 비교 테스트가 진행되었습니다.",
        "links": [
            {
                "text": "Ollama Library",
                "url": "https://ollama.com/standard_lee/kanana-nano-2.1b-instruct"
            }
        ]
    },
    {
        "id": "evt_011",
        "date": "2025-03-06",
        "type": "tool",
        "category": "agent",
        "title": "Manus AI (Agent) 출시",
        "description": "싱가포르/중국 기반의 완전 자율 에이전트 'Manus'가 출시되었습니다. 계획, 실행, 검증을 자율적으로 수행하는 능력으로 화제가 되었습니다.",
        "links": [
            {
                "text": "Manus",
                "url": "https://manus.im/"
            }
        ]
    },
    {
        "id": "evt_012",
        "date": "2025-03-06",
        "type": "video",
        "category": "open-source",
        "title": "Tencent HunyuanVideo I2V 오픈소스",
        "description": "텐센트가 HunyuanVideo의 Image-to-Video 모델을 오픈소스로 공개했습니다. 720p 해상도를 지원하며 ComfyUI 등 로컬 환경 통합이 빠르게 이루어졌습니다.",
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/tencent/HunyuanVideo-I2V"
            }
        ]
    },
    {
        "id": "evt_013",
        "date": "2025-03-12",
        "type": "model",
        "category": "open-source",
        "title": "Google Gemma 3 출시",
        "description": "구글이 멀티모달 입력을 지원하는 오픈형 모델 Gemma 3(1B, 4B, 12B, 27B)를 출시했습니다.",
        "metrics": {
            "Context": "128k",
            "Sizes": "1B / 4B / 12B / 27B"
        },
        "links": []
    },
    {
        "id": "evt_014",
        "date": "2025-03-18",
        "type": "model",
        "category": "open-source",
        "title": "LG EXAONE Deep 공개",
        "description": "LG AI연구원이 추론 특화 모델 'EXAONE Deep' (8B, 32B 등)을 오픈소스로 공개했습니다. 수학 및 코딩 벤치마크에서 동급 최강 성능을 기록했습니다.",
        "metrics": {
            "Size": "8B",
            "Specialty": "Reasoning"
        },
        "links": []
    },
    {
        "id": "evt_015",
        "date": "2025-03-21",
        "type": "tool",
        "category": "dev",
        "title": "MCP (Model Context Protocol) 확산",
        "description": "Anthropic의 MCP가 Cursor 등 개발 도구와 결합되며 확산되었습니다. AI가 외부 데이터/툴과 연동하는 표준으로 자리 잡으며 관련 서버 리스트가 공유되었습니다.",
        "connections": [
            "evt_008"
        ],
        "links": [
            {
                "text": "Anthropic Docs",
                "url": "https://docs.anthropic.com/ko/docs/agents-and-tools/mcp"
            }
        ]
    },
    {
        "id": "evt_016",
        "date": "2025-03-25",
        "type": "model",
        "category": "foundation",
        "title": "Google Gemini 2.5 업데이트",
        "description": "구글이 Gemini 모델의 2.5 버전을 업데이트했습니다. 1.5 Pro/Flash 대비 향상된 성능과 코딩 어시스턴트 기능 강화가 언급되었습니다.",
        "links": [
            {
                "text": "Google Blog",
                "url": "https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/#gemini-2-5-pro"
            }
        ]
    },
    {
        "id": "evt_024",
        "date": "2025-03-25",
        "type": "model",
        "category": "foundation",
        "title": "Gemini 2.5 Pro (Experimental)",
        "description": "구글이 코딩과 복잡한 추론 능력이 대폭 향상된 Gemini 2.5 Pro Experimental 버전을 공개했습니다.",
        "connections": [
            "evt_079"
        ],
        "links": []
    },
    {
        "id": "evt_017",
        "date": "2025-03-26",
        "type": "image",
        "category": "feature",
        "title": "GPT-4o 이미지 생성 & 인페인팅",
        "description": "ChatGPT의 이미지 생성 기능이 대폭 강화되었습니다. 텍스트 묘사력 향상 및 인페인팅 기능 추가로 특정 화풍(지브리 등) 재현이 큰 화제가 되었습니다.",
        "links": [
            {
                "text": "News",
                "url": "https://www.chosun.com/economy/tech_it/2025/03/26/ZG3WPMQHNBAWLMWUWFOCOIEDSY/"
            }
        ]
    },
    {
        "id": "evt_018",
        "date": "2025-04-01",
        "type": "tool",
        "category": "coding",
        "title": "Cursor v0.48 업데이트",
        "description": "AI 코딩 에디터 Cursor의 v0.48 버전이 공개되었습니다. Chat Tabs, Custom Modes 등의 기능이 추가되었습니다.",
        "links": [
            {
                "text": "Changelog",
                "url": "https://www.cursor.com/en/changelog"
            },
            {
                "text": "Forum",
                "url": "https://forum.cursor.com/t/cursor-v0-48-chat-tabs-custom-modes-and-sounds/69080"
            }
        ]
    },
    {
        "id": "evt_020",
        "date": "2025-04-05",
        "type": "model",
        "category": "open-source",
        "title": "Llama 4 Scout (17B) 공개",
        "description": "Meta가 차세대 MoE 아키텍처 기반의 Llama 4 Scout(17B 활성 파라미터) 모델을 공개했습니다. 10M 컨텍스트 윈도우를 지원합니다.",
        "connections": [
            "evt_024"
        ],
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/meta-llama"
            }
        ],
        "metrics": {
            "Active Params": "17B",
            "Context": "10M"
        }
    },
    {
        "id": "evt_019",
        "date": "2025-04-07",
        "type": "model",
        "category": "audio",
        "title": "Llama-OuteTTS-1.0-1B",
        "description": "OuteAI에서 Llama 기반의 TTS(Text-to-Speech) 모델을 공개했습니다. 다국어 기능을 지원하는 1B 사이즈 모델입니다.",
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/OuteAI/Llama-OuteTTS-1.0-1B#5-multilingual-capabilities"
            }
        ]
    },
    {
        "id": "evt_021",
        "date": "2025-04-09",
        "type": "hardware",
        "category": "gpu",
        "title": "RTX 5090 판매 개시",
        "description": "NVIDIA GeForce RTX 5090 그래픽카드의 국내 판매가 포착되었습니다(이엠텍 PALIT 모델 등).",
        "links": [
            {
                "text": "판매 페이지",
                "url": "https://m.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0040184252"
            }
        ]
    },
    {
        "id": "evt_022",
        "date": "2025-04-10",
        "type": "news",
        "category": "conference",
        "title": "Google Cloud Next '25",
        "description": "구글의 연례 클라우드 컨퍼런스가 개최되었습니다. Gemini 2.5 제품군과 Veo 비디오 모델 등 주요 업데이트가 발표되었습니다.",
        "connections": [
            "evt_023",
            "evt_026"
        ],
        "links": [
            {
                "text": "Blog",
                "url": "https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next25"
            }
        ]
    },
    {
        "id": "evt_023",
        "date": "2025-04-10",
        "type": "video",
        "category": "foundation",
        "title": "Veo 비디오 생성 API",
        "description": "구글의 동영상 생성 모델 Veo가 Gemini API를 통해 제공되기 시작했습니다.",
        "connections": [
            "evt_022"
        ],
        "links": [
            {
                "text": "Docs",
                "url": "https://ai.google.dev/gemini-api/docs/video?hl=ko"
            }
        ]
    },
    {
        "id": "evt_025",
        "date": "2025-04-14",
        "type": "model",
        "category": "foundation",
        "title": "GPT-4.1 출시",
        "description": "OpenAI가 GPT-4o를 대체하는 GPT-4.1을 API로 선공개했습니다. 코딩 및 지시 이행 능력이 개선되었습니다.",
        "connections": [
            "evt_026"
        ],
        "links": [
            {
                "text": "OpenAI Changelog",
                "url": "https://platform.openai.com/docs/models/gpt-4.1"
            }
        ]
    },
    {
        "id": "evt_026",
        "date": "2025-04-16",
        "type": "model",
        "category": "reasoning",
        "title": "OpenAI o3 및 o4-mini 공개",
        "description": "OpenAI가 플래그십 추론 모델 o3와 경량화 모델 o4-mini를 정식 공개했습니다.",
        "connections": [
            "evt_004"
        ],
        "links": []
    },
    {
        "id": "evt_027",
        "date": "2025-04-18",
        "type": "model",
        "category": "foundation",
        "title": "Gemini 2.5 Flash",
        "description": "구글이 속도와 비용 효율성을 강조한 Gemini 2.5 Flash 모델을 빌드 옵션으로 추가했습니다.",
        "connections": [
            "evt_024"
        ],
        "links": [
            {
                "text": "Community",
                "url": "https://gall.dcinside.com/mgallery/board/view/?id=thesingularity&no=704085"
            }
        ]
    },
    {
        "id": "evt_028",
        "date": "2025-05-01",
        "type": "model",
        "category": "foundation",
        "title": "카나나-o (Kanana-o)",
        "description": "카카오가 한국어에 특화된 멀티모달 언어모델 '카나나-o'의 성능을 공개했습니다.",
        "links": [
            {
                "text": "News",
                "url": "https://n.news.naver.com/mnews/article/001/0015363402?sid=105"
            }
        ]
    },
    {
        "id": "evt_029",
        "date": "2025-05-01",
        "type": "platform",
        "category": "science",
        "title": "FutureHouse 과학 플랫폼 런칭",
        "description": "AI 과학자 에이전트(Crow, Falcon 등)를 포함한 FutureHouse의 연구 플랫폼이 정식 런칭되었습니다.",
        "links": [
            {
                "text": "FutureHouse",
                "url": "https://platform.futurehouse.org/"
            }
        ]
    },
    {
        "id": "evt_030",
        "date": "2025-05-06",
        "type": "news",
        "category": "rumor",
        "title": "OpenAI, Windsurf 인수설 보도",
        "description": "OpenAI가 코딩 에이전트 Windsurf를 30억 달러에 인수한다는 보도가 나왔으나, 이후 협상이 결렬된 것으로 확인되었습니다.",
        "links": [],
        "connections": [
            "evt_046_new"
        ]
    },
    {
        "id": "evt_031",
        "date": "2025-05-08",
        "type": "image",
        "category": "foundation",
        "title": "Gemini 2.0 Flash 이미지 생성",
        "description": "Gemini 2.0 Flash Preview 모델에서 이미지 생성 기능 지원이 시작되었습니다.",
        "connections": [
            "evt_024"
        ],
        "links": [
            {
                "text": "Google Blog",
                "url": "https://developers.googleblog.com/en/generate-images-gemini-2-0-flash-preview/"
            }
        ]
    },
    {
        "id": "evt_032",
        "date": "2025-05-14",
        "type": "tool",
        "category": "coding",
        "title": "AlphaEvolve 공개",
        "description": "DeepMind가 스스로 알고리즘을 개선하고 진화시키는 코딩 에이전트 AlphaEvolve를 공개했습니다.",
        "links": []
    },
    {
        "id": "evt_033",
        "date": "2025-05-20",
        "type": "model",
        "category": "on-device",
        "title": "Gemini Nano API 공개",
        "description": "구글이 온디바이스 AI 모델인 Gemini Nano의 API를 공개하며 오프라인 환경에서의 기능 지원을 확대했습니다.",
        "connections": [
            "evt_034"
        ],
        "links": [
            {
                "text": "AI Times",
                "url": "https://www.aitimes.com/news/articleView.html?idxno=170552"
            }
        ]
    },
    {
        "id": "evt_034",
        "date": "2025-05-21",
        "type": "news",
        "category": "conference",
        "title": "Google I/O '25 & Gemma 3n",
        "description": "Google I/O 2025가 개최되었습니다. 새로운 모델인 Gemma 3n에 대한 문서가 공개되었습니다.",
        "connections": [
            "evt_033"
        ],
        "links": [
            {
                "text": "Gemma 3n Docs",
                "url": "https://ai.google.dev/gemma/docs/gemma-3n"
            },
            {
                "text": "Keynote Blog",
                "url": "https://blog.google/intl/ko-kr/products/io-2025-keynote/"
            }
        ]
    },
    {
        "id": "evt_035",
        "date": "2025-05-22",
        "type": "model",
        "category": "foundation",
        "title": "Claude 4 (Opus/Sonnet) 출시",
        "description": "Anthropic이 Claude 4 Opus와 Sonnet을 정식 출시했습니다. Opus 4는 장기 실행 에이전트 작업에서 최고 성능을 기록했습니다.",
        "links": [
            {
                "text": "Anthropic News",
                "url": "https://www.anthropic.com/news/claude-4"
            }
        ]
    },
    {
        "id": "evt_036",
        "date": "2025-05-28",
        "type": "model",
        "category": "open-source",
        "title": "DeepSeek-R1-0528 업데이트",
        "description": "DeepSeek가 R1 모델의 업데이트 버전을 공개했습니다. 수학 벤치마크(AIME) 성능이 대폭 향상되고 환각 현상이 줄어들었습니다.",
        "links": []
    },
    {
        "id": "evt_037",
        "date": "2025-06-04",
        "type": "video",
        "category": "tool",
        "title": "Manus 비디오 제작기",
        "description": "Manus에서 새로운 비디오 생성 및 제작 툴을 출시했습니다.",
        "links": [
            {
                "text": "Community",
                "url": "https://gall.dcinside.com/mgallery/board/view/?id=thesingularity&no=738241"
            }
        ]
    },
    {
        "id": "evt_038",
        "date": "2025-06-05",
        "type": "tool",
        "category": "agent",
        "title": "OpenAI MCP 문서 공개",
        "description": "OpenAI가 MCP(Model Context Protocol)에 대한 공식 문서를 업데이트했습니다.",
        "links": [
            {
                "text": "Docs",
                "url": "https://platform.openai.com/docs/mcp"
            }
        ]
    },
    {
        "id": "evt_039",
        "date": "2025-06-11",
        "type": "model",
        "category": "adoption",
        "title": "알리바바 Qwen 3 도입",
        "description": "신한은행이 중국 알리바바의 최신 AI 모델인 'Qwen 3(큐원3)' 도입을 추진한다는 소식이 전해졌습니다.",
        "links": [
            {
                "text": "News",
                "url": "https://www.etnews.com/20250611000236"
            }
        ]
    },
    {
        "id": "evt_040",
        "date": "2025-06-18",
        "type": "model",
        "category": "foundation",
        "title": "Gemini 2.5 Thinking Model",
        "description": "구글이 사고(Thinking) 과정이 강화된 Gemini 2.5 업데이트를 발표했습니다.",
        "connections": [
            "evt_024",
            "evt_027"
        ],
        "links": [
            {
                "text": "Blog",
                "url": "https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/"
            }
        ]
    },
    {
        "id": "evt_041",
        "date": "2025-06-20",
        "type": "image",
        "category": "optimization",
        "title": "Stable Diffusion 3.5 (Nvidia Optimized)",
        "description": "엔비디아가 TensorRT 최적화를 통해 Stable Diffusion 3.5의 성능을 대폭 향상시켰습니다 (VRAM 40% 절감).",
        "links": [
            {
                "text": "News",
                "url": "https://www.aitimes.kr/news/articleView.html?idxno=35292"
            }
        ]
    },
    {
        "id": "evt_042",
        "date": "2025-06-25",
        "type": "image",
        "category": "foundation",
        "title": "Imagen 4 공개",
        "description": "구글의 이미지 생성 모델 Imagen 4가 Gemini API 및 AI Studio에서 사용 가능해졌습니다.",
        "connections": [
            "evt_031"
        ],
        "links": [
            {
                "text": "Blog",
                "url": "https://developers.googleblog.com/en/imagen-4-now-available-in-the-gemini-api-and-google-ai-studio/"
            }
        ]
    },
    {
        "id": "evt_043",
        "date": "2025-06-25",
        "type": "tool",
        "category": "coding",
        "title": "Gemini CLI 출시",
        "description": "구글이 터미널에서 직접 구동되는 오픈소스 AI 에이전트 Gemini CLI를 출시했습니다. 100만 토큰 컨텍스트를 활용한 코드베이스 분석을 지원합니다.",
        "links": []
    },
    {
        "id": "evt_044",
        "date": "2025-06-29",
        "type": "model",
        "category": "research",
        "title": "MedGemma 공개",
        "description": "Google DeepMind가 의료 특화 경량 모델인 MedGemma를 공개했습니다.",
        "connections": [
            "evt_034"
        ],
        "links": [
            {
                "text": "DeepMind",
                "url": "https://deepmind.google/models/gemma/medgemma/"
            }
        ]
    },
    {
        "id": "evt_045",
        "date": "2025-07-03",
        "type": "model",
        "category": "foundation",
        "title": "SKT A.X 4.0 공개",
        "description": "SKT가 자체 개발한 LLM 'A.X 4.0' 및 경량화 모델을 HuggingFace에 공개.",
        "connections": [],
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/skt/A.X-4.0"
            },
            {
                "text": "Light Model",
                "url": "https://huggingface.co/skt/A.X-4.0-Light"
            }
        ]
    },
    {
        "id": "evt_045_new",
        "date": "2025-07-03",
        "type": "model",
        "category": "open-source",
        "title": "SKT A.X 4.0 공개",
        "description": "SK텔레콤이 자체 개발한 한국어 특화 LLM 'A.X 4.0'을 오픈소스로 공개했습니다.",
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/skt/A.X-4.0"
            }
        ]
    },
    {
        "id": "evt_046",
        "date": "2025-07-04",
        "type": "model",
        "category": "multimodal",
        "title": "Microsoft Phi-4 Multimodal",
        "description": "마이크로소프트가 소형 멀티모달 모델 Phi-4의 Multimodal Instruct 버전을 공개.",
        "connections": [],
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/microsoft/Phi-4-multimodal-instruct"
            }
        ]
    },
    {
        "id": "evt_047",
        "date": "2025-07-05",
        "type": "tool",
        "category": "agent",
        "title": "Gemini CLI 출시",
        "description": "구글이 터미널 환경에서 사용할 수 있는 오픈소스 AI 에이전트 'Gemini CLI'를 공개.",
        "connections": [
            "evt_057"
        ],
        "links": [
            {
                "text": "요즘IT 리뷰",
                "url": "https://yozm.wishket.com/magazine/detail/3216/"
            },
            {
                "text": "Reddit AMA",
                "url": "https://tiny.is-an.ai/Gemini-CLI-AMA_reddit"
            }
        ]
    },
    {
        "id": "evt_046_new",
        "date": "2025-07-12",
        "type": "news",
        "category": "business",
        "title": "Google, Windsurf 기술 라이선스 계약",
        "description": "OpenAI와의 인수 협상 결렬 후, Google DeepMind가 Windsurf의 핵심 인력을 영입하고 기술 라이선스 계약(24억 달러 규모)을 체결했습니다.",
        "connections": [
            "evt_030"
        ],
        "links": []
    },
    {
        "id": "evt_048",
        "date": "2025-07-15",
        "type": "model",
        "category": "open-source",
        "title": "LG EXAONE 4.0 32B",
        "description": "LG AI연구원이 성능을 대폭 개선한 EXAONE 4.0 32B 모델을 오픈소스로 공개.",
        "metrics": {
            "Params": "32B"
        },
        "connections": [],
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.0-32B"
            }
        ]
    },
    {
        "id": "evt_049",
        "date": "2025-07-16",
        "type": "model",
        "category": "vision",
        "title": "NCSoft VARCO Vision 2.0 공개",
        "description": "엔씨소프트가 다중 이미지 처리와 한국어 인식에 특화된 VARCO Vision 2.0 (14B) 모델을 공개했습니다.",
        "metrics": {
            "Params": "14B"
        },
        "connections": [],
        "links": []
    },
    {
        "id": "evt_050",
        "date": "2025-07-22",
        "type": "benchmark",
        "category": "math",
        "title": "Google DeepMind IMO 2025 성과",
        "description": "Google DeepMind의 AI가 2025 국제수학올림피아드(IMO)에서 은메달 수준의 성과를 달성했다고 발표.",
        "connections": [],
        "links": [
            {
                "text": "DeepMind Paper",
                "url": "https://storage.googleapis.com/deepmind-media/gemini/IMO_2025.pdf"
            }
        ]
    },
    {
        "id": "evt_051",
        "date": "2025-08-01",
        "type": "model",
        "category": "foundation",
        "title": "Gemini 2.5 Deep Think",
        "description": "구글이 추론 능력을 강화한 Gemini 2.5 Deep Think 모델을 배포 시작.",
        "connections": [
            "evt_047"
        ],
        "links": [
            {
                "text": "Google Blog",
                "url": "https://blog.google/products/gemini/gemini-2-5-deep-think/"
            }
        ]
    },
    {
        "id": "evt_052",
        "date": "2025-08-05",
        "type": "model",
        "category": "multimodal",
        "title": "Qwen-Image 공개",
        "description": "알리바바 클라우드가 이미지 이해 및 생성 능력을 갖춘 Qwen-Image 모델을 공개.",
        "connections": [],
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/Qwen/Qwen-Image"
            }
        ]
    },
    {
        "id": "evt_053",
        "date": "2025-08-09",
        "type": "news",
        "category": "hype",
        "title": "OpenAI GPT-5 AMA",
        "description": "샘 알트만과 OpenAI 팀이 레딧에서 GPT-5 관련 AMA(Ask Me Anything)를 진행하며 기대감 고조.",
        "connections": [],
        "links": [
            {
                "text": "Reddit Thread",
                "url": "https://www.reddit.com/r/ChatGPT/comments/1mkae1l/gpt5_ama_with_openais_sam_altman_and_some_of_the/"
            }
        ]
    },
    {
        "id": "evt_055",
        "date": "2025-08-24",
        "type": "model",
        "category": "foundation",
        "title": "Grok-2 공개",
        "description": "xAI의 Grok-2 모델 가중치가 HuggingFace를 통해 공개됨.",
        "connections": [
            "evt_060"
        ],
        "links": [
            {
                "text": "HuggingFace",
                "url": "https://huggingface.co/xai-org/grok-2"
            }
        ]
    },
    {
        "id": "evt_054",
        "date": "2025-08-26",
        "type": "image",
        "category": "model",
        "title": "Google 'Nano Banana' (Gemini 2.5 Image) 출시",
        "description": "코드네임 'Nano Banana'로 알려졌던 Gemini 2.5 Flash Image 모델이 정식 출시되었습니다. 텍스트 렌더링과 캐릭터 일관성이 크게 향상되었습니다.",
        "connections": [
            "evt_081_new"
        ],
        "links": []
    },
    {
        "id": "evt_056",
        "date": "2025-08-26",
        "type": "tool",
        "category": "audio",
        "title": "NotebookLM 오디오/비디오 업데이트",
        "description": "구글 NotebookLM이 오디오 및 비디오 개요 생성 기능을 강화하고 다국어 지원을 확대.",
        "connections": [],
        "links": [
            {
                "text": "Google Blog",
                "url": "https://blog.google/intl/ko-kr/products/notebook-lm-audio-video-overviews-more-languages-longer-content-kr/"
            }
        ]
    },
    {
        "id": "evt_057",
        "date": "2025-09-02",
        "type": "tool",
        "category": "coding",
        "title": "Gemini CLI & Zed 통합",
        "description": "Gemini CLI가 Zed 에디터에 공식 통합되어 개발 환경 내 에이전트 기능 지원.",
        "connections": [
            "evt_047"
        ],
        "links": [
            {
                "text": "Google Developers",
                "url": "https://developers.googleblog.com/en/gemini-cli-is-now-integrated-into-zed/"
            },
            {
                "text": "Zed Blog",
                "url": "https://zed.dev/blog/bring-your-own-agent-to-zed"
            }
        ]
    },
    {
        "id": "evt_058",
        "date": "2025-09-04",
        "type": "benchmark",
        "category": "research",
        "title": "DeepMind RAG 버그 발견",
        "description": "구글 DeepMind가 대규모 RAG 시스템에서 임베딩 제한으로 인한 검색 실패(버그)에 대한 연구 발표.",
        "connections": [],
        "links": [
            {
                "text": "Analysis",
                "url": "https://www.marktechpost.com/2025/09/04/google-deepmind-finds-a-fundamental-bug-in-rag-embedding-limits-break-retrieval-at-scale/"
            }
        ]
    },
    {
        "id": "evt_059",
        "date": "2025-09-09",
        "type": "news",
        "category": "business",
        "title": "MS, Anthropic 모델 도입",
        "description": "마이크로소프트가 OpenAI 의존도를 낮추기 위해 경쟁사인 Anthropic의 모델을 도입한다고 발표.",
        "connections": [
            "evt_061"
        ],
        "links": [
            {
                "text": "TechCrunch",
                "url": "https://techcrunch.com/2025/09/09/microsoft-to-lessen-reliance-on-openai-by-buying-ai-from-rival-anthropic/"
            }
        ]
    },
    {
        "id": "evt_060",
        "date": "2025-09-18",
        "type": "benchmark",
        "category": "coding",
        "title": "Gemini ICPC 골드 레벨 달성",
        "description": "Gemini가 국제 대학생 프로그래밍 대회(ICPC) 월드 파이널 문제에서 골드 레벨 성과를 달성.",
        "connections": [
            "evt_051"
        ],
        "links": [
            {
                "text": "Google DeepMind",
                "url": "https://deepmind.google/discover/blog/gemini-achieves-gold-level-performance-at-the-international-collegiate-programming-contest-world-finals/"
            }
        ]
    },
    {
        "id": "evt_061",
        "date": "2025-09-19",
        "type": "model",
        "category": "foundation",
        "title": "Grok-4 Fast 출시",
        "description": "xAI가 추론과 비추론 모드를 통합하여 효율성을 극대화한 Grok-4 Fast 모델을 출시했습니다.",
        "connections": [
            "evt_055"
        ],
        "links": [
            {
                "text": "xAI News",
                "url": "https://x.ai/news/grok-4-fast"
            }
        ]
    },
    {
        "id": "evt_062",
        "date": "2025-09-30",
        "type": "model",
        "category": "foundation",
        "title": "Claude Sonnet 4.5 공개",
        "description": "Anthropic이 성능을 개선한 Claude Sonnet 4.5 모델을 공개 (로그 기반 추정).",
        "connections": [
            "evt_059"
        ],
        "links": [
            {
                "text": "Anthropic News",
                "url": "https://www.anthropic.com/news/claude-sonnet-4-5"
            }
        ]
    },
    {
        "id": "evt_063",
        "date": "2025-09-30",
        "type": "model",
        "category": "foundation",
        "title": "GLM-4.6 공개",
        "description": "Zhipu AI가 코딩과 에이전트 성능을 강화한 GLM-4.6 모델을 공개했습니다. MIT 라이선스로 제공됩니다.",
        "connections": [],
        "links": []
    },
    {
        "id": "evt_064",
        "date": "2025-09-30",
        "type": "video",
        "category": "foundation",
        "title": "OpenAI Sora 2 출시",
        "description": "OpenAI가 비디오 생성 모델 Sora 2를 미국/캐나다 지역 한정으로 앱을 통해 출시했습니다. 오디오 동기화 기능이 추가되었습니다.",
        "links": [
            {
                "text": "OpenAI",
                "url": "https://openai.com/index/sora-2-is-here/"
            }
        ]
    },
    {
        "id": "evt_065",
        "date": "2025-10-02",
        "type": "tool",
        "category": "iot",
        "title": "Google Home + Gemini 통합",
        "description": "구글이 스마트 홈 하드웨어에 Gemini를 완전 통합, 자연어 명령으로 IoT 기기를 제어하는 새로운 기능을 런칭함.",
        "connections": [
            "evt_066"
        ],
        "links": [
            {
                "text": "Google Blog",
                "url": "https://blog.google/products/google-nest/next-era-gemini-google-home-launch/"
            }
        ]
    },
    {
        "id": "evt_066",
        "date": "2025-10-08",
        "type": "model",
        "category": "agent",
        "title": "Gemini 'Computer Use' 모델",
        "description": "DeepMind가 컴퓨터 화면을 인식하고 마우스/키보드 조작이 가능한 에이전트 특화 Gemini 모델을 발표.",
        "connections": [
            "evt_080"
        ],
        "links": [
            {
                "text": "DeepMind Blog",
                "url": "https://blog.google/technology/google-deepmind/gemini-computer-use-model/"
            }
        ]
    },
    {
        "id": "evt_067",
        "date": "2025-10-16",
        "type": "model",
        "category": "foundation",
        "title": "Claude Haiku 4.5 출시",
        "description": "Anthropic이 추론 속도와 비용 효율성을 극대화한 Haiku 4.5 모델을 선행 공개함.",
        "connections": [
            "evt_070",
            "evt_084"
        ],
        "links": [
            {
                "text": "Anthropic News",
                "url": "https://www.anthropic.com/news/claude-haiku-4-5"
            }
        ]
    },
    {
        "id": "evt_068",
        "date": "2025-10-21",
        "type": "tool",
        "category": "coding",
        "title": "Claude Code (Web Version)",
        "description": "웹 브라우저 상에서 직접 코드를 실행하고 디버깅할 수 있는 'Claude Code' 웹 버전이 런칭됨.",
        "connections": [
            "evt_067"
        ],
        "links": [
            {
                "text": "Anthropic News",
                "url": "https://www.anthropic.com/news/claude-code-on-the-web"
            }
        ]
    },
    {
        "id": "evt_069",
        "date": "2025-10-23",
        "type": "hardware",
        "category": "wearable",
        "title": "Amazon AI 스마트 안경",
        "description": "아마존이 배송 기사의 업무 효율을 높이기 위한 AR/AI 기반 스마트 안경을 공개.",
        "links": [
            {
                "text": "TechCrunch",
                "url": "https://techcrunch.com/2025/10/22/amazon-unveils-ai-smart-glasses-for-its-delivery-drivers/"
            }
        ]
    },
    {
        "id": "evt_070",
        "date": "2025-10-24",
        "type": "tool",
        "category": "feature",
        "title": "Claude 메모리 기능 도입",
        "description": "Claude Pro 및 Max 요금제 사용자를 대상으로 사용자 정보를 장기 기억하는 메모리 기능이 정식 적용됨.",
        "connections": [
            "evt_067"
        ],
        "links": [
            {
                "text": "Community",
                "url": "https://gall.dcinside.com/mgallery/board/view/?id=thesingularity&no=867149"
            }
        ]
    },
    {
        "id": "evt_071",
        "date": "2025-10-24",
        "type": "model",
        "category": "foundation",
        "title": "DeepMind 'Genie 3' (월드 모델)",
        "description": "물리적 상호작용이 가능한 차세대 월드 모델 Genie 3가 발표되어 AGI 연구의 새로운 지평을 염.",
        "links": [
            {
                "text": "Community",
                "url": "https://gall.dcinside.com/mgallery/board/view/?id=thesingularity&no=791721"
            }
        ]
    },
    {
        "id": "evt_077",
        "date": "2025-10-28",
        "type": "tool",
        "category": "coding",
        "title": "GitHub Copilot Agent HQ",
        "description": "GitHub Universe에서 다양한 AI 에이전트를 통합 관리할 수 있는 'Agent HQ'가 발표되었습니다.",
        "links": []
    },
    {
        "id": "evt_072",
        "date": "2025-10-29",
        "type": "tool",
        "category": "service",
        "title": "카카오 AI 에이전트 'Kanana'",
        "description": "카카오가 별도 앱으로 구동되는 AI 메이트 서비스 'Kanana(카나나)'를 정식 출시함.",
        "links": [
            {
                "text": "Official Site",
                "url": "https://kanana.kakao.com/"
            }
        ]
    },
    {
        "id": "evt_073",
        "date": "2025-11-01",
        "type": "image",
        "category": "research",
        "title": "Nvidia ChronoEdit",
        "description": "Nvidia가 시간적 추론(Temporal Reasoning)을 적용한 이미지/비디오 편집 기술 ChronoEdit을 공개.",
        "links": [
            {
                "text": "Nvidia Research",
                "url": "https://research.nvidia.com/labs/toronto-ai/chronoedit/"
            }
        ]
    },
    {
        "id": "evt_074",
        "date": "2025-11-06",
        "type": "tool",
        "category": "coding",
        "title": "Cognition AI 'Codemaps'",
        "description": "AI 코딩 에이전트 Devin의 개발사 Cognition AI가 코드베이스 구조를 시각화하는 Codemaps 기능을 발표.",
        "links": [
            {
                "text": "Cognition Blog",
                "url": "https://cognition.ai/blog/codemaps"
            }
        ]
    },
    {
        "id": "evt_075",
        "date": "2025-11-09",
        "type": "image",
        "category": "model",
        "title": "Google 'Gempix 2' 리뷰 등장",
        "description": "Google의 차세대 이미지/멀티모달 모델로 추정되는 'Gempix 2'에 대한 리뷰가 Reddit 등 커뮤니티에 등장함.",
        "links": [
            {
                "text": "Reddit",
                "url": "https://www.reddit.com/r/Bard/comments/1oqixyk/googles_gempix_2_review/"
            }
        ]
    },
    {
        "id": "evt_076",
        "date": "2025-11-13",
        "type": "model",
        "category": "foundation",
        "title": "GPT-5.1 공식 출시",
        "description": "OpenAI가 웹앱 A/B 테스팅을 마치고 GPT-5.1 모델을 공식 릴리즈함. 코딩 성능 등이 개선된 마이너 업데이트.",
        "connections": [
            "evt_082"
        ],
        "links": [
            {
                "text": "OpenAI",
                "url": "https://openai.com/index/gpt-5-1/"
            }
        ]
    },
    {
        "id": "evt_078",
        "date": "2025-11-17",
        "type": "tool",
        "category": "coding",
        "title": "Google 'Code Wiki' 발표",
        "description": "구글이 코드 이해 및 가속을 돕는 개발자 도구 'Code Wiki'를 발표함.",
        "links": [
            {
                "text": "Google Developers",
                "url": "https://developers.googleblog.com/en/introducing-code-wiki-accelerating-your-code-understanding/"
            }
        ]
    },
    {
        "id": "evt_079",
        "date": "2025-11-18",
        "type": "model",
        "category": "foundation",
        "title": "Google Gemini 3.0 & Antigravity 공개",
        "description": "구글이 차세대 모델 Gemini 3.0 Pro와 에이전트 중심의 개발 환경 'Antigravity'를 공개했습니다.",
        "connections": [
            "evt_024",
            "evt_043"
        ],
        "links": []
    },
    {
        "id": "evt_080",
        "date": "2025-11-19",
        "type": "tool",
        "category": "browser",
        "title": "Google 'Antigravity' 공개",
        "description": "구글이 기존 브라우저 개념을 탈피한 AI 네이티브 실행 환경 'Antigravity'를 공개하고 배포를 시작함.",
        "connections": [
            "evt_079"
        ],
        "links": [
            {
                "text": "Official Site",
                "url": "https://antigravity.google/"
            }
        ]
    },
    {
        "id": "evt_081_new",
        "date": "2025-11-20",
        "type": "image",
        "category": "model",
        "title": "Nano Banana Pro (Gemini 3.0 Image)",
        "description": "Nano Banana의 상위 버전인 'Nano Banana Pro'가 공개되었습니다. Gemini 3.0 기반의 월드 지식을 활용해 인포그래픽 생성 등에 특화되었습니다.",
        "connections": [
            "evt_054"
        ],
        "links": []
    },
    {
        "id": "evt_081",
        "date": "2025-11-21",
        "type": "model",
        "category": "open-source",
        "title": "Nano Banana 2",
        "description": "경량화 모델 'Nano Banana 2'가 공개되어 오픈소스 커뮤니티에서 높은 성능으로 화제가 됨.",
        "links": [
            {
                "text": "Community",
                "url": "https://gall.dcinside.com/mgallery/board/view/?id=thesingularity&no=887869"
            }
        ]
    },
    {
        "id": "evt_083",
        "date": "2025-11-25",
        "type": "news",
        "category": "cloud",
        "title": "Claude Opus 4.5 on Vertex AI",
        "description": "Anthropic의 최상위 모델 Claude Opus 4.5가 Google Cloud Vertex AI 플랫폼에서 서비스되기 시작함.",
        "connections": [
            "evt_067"
        ],
        "links": [
            {
                "text": "Google Cloud Blog",
                "url": "https://cloud.google.com/blog/products/ai-machine-learning/claude-opus-4-5-on-vertex-ai"
            }
        ]
    },
    {
        "id": "evt_084",
        "date": "2025-11-25",
        "type": "image",
        "category": "open-source",
        "title": "Flux 2 출시",
        "description": "Black Forest Labs가 다중 참조(Multi-Reference) 생성을 지원하는 Flux 2 모델군(Pro, Dev, Flex)을 출시했습니다.",
        "metrics": {
            "Features": "Up to 10 reference images",
            "Optimization": "FP8 Quantized"
        },
        "links": []
    },
    {
        "id": "evt_082",
        "date": "2025-12-04",
        "type": "model",
        "category": "coding",
        "title": "GPT-5.1 Codex Max 프리뷰",
        "description": "OpenAI가 GitHub Copilot을 통해 장기 실행 코딩 작업에 특화된 GPT-5.1 Codex Max 모델을 프리뷰로 공개했습니다.",
        "connections": [
            "evt_076"
        ],
        "links": [
            {
                "text": "OpenAI Index",
                "url": "https://openai.com/index/gpt-5-1-codex-max/"
            }
        ]
    },
    {
        "id": "evt_085",
        "date": "2025-12-05",
        "type": "tool",
        "category": "image",
        "title": "Google ImageFX 업데이트",
        "description": "구글의 AI 이미지 생성 도구 ImageFX가 업데이트됨.",
        "links": [
            {
                "text": "Google Labs",
                "url": "https://labs.google/fx/tools/image-fx"
            }
        ]
    }
];
