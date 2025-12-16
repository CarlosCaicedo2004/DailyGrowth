const STORAGE_KEY = "habit_tracker_data";

export function loadData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
