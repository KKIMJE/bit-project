# 🍻 야술먹자 

![image](https://user-images.githubusercontent.com/50407047/96961838-74681300-1540-11eb-9c85-bf8dceee3bfb.png)


전국 주류 및 주점 검색부터 술모임까지 한 번에!  
애주가들을 위한 상세한 주류 정보 및 판매 주점 정보 제공서비스,
술모임서비스, 채팅서비스등을 제공하는 서비스입니다.


## 바로가기

- :notebook: [개요](https://github.com/hayeon17kim/hackathon-project#-view)

- :computer: [주요기능 및 화면](https://github.com/hayeon17kim/hackathon-project#-view)

- 💡 [느낀점](https://github.com/hayeon17kim/hackathon-project#-%EB%8A%90%EB%82%80%EC%A0%90)

- 🌈[노션 링크](https://deadpan-fireplace-ddb.notion.site/Debugger-5574baffadcb4b0ba47de81f5470267a)


## Use Case Diagram
![image](https://user-images.githubusercontent.com/50407047/96969210-17268e80-154d-11eb-860c-95b911c995cf.png)

## :computer: View
### 메인 화면

![image](https://user-images.githubusercontent.com/68311187/96958390-4088ef80-1538-11eb-8ba2-35d5d809320f.png)

![image](https://user-images.githubusercontent.com/68311187/96958175-a9bc3300-1537-11eb-9973-177148fb1be4.png)

- 현재 시스템의 날짜와 시간을 출력합니다.
- 현재 시스템의 시간 정보에 맞게 아스키 아트를 출력합니다.
- 현재 상태메시지를 등록하고 상태 메시지를 출력합니다.
- "`로그인 한 멤버명`님, 총 `완료하지 않은 Todo 개수` 개의 할 일이 남았습니다." 메시지를 출력한다.
- 시스템 날짜에 따른 할 일 정보 목록을 출력한다.
 - 시간 순으로 정렬한다.
 - 할 일 정보: 완료여부(● : 완료, ○ : 미완료), 항목, 제목


### 일주일 통계 화면
- 일주일 간 완료한 Todo 항목의 비율을 계산해 그래프로 출력합니다.
- 일주일 간 많이 한 항목에 해당하는 아스키 아트를 출력합니다.

![image](https://user-images.githubusercontent.com/68311187/96958320-03bcf880-1538-11eb-9351-867d8ba16b25.png)

![image](https://user-images.githubusercontent.com/68311187/96958360-23ecb780-1538-11eb-9fcf-2e55c64ba12c.png)

### 메시지 출력 화면
- 아이디를 정하여 해당 아이디를 가진 사용자에게 메시지를 보낼 수 있습니다.
- 발신자와 제목을 아스키 아트와 함께 출력합니다.
- 커맨드 입력을 통해 메시지의 전송 받은시간,내용 등을 출력합니다.

![image](https://user-images.githubusercontent.com/68311187/96948918-aa49cf00-1521-11eb-8e15-cf5eaab6f65b.png)

![image](https://user-images.githubusercontent.com/68311187/96949020-ec731080-1521-11eb-9c29-083391de54a4.png)



## 💡 느낀점

- 짧은 시간 이내에 원하는 기능을 모두 구현하려다 보니 메서드명과 변수명에 일관성을 지키지 못하였다. 팀 프로젝트이니만큼 서로의 코드를 이해하기 위해서는 직관적인 메서드명과 변수명을 사용하는 것이 중요하다는 것을 느꼈다.
- 첫 프로젝트 때는 원하는 기능이 있어도 처음부터 '이건 안 될 것 같아'라고 시도를 꺼려했다. 그것이 아쉬움으로 남아 이번에는 안 될 것 같은 기능들도 일단 정리를 하고 단계를 나눠 하나하나 구현해보려고 노력해보니 훨씬 많은 것을 얻을 수 있었다. 앞으로의 프로젝트도 이러한 자세로 임해야겠다고 생각했다.
- 프로젝트에 적당한 수준의 문서화는 필요하다. 프로젝트 초반에 원하는 앱의 모습만을 생각했을 때는 막막함이 앞섰다. 그러나 유저 시나리오를 짜고 클래스 구조를 짜면서 유스케이스 단위로 구현해야 할 앱을 대하니 훨씬 빠르게 작업할 수 있었다. 뿐만 아니라 팀원과 소통할 때도 이 문서를 가지고 소통하니 원활하게 할 수 있었다.
