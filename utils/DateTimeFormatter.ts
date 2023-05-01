export const dateBefore = (params: string) => {
  const date = new Date(params)
  let diff = (date.getTime() - new Date().getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);
  // if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
  //   return `${date.getFullYear()}년 ${
  //     date.getMonth() + 1
  //   }월 ${date.getDate()}일`;

  return (
    (day_diff === 0 &&
      ((diff < 60 && "곧 종료됨") ||
        (diff < 120 && "1분 남음") ||
        (diff < 3600 && Math.floor(diff / 60) + "분 남음") ||
        (diff < 7200 && "1시간 남음") ||
        (diff < 86400 && Math.floor(diff / 3600) + "시간 남음"))) ||
    (day_diff === 1 && "하루 남음") ||
    (day_diff < 7 && day_diff + "일 남음") ||
    // (day_diff < 31 && Math.ceil(day_diff / 7) + "주 남음")
    Math.ceil(day_diff / 7) + "주 남음"
  );
}
