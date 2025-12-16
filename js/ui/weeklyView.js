import { HABITS } from "../data/habits.js";
import { saveData } from "../data/storage.js";

/**
 * Renderiza la vista semanal
 * @param {string[]} weekDates - Array de fechas YYYY-MM-DD
 * @param {object} data - Datos guardados
 */
export function renderWeeklyView(weekDates, data) {
  const tbody = document.getElementById("habitTable");
  tbody.innerHTML = "";

  HABITS.forEach(habit => {
    const tr = document.createElement("tr");

    // Nombre del hábito
    const nameTd = document.createElement("td");
    nameTd.textContent = habit.name;
    tr.appendChild(nameTd);

    // Checkboxes por día
    weekDates.forEach(date => {
      const td = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      checkbox.checked = data[date]?.[habit.id] || false;

      checkbox.addEventListener("change", () => {
        if (!data[date]) data[date] = {};
        data[date][habit.id] = checkbox.checked;
        saveData(data);
      });

      td.appendChild(checkbox);
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}
