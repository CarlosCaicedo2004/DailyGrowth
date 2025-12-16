import { HABITS } from "../data/habits.js";

/**
 * Calcula el progreso de un día
 */
function calculateDayProgress(date, data) {
  let total = 0;
  let done = 0;

  HABITS.forEach(habit => {
    total += habit.weight;
    if (data[date]?.[habit.id]) {
      done += habit.weight;
    }
  });

  return total ? Math.round((done / total) * 100) : 0;
}

/**
 * Renderiza el calendario mensual
 * @param {Date} monthDate
 * @param {Object} data
 * @param {Function} onDayClick
 */
export function renderCalendar(monthDate, data, onDayClick) {
  const grid = document.getElementById("calendarGrid");
  const label = document.getElementById("monthLabel");

  grid.innerHTML = "";

  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();

  label.textContent = monthDate.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric"
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const iso = date.toISOString().split("T")[0];
    const progress = calculateDayProgress(iso, data);

    const cell = document.createElement("div");
    cell.className = "calendar-day";
    cell.textContent = day;

    // Colores por progreso
    if (progress > 0) {
      cell.dataset.progress = progress;
    }

    cell.addEventListener("click", () => onDayClick(date));

    grid.appendChild(cell);
  }
}
