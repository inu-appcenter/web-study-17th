import {
  isYesterday,
  format,
  isToday,
  differenceInCalendarDays,
  parseISO,
} from "date-fns";
import { ko } from "date-fns/locale";

interface ChatListItem {
  id: string;
  title: string;
  updatedAt: string;
}

export function groupChatsByDate(data: ChatListItem[]) {
  const today = new Date();
  const groups: Record<string, ChatListItem[]> = {};

  data.forEach((chat) => {
    const date = parseISO(chat.updatedAt);
    let key: string;

    if (isToday(date)) {
      key = "오늘";
    } else if (isYesterday(date)) {
      key = "어제";
    } else {
      const daysDiff = differenceInCalendarDays(today, date);
      if (daysDiff <= 7) {
        key = "지난 7일";
      } else if (daysDiff <= 30) {
        key = "지난 30일";
      } else if (date.getFullYear() === today.getFullYear()) {
        key = format(date, "M월", { locale: ko });
      } else {
        key = format(date, "yyyy년", { locale: ko });
      }
    }

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(chat);
  });

  return groups;
}

// parseISO, isToday, isThisWeek, format: date-fns 사용한 라이브러러리들
