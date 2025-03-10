## 개요

https://github.com/user-attachments/assets/7cc47b14-bad6-4995-88c5-cd915bd48e72

- 데이터 기반 건축·도시 컨설팅사와 산학협력으로 진행된 캡스톤 프로젝트입니다. (2024-1 컴퓨터공학과 Capstone디자인)
- 도시 입지 분석을 위해서, 통행량, 접근성과 같은 도로 데이터를 지도 위에 표시할 수 있고 데이터 통계를 파이 차트 형태로 제공하는 서비스입니다.

## 기능 소개

- 상단 검색 창에 주소를 입력할 시 해당 주소를 중심으로 화면 이동을 이동합니다.
- Data Select와 Drawing Tool을 통해서 요청할 도로 데이터 종류, 반경을 설정할 수 있습니다.
  - 드로잉 툴은 지도 API의 도형 오버레이와 이벤트 핸들링을 통한 자체 구현 도구입니다.
- 서버에게 받은 도로 데이터를 GeoJSON 형태로 가공합니다.
- 도로 데이터는 Store에 저장되어 전역적으로 공유됩니다.
  - Flux 패턴을 바르게 도입하기 위해 Zustand를 사용했습니다.
- GeoJSON을 토대로 네이버 지도 API를 통해 지도에 폴리라인을 표시합니다.
- Nivo 그래프 라이브러리를 사용하여 표시된 정보를 토대로 파이 차트 형태의 통계를 제공합니다.

## 기술 스택
React, TypeScript, Zustand, MUI, Nivo

## 유스케이스 다이어그램
![capstone usecase-페이지-2](https://github.com/user-attachments/assets/d63ea12f-87a7-44db-aa3f-04796a07634a)


## 시퀀스 다이어그램
![class_diagram-시퀀스 다이어그램](https://github.com/user-attachments/assets/8a3d07f7-3ae8-47b4-a768-eba53db85532)
