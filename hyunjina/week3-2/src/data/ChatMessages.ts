export interface Message {
  id: string;
  sender: "user" | "gpt";
  content: string;
  timestamp: string;
}

export const chatMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1-1",
      sender: "user",
      content: "GPT 클론 코딩 어떻게 시작하나요?",
      timestamp: "2025-05-06 10:00",
    },
    {
      id: "1-2",
      sender: "gpt",
      content: "React, TypeScript, styled-components로 시작해보세요!",
      timestamp: "2025-05-06 10:01",
    },
    {
      id: "1-3",
      sender: "user",
      content: "별론데",
      timestamp: "2025-05-06 10:02",
    },
    {
      id: "1-4",
      sender: "gpt",
      content: "알아서 하세요 그럼.",
      timestamp: "2025-05-06 10:03",
    },
    {
      id: "1-5",
      sender: "user",
      content: "미안해",
      timestamp: "2025-05-06 10:03",
    },
    {
      id: "1-6",
      sender: "gpt",
      content: "잘하자",
      timestamp: "2025-05-06 10:03",
    },
    {
      id: "1-7",
      sender: "user",
      content: "뿡",
      timestamp: "2025-05-06 10:04",
    },
    {
      id: "1-8",
      sender: "gpt",
      content: "뿡뿡.",
      timestamp: "2025-05-06 10:04",
    },
  ],
  "2": [
    {
      id: "2-1",
      sender: "user",
      content: "GitHub에서 파일을 VS Code로 여는 법 알려줘",
      timestamp: "2025-05-05 11:00",
    },
    {
      id: "2-2",
      sender: "gpt",
      content: "리포지토리 페이지에서 Code → Open with VS Code 클릭하세요.",
      timestamp: "2025-05-05 11:01",
    },
  ],
  "3": [
    {
      id: "3-1",
      sender: "user",
      content: "디스코드 서버 부스트 실수로 눌렀는데 괜찮을까?",
      timestamp: "2025-05-04 12:00",
    },
    {
      id: "3-2",
      sender: "gpt",
      content: "앱을 종료했다면 실제 결제는 안 됐을 가능성이 높아요.",
      timestamp: "2025-05-04 12:01",
    },
  ],
  "4": [
    {
      id: "4-1",
      sender: "user",
      content: "이더넷에서 오류제어 방식이 뭐야?",
      timestamp: "2025-04-25 13:00",
    },
    {
      id: "4-2",
      sender: "gpt",
      content: "패리티 비트와 CRC 방식이 주로 사용돼요.",
      timestamp: "2025-04-25 13:01",
    },
  ],
  "5": [
    {
      id: "5-1",
      sender: "user",
      content: "VS Code에서 터미널 여는 단축키가 뭐지?",
      timestamp: "2025-04-18 14:00",
    },
    {
      id: "5-2",
      sender: "gpt",
      content: "Windows에선 Ctrl + `, Mac에선 Cmd + ` 입니다.",
      timestamp: "2025-04-18 14:01",
    },
  ],
  "6": [
    {
      id: "6-1",
      sender: "user",
      content: "템플릿 리터럴과 문자열 연결의 차이는?",
      timestamp: "2025-04-04 15:00",
    },
    {
      id: "6-2",
      sender: "gpt",
      content: "템플릿 리터럴은 `${변수}`처럼 간편하게 표현할 수 있어요.",
      timestamp: "2025-04-04 15:01",
    },
  ],
  "7": [
    {
      id: "7-1",
      sender: "user",
      content: "npm audit에서 보안 경고 떴는데 어떻게 해?",
      timestamp: "2025-01-06 16:00",
    },
    {
      id: "7-2",
      sender: "gpt",
      content: "`npm audit fix` 명령어로 자동 수정할 수 있어요.",
      timestamp: "2025-01-06 16:01",
    },
  ],
  "8": [
    {
      id: "8-1",
      sender: "user",
      content: "연극 수업 시험 준비 어떻게 해야 할까?",
      timestamp: "2025-01-03 17:00",
    },
    {
      id: "8-2",
      sender: "gpt",
      content: "주요 작품과 작가 정리, 공연 특징 중심으로 준비하세요.",
      timestamp: "2025-01-03 17:01",
    },
  ],
  "9": [
    {
      id: "9-1",
      sender: "user",
      content: "신호와 시스템 과목 개요 좀 알려줘",
      timestamp: "2024-12-12 18:00",
    },
    {
      id: "9-2",
      sender: "gpt",
      content: "연속/이산 신호, 시스템 특성, LTI 등이 포함돼요.",
      timestamp: "2024-12-12 18:01",
    },
    {
      id: "9-3",
      sender: "user",
      content: "너무 어려운 거 아니야?;;",
      timestamp: "2024-12-12 18:01",
    },
    {
      id: "9-4",
      sender: "gpt",
      content: "재수강만 하지 마세요.",
      timestamp: "2024-12-12 18:02",
    },
  ],
  "10": [
    {
      id: "10-1",
      sender: "user",
      content: "Oracle DB 접속 안 될 때 뭐 확인해야 해?",
      timestamp: "2024-12-04 19:00",
    },
    {
      id: "10-2",
      sender: "gpt",
      content: "호스트, 포트, SID 또는 서비스 이름 확인이 우선입니다.",
      timestamp: "2024-12-04 19:01",
    },
  ],
  "11": [
    {
      id: "1-1",
      sender: "user",
      content: "GPT 클론 코딩 어떻게 시작하나요?",
      timestamp: "2025-05-06 10:00",
    },
    {
      id: "1-2",
      sender: "gpt",
      content: "React, TypeScript, styled-components로 시작해보세요!",
      timestamp: "2025-05-06 10:01",
    },
    {
      id: "1-3",
      sender: "user",
      content: "별론데",
      timestamp: "2025-05-06 10:02",
    },
    {
      id: "1-4",
      sender: "gpt",
      content: "알아서 하세요 그럼.",
      timestamp: "2025-05-06 10:03",
    },
    {
      id: "1-5",
      sender: "user",
      content: "미안해",
      timestamp: "2025-05-06 10:03",
    },
    {
      id: "1-6",
      sender: "gpt",
      content: "잘하자",
      timestamp: "2025-05-06 10:03",
    },
    {
      id: "1-7",
      sender: "user",
      content: "뿡",
      timestamp: "2025-05-06 10:04",
    },
    {
      id: "1-8",
      sender: "gpt",
      content: "뿡뿡.",
      timestamp: "2025-05-06 10:04",
    },
  ],
  "12": [
    {
      id: "2-1",
      sender: "user",
      content: "GitHub에서 파일을 VS Code로 여는 법 알려줘",
      timestamp: "2025-05-05 11:00",
    },
    {
      id: "2-2",
      sender: "gpt",
      content: "리포지토리 페이지에서 Code → Open with VS Code 클릭하세요.",
      timestamp: "2025-05-05 11:01",
    },
  ],
  "13": [
    {
      id: "3-1",
      sender: "user",
      content: "디스코드 서버 부스트 실수로 눌렀는데 괜찮을까?",
      timestamp: "2025-05-04 12:00",
    },
    {
      id: "3-2",
      sender: "gpt",
      content: "앱을 종료했다면 실제 결제는 안 됐을 가능성이 높아요.",
      timestamp: "2025-05-04 12:01",
    },
  ],
  "14": [
    {
      id: "4-1",
      sender: "user",
      content: "이더넷에서 오류제어 방식이 뭐야?",
      timestamp: "2025-04-25 13:00",
    },
    {
      id: "4-2",
      sender: "gpt",
      content: "패리티 비트와 CRC 방식이 주로 사용돼요.",
      timestamp: "2025-04-25 13:01",
    },
  ],
  "15": [
    {
      id: "5-1",
      sender: "user",
      content: "VS Code에서 터미널 여는 단축키가 뭐지?",
      timestamp: "2025-04-18 14:00",
    },
    {
      id: "5-2",
      sender: "gpt",
      content: "Windows에선 Ctrl + `, Mac에선 Cmd + ` 입니다.",
      timestamp: "2025-04-18 14:01",
    },
  ],
  "16": [
    {
      id: "6-1",
      sender: "user",
      content: "템플릿 리터럴과 문자열 연결의 차이는?",
      timestamp: "2025-04-04 15:00",
    },
    {
      id: "6-2",
      sender: "gpt",
      content: "템플릿 리터럴은 `${변수}`처럼 간편하게 표현할 수 있어요.",
      timestamp: "2025-04-04 15:01",
    },
  ],
  "17": [
    {
      id: "7-1",
      sender: "user",
      content: "npm audit에서 보안 경고 떴는데 어떻게 해?",
      timestamp: "2025-01-06 16:00",
    },
    {
      id: "7-2",
      sender: "gpt",
      content: "`npm audit fix` 명령어로 자동 수정할 수 있어요.",
      timestamp: "2025-01-06 16:01",
    },
  ],
  "18": [
    {
      id: "8-1",
      sender: "user",
      content: "연극 수업 시험 준비 어떻게 해야 할까?",
      timestamp: "2025-01-03 17:00",
    },
    {
      id: "8-2",
      sender: "gpt",
      content: "주요 작품과 작가 정리, 공연 특징 중심으로 준비하세요.",
      timestamp: "2025-01-03 17:01",
    },
  ],
  "19": [
    {
      id: "9-1",
      sender: "user",
      content: "신호와 시스템 과목 개요 좀 알려줘",
      timestamp: "2024-12-12 18:00",
    },
    {
      id: "9-2",
      sender: "gpt",
      content: "연속/이산 신호, 시스템 특성, LTI 등이 포함돼요.",
      timestamp: "2024-12-12 18:01",
    },
    {
      id: "9-3",
      sender: "user",
      content: "너무 어려운 거 아니야?;;",
      timestamp: "2024-12-12 18:01",
    },
    {
      id: "9-4",
      sender: "gpt",
      content: "재수강만 하지 마세요.",
      timestamp: "2024-12-12 18:02",
    },
  ],
  "20": [
    {
      id: "10-1",
      sender: "user",
      content: "Oracle DB 접속 안 될 때 뭐 확인해야 해?",
      timestamp: "2024-12-04 19:00",
    },
    {
      id: "10-2",
      sender: "gpt",
      content: "호스트, 포트, SID 또는 서비스 이름 확인이 우선입니다.",
      timestamp: "2024-12-04 19:01",
    },
  ],
};
