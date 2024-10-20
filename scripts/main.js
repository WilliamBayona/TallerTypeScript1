import { series } from '../data/data.js';
function renderSeriesTable(series) {
    const tableBody = document.getElementById('seriesTable').getElementsByTagName('tbody')[0];
    // Limpiar el cuerpo de la tabla antes de llenarlo
    tableBody.innerHTML = '';
    // Llenar la tabla con las series
    series.forEach(serie => {
        const row = tableBody.insertRow();
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    });
    // Calcular el promedio de temporadas
    const averageSeasons = calculateAverageSeasons(series);
    // Mostrar el promedio de temporadas en el elemento correspondiente
    const averageSeasonsElement = document.getElementById('Season-Average');
    averageSeasonsElement.innerHTML = `<strong>Season Average: ${averageSeasons.toFixed(2)}</strong>`;
}
function calculateAverageSeasons(series) {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}
document.addEventListener('DOMContentLoaded', () => {
    renderSeriesTable(series);
});
