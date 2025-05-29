import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { breakpoints } from "../styles/theme";

const Layout = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

export interface ChatListItem {
  id: string;
  title: string;
  updatedAt: string;
}

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((v) => !v);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoints.tablet})`);

    // 초기 동기화
    setIsSidebarOpen(!mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsSidebarOpen(!e.matches);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const [chatList, setChatList] = useState<ChatListItem[]>(() => {
    const raw = localStorage.getItem("chat_list");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("chat_list", JSON.stringify(chatList));
  }, [chatList]);

  return (
    <Layout>
      {isSidebarOpen && (
        <Sidebar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          chatList={chatList}
          setChatList={setChatList}
        />
      )}
      <Outlet
        context={{ toggleSidebar, isSidebarOpen, chatList, setChatList }}
      />
    </Layout>
  );
}
