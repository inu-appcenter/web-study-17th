export interface NewNote {
    isNewNote: boolean; // 상태 값의 타입
    setIsNewNote: React.Dispatch<React.SetStateAction<boolean>>; // 상태 변경 함수의 타입
}

