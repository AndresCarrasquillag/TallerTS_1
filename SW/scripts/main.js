import { seriesData } from './data.js';
var seriesTbody = document.getElementById("seriesTabla");
var promedioTemps = document.getElementById("promedio");
promedioTemps.innerHTML = darPromedioTemp(seriesData);
function llenarTabla(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td>").concat(serie.titulo, "</td>\n                                <td>").concat(serie.plataforma, "</td>\n                                <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        console.log(serie.id);
    });
}
function darPromedioTemp(series) {
    var temporadasTotal = 0;
    series.forEach(function (serie) { return temporadasTotal = temporadasTotal + serie.temporadas; });
    return "".concat(temporadasTotal / series.length);
}
llenarTabla(seriesData);
