# 🛒 쇼핑몰 상세페이지 제작 프로젝트

**Shopping Mall Product Detail Page Generator**

이 프로젝트는 이커머스(쇼핑몰) 상품 상세페이지를 빠르고 일관되게 제작하기 위한 템플릿, 컴포넌트, 가이드 및 도구 모음입니다.

## 🎯 목적
- 고품질 상품 상세페이지 템플릿 제공
- 재사용 가능한 UI 컴포넌트
- 반응형 디자인 (모바일/PC)
- 이미지 갤러리, 스펙표, 리뷰 섹션 등 표준 섹션 지원
- 한국 주요 쇼핑몰(쿠팡, 11번가, 네이버쇼핑, 스마트스토어 등) 스타일 참고

## 📁 프로젝트 구조

```
shopping-mall-detail-page/
├── assets/
│   ├── css/          # 스타일시트
│   ├── js/           # 자바스크립트
│   └── images/       # 이미지 에셋
├── components/       # 재사용 컴포넌트
│   ├── header/
│   ├── product/
│   ├── gallery/
│   └── footer/
├── templates/        # 완성된 상세페이지 템플릿
├── src/
│   ├── pages/        # 페이지 소스
│   └── utils/        # 유틸리티
├── docs/             # 문서 및 가이드
├── scripts/          # 자동화 스크립트
└── README.md
```

## 🚀 시작하기

### 1. 로컬에서 미리보기
```bash
# 간단한 정적 서버 (Python)
cd templates
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

### 2. 템플릿 사용
1. `templates/` 폴더에서 원하는 템플릿 복사
2. 상품 정보 (제목, 가격, 이미지, 설명, 스펙) 수정
3. 이미지 교체 (`assets/images/products/`)

## ✨ 주요 기능
- [x] 반응형 상품 상세 레이아웃
- [x] 이미지 갤러리 (썸네일 + 메인)
- [x] 가격/할인 표시
- [x] 옵션 선택 (색상/사이즈 등)
- [x] 상품 스펙 테이블
- [x] 상세 설명 영역
- [x] 리뷰/Q&A 섹션 placeholder
- [ ] AI 이미지 생성 연동 (Imagine)
- [ ] 자동 템플릿 생성 스크립트
- [ ] Figma/디자인 시스템 연동

## 🛠 기술 스택
- HTML5 + CSS3 (Flexbox/Grid)
- Vanilla JavaScript (가벼운 인터랙션)
- 반응형 디자인 (Mobile First)
- 향후: React / Vue 컴포넌트 버전 계획

## 📝 사용 가이드
자세한 내용은 [`docs/GUIDE.md`](docs/GUIDE.md) 참고

## 🤝 기여
이슈 및 PR 환영합니다.

## 📄 라이선스
MIT License

---
**Created for:** 쇼핑몰 상세페이지 제작 프로젝트  
**GitHub:** https://github.com/Roboabuha/shopping-mall-detail-page
