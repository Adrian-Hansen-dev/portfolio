export function formatDateGerman(isoDate: string) {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Monate sind 0-basiert
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
