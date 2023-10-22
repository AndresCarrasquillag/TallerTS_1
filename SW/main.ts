import { seriesData } from './data.js';
import { Serie } from './serie.js';


let seriesTbody = document.getElementById("seriesTabla")!;
let promedioTemps = document.getElementById("promedio")!;

promedioTemps.innerHTML = darPromedioTemp(seriesData)


function llenarTabla(series: Serie[]) {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td>${serie.titulo}</td>
                                <td>${serie.plataforma}</td>
                                <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
        console.log(serie.id);
    });
}

function darPromedioTemp(series: Serie[]) {

    let temporadasTotal: number = 0;
    series.forEach(serie => temporadasTotal = temporadasTotal + serie.temporadas);
    return `${temporadasTotal/series.length}`;
}

llenarTabla(seriesData);
