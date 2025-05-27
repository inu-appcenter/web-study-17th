//src / components / AppLayout.tsx;
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((v) => !v);

  return (
    <Layout>
      {isSidebarOpen && (
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      )}
      <Outlet context={{ toggleSidebar, isSidebarOpen }} />
    </Layout>
  );
}

// import styled from "styled-components";
// import Sidebar from "./Sidebar/Sidebar";
// import { useState } from "react";

// import { chatMessages } from "../data/ChatMessages";

// import type { Message } from "../data/ChatMessages";
// import { Outlet } from "react-router-dom";

// --------------------------------------------------------------

// const Layout = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100%;

//   background-color: transparent;
// `;

// export default function AppLayout() {
//   const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

//   const selectedMessages: Message[] =
//     selectedChatId && chatMessages[selectedChatId]
//       ? chatMessages[selectedChatId]
//       : [];

//   return (
//     <Layout>
//       {isSidebarOpen && (
//         <Sidebar
//           onSelectChat={setSelectedChatId}
//           toggleSidebar={toggleSidebar}
//           isSidebarOpen={isSidebarOpen}
//         />
//       )}
//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <Outlet
//           context={{
//             selectedChatId,
//             messages: selectedMessages,
//             toggleSidebar,
//             isSidebarOpen,
//           }}
//         />
//       </div>

//       {/* <MainArea messages={selectedMessages} toggleSidebar={toggleSidebar} /> */}
//     </Layout>
//   );
// }
