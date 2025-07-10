# 다다 - 전업투자자 소개 웹사이트

연한 그린과 화이트 톤의 깔끔하고 세련된 스타일로 제작된 개인 소개 웹사이트입니다.

## 기능

- 반응형 디자인: 모든 디바이스에서 최적화된 화면 제공
- 스크롤 애니메이션: 부드러운 스크롤 효과
- 호버 인터랙션: 전문분야 카드 및 다양한 요소에 호버 효과
- 모던한 디자인: 연한 그린과 화이트 톤의 세련된 스타일

## 구성 요소

- `index.html`: 메인 HTML 파일
- `styles.css`: 스타일 정의
- `script.js`: 자바스크립트 기능
- `server.js`: 로컬 개발용 간단한 서버

## 사용법

웹 브라우저에서 `index.html` 파일을 열어 사이트를 확인할 수 있습니다.

## Vercel 배포 방법

이 프로젝트는 Vercel을 통해 쉽게 배포할 수 있습니다. 자세한 배포 방법은 [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md) 파일을 참조하세요.

## 커스터마이징

### 프로필 이미지 추가

현재는 이미지 플레이스홀더가 있는 위치에 본인의 프로필 이미지를 추가할 수 있습니다. 
이미지를 추가하려면 `index.html` 파일의 해당 부분을 수정하세요:

```html
<div class="profile-image">
    <!-- 프로필 이미지는 나중에 추가 가능합니다 -->
    <div class="image-placeholder">
        <span>프로필<br>이미지</span>
    </div>
</div>
```

이 부분을 다음과 같이 변경할 수 있습니다:

```html
<div class="profile-image">
    <img src="images/profile.jpg" alt="다다 프로필 이미지" />
</div>
```

### 내용 수정

원하는 대로 `index.html` 파일의 내용을 수정하여 개인 정보, 전문분야, 연락처 등을 변경할 수 있습니다.

### 색상 변경

`styles.css` 파일의 `:root` 부분에서 색상 변수를 수정하여 전체 웹사이트의 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #8BC34A;      /* 연한 그린 색상 */
    --primary-light: #DCEDC8;      /* 더 연한 그린 */
    --primary-dark: #558B2F;       /* 더 진한 그린 */
    /* 다른 색상 변수들... */
}
``` 