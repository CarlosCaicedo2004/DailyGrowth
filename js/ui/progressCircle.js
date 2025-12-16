import { HABITS } from "../data/habits.js";

/**
 * Actualiza el progreso semanal
 * @param {string[]} weekDates
 * @param {object} data
 */
export function updateWeeklyProgress(weekDates, data) {
  let total = 0;
  let completed = 0;

  weekDates.forEach(date => {
    HABITS.forEach(habit => {
      total += habit.weight;
      if (data[date]?.[habit.id]) {
        completed += habit.weight;
      }
    });
  });

  const percent = total ? Math.round((completed / total) * 100) : 0;

  const circle = document.getElementById("progressCircle");
  circle.textContent = `${percent}%`;
  circle.style.background =
    `conic-gradient(#4f46e5 ${percent * 3.6}deg, #e5e7eb 0deg)`;
}
