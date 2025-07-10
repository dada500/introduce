# Vercel 배포 가이드

이 가이드는 이 웹사이트를 Vercel에 배포하는 방법을 설명합니다.

## 사전 준비사항

1. [GitHub](https://github.com) 계정
2. [Vercel](https://vercel.com) 계정

## 배포 방법

### 1. GitHub에 프로젝트 업로드하기

1. [GitHub](https://github.com)에 로그인하세요.
2. 새 리포지토리를 생성하세요.
3. 현재 프로젝트 파일을 해당 리포지토리에 업로드하세요.
   - GitHub Desktop 앱을 사용하거나
   - GitHub 웹사이트에서 직접 파일을 업로드할 수 있습니다.

### 2. Vercel에 배포하기

1. [Vercel](https://vercel.com)에 가입하고 로그인하세요.
2. 대시보드에서 "New Project" 버튼을 클릭하세요.
3. "Import Git Repository" 섹션에서 방금 생성한 GitHub 리포지토리를 선택하세요.
4. 프로젝트 설정을 검토하세요:
   - Framework Preset: 기본값으로 두거나 "Other"를 선택하세요.
   - Build and Output Settings: 기본값을 사용하세요.
5. "Deploy" 버튼을 클릭하세요.
6. 배포가 완료되면 Vercel에서 배포된 URL을 제공합니다.

### 3. 도메인 설정 (선택사항)

1. 프로젝트 대시보드에서 "Domains" 섹션으로 이동하세요.
2. 커스텀 도메인을 추가하거나 Vercel에서 제공하는 도메인을 사용하세요.

## 배포 후 업데이트하기

GitHub 리포지토리에 새 변경사항을 푸시하면 Vercel이 자동으로 사이트를 다시 배포합니다.

## 문제 해결

문제가 발생하면 Vercel의 배포 로그를 확인하여 오류를 파악하세요. 