import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var seasonsAverageElm = document.getElementById("seasons-average");
renderSeriesInTable(dataSeries);
seasonsAverageElm.innerHTML = "Seasons average: ".concat(getSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (indSeries) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td id=\"TextoNegrilla\">".concat(indSeries.position, "</td>\n                           <td id=\"TextoAzul\">").concat(indSeries.name, "</td>\n                           <td>").concat(indSeries.channel, "</td>\n                           <td>").concat(indSeries.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeries = 0;
    var totalSeasons = 0;
    series.forEach(function (indSeries) { return totalSeasons = totalSeasons + indSeries.seasons; });
    totalSeries = series.length;
    return Math.round(totalSeasons / totalSeries);
}
