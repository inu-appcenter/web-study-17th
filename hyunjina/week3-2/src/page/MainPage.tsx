import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import TestIcon from "./TestIcon";

import { useState } from "react";
import { Outlet } from "react-router-dom";

const PageLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #343541;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export default function MainPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <PageLayout>
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <MainContent>
        <Outlet context={{ toggleSidebar }} />
      </MainContent>
    </PageLayout>
  );
}
