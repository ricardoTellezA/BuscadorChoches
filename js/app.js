//VARIABLES
const marca = document.querySelector('#marca');
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const max = new Date().getFullYear();
const min = max - 10;


//EVENTOS

document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(autos);
    mostrarFechas();
});




const datosBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    precio: '',
    puertas: '',
    color: '',
    transmision: ''
}
marca.addEventListener('change', e =>{
   datosBusqueda.marca =  e.target.value

   filtrarAutos();

});


year.addEventListener('change',(e) =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAutos();
    
});
minimo.addEventListener('change',(e) =>{
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAutos();
    
});

maximo.addEventListener('change',(e) =>{
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAutos();
    
});

puertas.addEventListener('change',(e) =>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAutos();
    
});


transmision.addEventListener('change',(e) =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
    
});

color.addEventListener('change',(e) =>{
    datosBusqueda.color = e.target.value;
    filtrarAutos();
    
});




function mostrarHTML(autos){

    limpiarHTML();

    autos.forEach(autos => {
        const {marca,modelo,year,precio,puertas,color,transmision} = autos;

        const mostrarAuto = document.createElement('p');
        mostrarAuto.textContent = `
                
        ${marca} - ${modelo} - año: ${year} - puertas: ${puertas} - ${color} - ${transmision} - $ ${precio}

        `;

        resultado.appendChild(mostrarAuto);
    });
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function mostrarFechas(){
    
    for(let i = max; i > min; i-- ){
        const createYear = document.createElement('option');
        createYear.value = i;
        createYear.textContent = i;

        year.appendChild(createYear);
        
        
        
        
    }
}

function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo)
                       .filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransimision).filter(filtrarColor);

    


  if(resultado.length){
    mostrarHTML(resultado);
  }else{
      mostrarError();
  }
}


function mostrarError(){
    limpiarHTML();
    const error = document.createElement('div');
    error.classList.add('alerta','error');
    error.textContent = 'No hay resultados';


    resultado.appendChild(error);
    

}



function filtrarMarca(auto){
    const {marca} = datosBusqueda;

    if(marca){
        return auto.marca === marca;
    }else
    return auto;

}


function filtrarYear(auto){
    const {year} = datosBusqueda;

    if(year){
        return auto.year === year;
    }else
    return auto;
}


function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;

    if(minimo){
        return auto.precio >= minimo;
    }else
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;

    if(maximo){
        return auto.precio <= maximo;
    }else
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;

    if(puertas){
        return auto.puertas === puertas;
    }else
    return auto;
}

function filtrarTransimision(auto){
    const {transmision} = datosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }else
    return auto;

}
function filtrarColor(auto){
    const {color} = datosBusqueda;

    if(color){
        return auto.color === color;
    }else
    return auto;
}