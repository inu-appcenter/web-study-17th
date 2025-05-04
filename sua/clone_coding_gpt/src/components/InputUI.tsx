// InputUI.tsx
import { useState, useEffect } from 'react';

const InputUI = ({ isNewNote }: { isNewNote: boolean }) => {
    const [position, setPosition] = useState<'fixed' | 'absolute'>('fixed');
  
    useEffect(() => {
      setPosition(isNewNote ? 'absolute' : 'fixed');
    }, [isNewNote]);
  
    return (
      <div
        style={{
          position: position,
          bottom: position === 'fixed' ? '0' : 'auto',
          top: position === 'absolute' ? '50%' : 'auto',
          transform: position === 'absolute' ? 'translateY(-50%)' : 'none',
        }}
      >
        <textarea placeholder="Write your note..."></textarea>
        {/* 다른 입력 요소들 */}
      </div>
    );
  };
  
  export default InputUI;
  