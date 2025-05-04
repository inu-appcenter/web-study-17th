// Header.tsx
import {NewNote} from '../interface';

const Header = ({ isNewNote, setIsNewNote } : NewNote) => {
    return (
      <header>
        <button onClick={() => setIsNewNote(true)}>New Note</button>
        <button onClick={() => setIsNewNote(false)}>Open Note</button>
      </header>
    );
  };
  
  export default Header;
  