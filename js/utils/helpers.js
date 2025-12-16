// Capitaliza texto (ej: marzo → Marzo)
export function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Calcula porcentaje seguro
export function percentage(part, total) {
  if (total === 0) return 0;
  return Math.round((part / total) * 100);
}
