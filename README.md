# 🤟🏻 수어지교(手語之交)

수어지교(手語之交)는 PC 혹은 모바일 디바이스의 카메라를 이용하여 화면에 보이는  손 모양을 인식하여 정확한 수어를 연습하고, 더 나아가 소통을 할 수 있는 애플리케이션입니다.


<img src="https://user-images.githubusercontent.com/94096095/180269508-7897efd0-659d-440e-875a-e34d25be4912.png"  width="700"/>  


### 

<br />
<br />

## :link: 배포



- [Netlify을 이용한 애플리케이션 배포](https://connectwithhand.online/) (web 링크)
- [Expo를 이용한 apk 빌드](https://drive.google.com/file/d/1qsIv2ZQkl73jXKKkr8CdEqCnm6TbQqFJ/view?usp=sharing) (다운로드 링크)




<br />
<br />

## 🛹 개발 동기


평소 알게 모르게 실생활에서 머신 러닝을 많이 사용하고 있어 이번 개인 프로젝트에 직접 사용해 보고 싶어 찾아보던 와중에 손가락의 특정 포인트를 인식 및 추적하는 Handpose-detection 모델이 있다는 것을 알게 되었습니다.

학창 시절에 수화 동아리에 있으면서 배웠던 한글 지문자를 기억하고 있어서, 해당 모델을 이용하여 화면에 보이는 손의 모양이 지문자와 어느 정도 일치하는지를 확인하여 정확한 지문자의 손 모양을 학습하는 서비스를 만들고 싶었습니다. 더 나아가 다른 사람의 제스처를 실시간으로 인식 후 텍스트로 번역이 가능하다면 실시간으로 소통이 가능하지 않을까하는 작은 뜻을 품고 프로젝트를 시작하였습니다.

<br />
<br />

## 🗓️개발 기간



- Week 1 (2022.06.27 ~ 2022.07.03)
    - 아이디어 수집 및 기획
    - 기술 스택 검증 및 정리
    - 디자인 Mockup 작업
- Week 2-3 (2022.07.04 ~ 2022.07.17)
    - tensorflow.js 및 handpose 모델 적용
    - fingerpose 라이브러리 수정 및 개선
    - 마무리 (버그 수정, 테스트 코드 작성 등)

<br />
<br />

## ****🔨 기술 스택****



- FrontEnd
    - React
    - React Native
    - Expo
    - Webview

    
<br />
<br />


## 🔌 세팅 방법



- FrondEnd

```jsx
$ git clone https://github.com/ConnectWithHands/ConnectWithHands-client.git
$ npm install
$ npm start
```

<br />
<br />

## 🖥️ 주요 기능




https://user-images.githubusercontent.com/94096095/182570918-1a8ce5c9-a8df-4ade-b255-4c36f67db84e.mp4




- **한글 자음/모음 순차 연습하기**
    - 한글 자음 (총 19개 - 단자음 14개, + 쌍자음 5개)
    - 한글 모음 (총 17개 - 단모음 10개 + 이중모음 7개
    - 웹캠에 손 모양을 만들면 현재의 자음 및 모음과 일치하는지 결과 및 정확도 확인
    - 이전 및 다음 버튼을 이용하여 자음, 모음을 연습할 수 있음
    




        
- **한글 자음/모음 테스트하기**
    - 자음 및 모음에서 랜덤으로 5개를 선정하여 테스트 진행
    - 손의 모양이 테스트 글자와 70% 이상 일치하면 다음 글자로 이동
    - 이미지 박스를 클릭하면 숨겨진 힌트를 얻을 수 있음
    - 5개의 테스트가 종료되면 최종 결과를 확인
    

        
        
- **한글 자음/모음 자율 연습하기**
    - 자음 및 모음을 선택하여 자율적으로 연습
    - 현재 웹캠의 손 모양과 일치하는 글자를 반환
        

        
- **수어 실시간 인식하기**
    - 화면의 손 모양을 인식하여 가장 가까운 텍스트를 출력
    - 특정 제스처를 취하면 텍스트를 삭제하거나 음성으로 변환하여 출력
        

    
- **나만의 제스처 만들기**
    - kNN Classifier을 이용하여 이미지 학습 진행
    - 원하는 단어를 추가한 후 여러 번 학습 버튼을 클릭 (반복)
    - 현재 웹캠의 화면 기준으로 학습한 단어와 정확도를 확인
    - 정확도를 높이도록 여러 번 학습 진행
    - 학습한 데이터를 json으로 파일 저장 및 업로드를 통해 기존 학습한 데이터를 불러오기
    

        

<br />
<br />


## 🚀 Webview 적용

기존 배포된 웹 프로젝트를 React Native Webview를 이용하여 App에서 보여주고 있습니다.
관련하여 웹 프로젝트 repository은 아래와 같습니다. 

[수어지교 웹 repository ] (https://github.com/ConnectWithHands/ConnectWithHands-client)


