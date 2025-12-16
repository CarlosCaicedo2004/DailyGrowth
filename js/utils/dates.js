// Devuelve el lunes de la semana de una fecha
export function getMonday(date = new Date()) {
  const d = new Date(date);
  const day = d.getDay() || 7; // domingo = 7
  if (day !== 1) {
    d.setDate(d.getDate() - (day - 1));
  }
  d.setHours(0, 0, 0, 0);
  return d;
}

// Devuelve fecha en formato YYYY-MM-DD
export function formatDate(date) {
  return date.toISOString().split("T")[0];
}

// Devuelve las 7 fechas (lunes a domingo) de una semana
export function getWeekDates(monday) {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return formatDate(d);
  });
}
