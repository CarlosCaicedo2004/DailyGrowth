import { loadData } from "./data/storage.js";
import { getMonday, getWeekDates } from "./utils/dates.js";
import { renderWeeklyView } from "./ui/weeklyView.js";
import { updateWeeklyProgress } from "./ui/progressCircle.js";
import { renderCalendar } from "./ui/calendarView.js";

// ===============================
// ESTADO GLOBAL
// ===============================
let data = loadData();
let currentMonday = getMonday(new Date());
let currentMonth = new Date();

// ===============================
// RENDER PRINCIPAL
// ===============================
function render() {
  const weekDates = getWeekDates(currentMonday);

  renderWeeklyView(weekDates, data);
  updateWeeklyProgress(weekDates, data);

  renderCalendar(currentMonth, data, (date) => {
    currentMonday = getMonday(date);
    render();
  });

  updateWeekLabel(currentMonday);
}

// ===============================
// UI HELPERS
// ===============================
function updateWeekLabel(monday) {
  const label = document.getElementById("weekLabel");
  const end = new Date(monday);
  end.setDate(monday.getDate() + 6);

  label.textContent = `${monday.toLocaleDateString("es-ES")} - ${end.toLocaleDateString("es-ES")}`;
}

// ===============================
// EVENTOS
// ===============================
document.getElementById("prevWeek").addEventListener("click", () => {
  currentMonday.setDate(currentMonday.getDate() - 7);
  render();
});

document.getElementById("nextWeek").addEventListener("click", () => {
  currentMonday.setDate(currentMonday.getDate() + 7);
  render();
});

document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonth.setMonth(currentMonth.getMonth() - 1);
  render();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonth.setMonth(currentMonth.getMonth() + 1);
  render();
});

// ===============================
// INIT
// ===============================
render();
