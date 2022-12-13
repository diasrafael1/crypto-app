import { format } from "date-fns";
export function formatDate(date: Date, formatString: string) {
  return format(date, formatString);
}
