// Header.tsx
import {NewNote} from '../interface';
import IconButton from './IconButtons';
import { Info, Menu} from "lucide-react";

const Header = ({ isNewNote, setIsNewNote } : NewNote) => {

    return (
      <header>
        <button onClick={() => setIsNewNote(true)}>New Note</button>
        <button onClick={() => setIsNewNote(false)}>Open Note</button>

        <div style={{ padding: "2rem" }}>
      <IconButton icon={<Info size={16} />} label="정보" tooltip="이 버튼은 정보를 보여줍니다." />
      <IconButton icon={<Info size={16} />} tooltip="아이콘 전용 버튼입니다."/>
      <IconButton icon={<Menu />} tooltip="검색" borderless />




    </div>
      </header>

      
    );
  };
  
  export default Header;
  