import dayjs from "dayjs"

export function formatDate(date) {
  return dayjs(date).format("MM月DD日")
}

export function getDiffDate(start, end) {
  return dayjs(end).diff(start, "day")
}