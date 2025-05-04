//전체에서 공통적으로 사용됨.
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import InputUI from '../components/InputUI';
import {NewNote} from '../interface';

const Layout = ({ isNewNote, setIsNewNote } : NewNote) => {
  return (
    <div>
      <Header isNewNote={isNewNote} setIsNewNote={setIsNewNote} />
      <main>
        <Outlet /> {/* Chat 페이지가 렌더링 */}
      </main>
      <InputUI isNewNote={isNewNote} /> {/* 입력 UI는 isNewNote 상태를 받음 */}
    </div>
  );
};

export default Layout;
