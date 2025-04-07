import { series } from "./data.js";

const tableBody = document.querySelector("tbody");
const detailContainer = document.getElementById("serie-detail");

let totalSeasons = 0;

series.forEach((serie) => {
  totalSeasons += serie.seasons;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${serie.id}</td>
    <td class="text-primary" style="cursor:pointer;">${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  row.addEventListener("click", () => showDetails(serie));
  tableBody.appendChild(row);
});

const avgSeasons = (totalSeasons / series.length).toFixed(2);
const avgRow = document.createElement("tr");
avgRow.innerHTML = `
  <td colspan="4"><strong>Promedio de temporadas: ${avgSeasons}</strong></td>
`;
tableBody.appendChild(avgRow);

function showDetails(serie) {
  detailContainer.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <p class="card-text"><small class="text-muted">Canal: ${serie.channel} | Temporadas: ${serie.seasons}</small></p>
      </div>
    </div>
  `;
}
