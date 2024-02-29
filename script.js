const PESO = document.getElementById('peso');
const ERROR = document.getElementById('error');
const CALCULAR = document.getElementById('calculo');
const FLUJO_ = document.getElementById('flujo_');
const MANTENIMIENTO_ = document.getElementById('mantenimiento_');
const SC_1500 = document.getElementById('sc_1');
const SC_2000 = document.getElementById('sc_2');
const HOLLIDAY_SEGAR = document.getElementById('metodo_1');
const SUPERFICIE = document.getElementById('metodo_2');


function calcFlujo(peso){
    let pesoAuxiliar = peso;
    let mantenimiento = 0;

    if (pesoAuxiliar > 20){
        let aux = pesoAuxiliar - 20;
        mantenimiento += aux * 20;
        pesoAuxiliar -= aux;
    } 
    if (pesoAuxiliar > 10){
        let aux = pesoAuxiliar - 10;
        mantenimiento += aux * 50;
        pesoAuxiliar -= aux;
    }  
    mantenimiento += pesoAuxiliar * 100;

    let flujo = mantenimiento / 24;
    flujo = Math.ceil(flujo);

    return flujo;
}

function calcSuperficieCorporal(peso){
    peso = parseFloat(peso);
    let calculo = ((peso * 4) + 7) / (peso + 90);
    return calculo;
}

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value;

    if (DATO > 0 && DATO <= 30){
        ERROR.style.display = 'none';

        document.getElementById('resultado_1').style.display = 'none';
        document.getElementById('resultado_2').style.display = 'none';
        
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo * 1.5;

        HOLLIDAY_SEGAR.innerHTML = 'Método Holliday-Segar';
        FLUJO_.innerHTML = 'Mantenimiento = ' + flujo + ' cc/hr';
        MANTENIMIENTO_.innerHTML = 'm+m/2 = ' + mantenimiento + ' cc/hr';
        FLUJO_.style.display = 'block';
        MANTENIMIENTO_.style.display = 'block';
        HOLLIDAY_SEGAR.style.display = 'block';

        document.getElementById('resultado_1').style.display = 'block';
    } 
    else if (DATO > 30){
        ERROR.style.display = 'none';

        document.getElementById('resultado_1').style.display = 'none';
        document.getElementById('resultado_2').style.display = 'none';

        let superficieCorporalNormal = calcSuperficieCorporal(DATO);
        let superficieCorporal1500 = superficieCorporalNormal * 1500;
        superficieCorporal1500 = superficieCorporal1500.toFixed(2);
        let superficieCorporal2000 = superficieCorporalNormal * 2000;
        superficieCorporal2000 = superficieCorporal2000.toFixed(2);

        SUPERFICIE.innerHTML = 'Método por Superficie Corporal';
        SC_1500.innerHTML = 'Superficie Corporal x 1500 = ' + superficieCorporal1500;
        SC_2000.innerHTML = 'Superficie Corporal x 2000 = ' + superficieCorporal2000;
        
        SUPERFICIE.style.display = 'block';
        FLUJO_.style.display = 'block';
        MANTENIMIENTO_.style.display = 'block';

        document.getElementById('resultado_2').style.display = 'block';
    } 
    else {
        ERROR.style.display = 'block';
        FLUJO_.style.display = 'none';
        MANTENIMIENTO_.style.display = 'none';

        document.getElementById('resultado_1').style.display = 'none';
        document.getElementById('resultado_2').style.display = 'none';
    }
});
