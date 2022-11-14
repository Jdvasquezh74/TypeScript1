

import { Series } from './series.js';

import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAverageElm: HTMLElement = document.getElementById("seasons-average")!;

renderSeriesInTable(dataSeries);

seasonsAverageElm.innerHTML = `Seasons average: ${getSeasonsAverage(dataSeries)}`

function renderSeriesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((indSeries) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td id="TextoNegrilla">${indSeries.position}</td>
                           <td id="TextoAzul">${indSeries.name}</td>
                           <td>${indSeries.channel}</td>
                           <td>${indSeries.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getSeasonsAverage(series: Series[]): number {
  let totalSeries: number = 0;
  let totalSeasons: number = 0;
  series.forEach((indSeries) => totalSeasons = totalSeasons + indSeries.seasons);
  totalSeries = series.length;
  return Math.round(totalSeasons/totalSeries);
}