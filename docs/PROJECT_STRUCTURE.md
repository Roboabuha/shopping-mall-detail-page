# 프로젝트 구조 상세 설명

```
shopping-mall-detail-page/
│
├── assets/                     # 정적 에셋
│   ├── css/
│   │   └── product-detail.css  # 메인 상세페이지 스타일
│   ├── js/
│   │   └── product-detail.js   # 인터랙션 스크립트
│   └── images/
│       └── products/           # 상품 이미지 저장소
│
├── components/                 # 재사용 가능한 컴포넌트 (향후 분리)
│   ├── header/
│   ├── product/
│   ├── gallery/
│   └── footer/
│
├── templates/                  # 완성된 HTML 템플릿
│   └── product-detail.html     # 기본 상품 상세페이지
│
├── src/
│   ├── pages/                  # 페이지 로직 (향후)
│   └── utils/
│       └── product-data.example.json  # 상품 데이터 예시
│
├── docs/
│   ├── GUIDE.md                # 사용 가이드
│   └── PROJECT_STRUCTURE.md    # 이 파일
│
├── scripts/                    # 자동화 스크립트 (향후 추가)
│
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 파일별 역할

| 파일 | 설명 |
|------|------|
| `templates/product-detail.html` | 바로 사용 가능한 상품 상세페이지 템플릿 |
| `assets/css/product-detail.css` | 반응형 스타일시트 (Mobile First) |
| `assets/js/product-detail.js` | 갤러리, 옵션, 탭, 수량 등 인터랙션 |
| `src/utils/product-data.example.json` | 상품 데이터 구조 예시 (자동화 시 사용) |

## 다음 단계 제안
1. 실제 상품 이미지로 교체
2. 여러 카테고리별 템플릿 추가 (의류 / 전자기기 / 식품 등)
3. JSON 기반 자동 생성 스크립트 작성
4. Grok Imagine으로 상품 이미지 생성 연동
