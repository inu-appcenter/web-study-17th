// import { GoogleGenAI } from "@google/genai";

// src/services/geminiService.ts
export type ChatTurn = {
  role: "system" | "user" | "assistant";
  text: string;
};

const apiKey = import.meta.env.VITE_API_KEY;
if (!apiKey) {
  throw new Error("VITE_API_KEY가 설정되지 않았습니다!");
}

export async function generateMultiTurn(history: ChatTurn[]): Promise<string> {
  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/` +
    `gemini-2.0-flash:generateContent?key=${apiKey}`;

  // 1) history 를 하나의 “대화 프롬프트” 텍스트로 합칩니다.
  const prompt = history
    .map((turn) =>
      turn.role === "user" ? `User: ${turn.text}` : `Assistant: ${turn.text}`
    )
    .join("\n");

  // 2) contents 배열로 포맷
  const body = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
    // (선택) 후보 개수나 maxOutputTokens 도 추가 설정할 수 있습니다.
    // candidateCount: 1,
    // maxOutputTokens: 256
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API 오류: ${errText}`);
  }

  const json = await res.json();

  return json.candidates?.[0]?.content?.parts?.[0]?.text ?? "“응답이 없습니다”";
}

// export async function generateMultiTurn(history : ChatTurn[]): Promise<string> {
//     const url ='뭐적음여기에?';
//     const contents = history.map(turn => ({
//         parts:[{ text:`${turn.role === "assistant"?"Assistant:": turn.role === "user"? "User:" : "System:"} ${turn.text}`]
//     }));

//     const res = await fetch(url, {
//         method:"POST",
//         headers:{"Content-type":"application/json"},
//         body : JSON.stringify({ contents}),

//     });
//     if (!res.ok) throw new Error(await res.text());
//     const json =await res.json();
//     return json.candidates[0].Content.parts[0].text;
// }

// export async function generateFromGemini(prompt: string) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "prompt",
//   });
//   return response.text;
// }
