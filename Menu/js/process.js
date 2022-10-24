let grid_city = document.getElementsByClassName('grid-city');
let total = document.getElementsByClassName('box-city');
let vistoria = document.getElementsByClassName('vistoria');
let grid_bairro = document.getElementsByClassName('grid-bairro');
let show_bairro = document.getElementsByClassName('show-bairro');
let classSelect = document.getElementsByClassName('select');
let classRetorna = document.getElementsByClassName('retorna');

let idCity = "";
let bairroUsado = "";
let vistoriaAno = "";

// Animação 
function start(clicked_id) {
    idCity = "";
    idCity += clicked_id;

    // redefinir animações e visibilidade da box-city e select
    for (let i = 0; i < classRetorna.length; i++) {
        classRetorna[i].style.display = "none";
        classRetorna[i].style.animation = "none";
    }

    for (let i = 0; i < show_bairro.length; i++) {
        show_bairro[i].style.display = "none";
    }

    for (let i = 0; i < vistoria.length; i++) {
        vistoria[i].style.display = "none";
    }

    if (grid_city[0].style.gridTemplateColumns === "none") {
        grid_city[0].style.gridTemplateColumns = "auto auto";
        grid_city[0].style.width = "fit-content";
        grid_city[0].style.animation = "Voltar1 1s forwards";
    }

    if (document.getElementById("c" + idCity).style.animation === "1s ease 0s 1 normal forwards running choicebar") {
        document.getElementById("c" + idCity).style.animation = "Voltar1 1s forwards";
    } else {
        document.getElementById("c" + idCity).style.animation = "ir 0.6s forwards";
    }

    document.getElementById("select" + idCity).style.display = "grid";
    document.getElementById("select" + idCity).style.animation = "animOpe 0.6s forwards";
}

// Exbir as vistorias de um ano
function choicebar(anoVistoria) {
    vistoriaAno = "";
    vistoriaAno += anoVistoria;

    let retorna1 = document.getElementById("retorna1");
        //Redefinir
        retorna1.style.display = "none";
        retorna1.style.animation = "none";

    // remover a id "select"
    document.getElementById("select" + idCity).style.display = "none";

    // Obter a altura do id "info"
    let vistoria = document.getElementById("vistoria-" + vistoriaAno + "-" + idCity);
        // redefinir
        vistoria.style.visibility = "hidden";
        vistoria.style.animation = "none";

    // Obter altura antes
        var sectionHeight = total[idCity - 1].scrollHeight;
        var sectionHeightPX = sectionHeight + "px";

        // Aplicar a altura obitida na propridade "--front-height"
        document.documentElement.style.setProperty('--front-height', sectionHeightPX);

    vistoria.style.display = "block";
    total[idCity - 1].style.animation = "none";

    // Obter altura depois
        var sectionHeight = total[idCity - 1].scrollHeight;
        var sectionHeightPX = sectionHeight + "px";

        // Aplicar a altura obitida na propridade "--end-height"
        document.documentElement.style.setProperty('--end-height', sectionHeightPX);

    total[idCity - 1].style.animation = "none";
    // Ocultar todas as outras "box-city" e exibir apenas a selecionada
    for (let i = 0; i < total.length; i++) {
        if (idCity - 1 != i) {
            total[i].style.display = "none";
        } else {
            total[i].style.display = "block";
            total[i].style.animation = "choicebar 1s forwards";

            setTimeout(function(){
                retorna1.style.display = "block";
                retorna1.style.animation = "animOpe 0.6s forwards";
                vistoria.style.visibility = "visible";
                vistoria.style.animation = "animOpe 0.6s forwards";
            }, 1000);

        }
    }

    // Definir a grid city 
    for (let i = 0; i < grid_city.length; i++) {
        grid_city[i].style.animation = "none";
        grid_city[i].style.animation = "choicebar 1s forwards";
        grid_city[i].style.gridTemplateColumns = "none";
        grid_city[i].style.width = "100%";
    }
}

// Exibir o bairro selecionado
function bairro(bairroSelecionado) {
    bairroUsado = "";
    bairroUsado += bairroSelecionado;

    let box_3 = document.getElementById("box-3");
    // Redefinir
        box_3.style.animation = "none";

    let retorna2 = document.getElementById("retorna2");
        //Redefinir
        retorna2.style.display = "none";
        retorna2.style.animation = "none";

    let grid_choice = document.getElementById("grid-choice-" + idCity);

    bairroSelecionado = document.getElementById('bairro-' + bairroSelecionado + "-idcity-" + idCity);
        //Redefinir
        bairroSelecionado.style.animation = "none";
        bairroSelecionado.style.visibility = "hidden";

    let retorna1 = document.getElementById("retorna1");
    retorna1.style.display = "none";

    // Obter altura antes
        var sectionHeight = total[idCity - 1].scrollHeight;
        var sectionHeightPX = sectionHeight + "px";

        // Aplicar a altura obitida na propridade "--front-height"
        document.documentElement.style.setProperty('--front-height', sectionHeightPX);

    bairroSelecionado.style.display = "block";
    grid_choice.style.display = "none";
 
    // Obter altura depois
        var sectionHeight = total[idCity - 1].scrollHeight;
        var sectionHeightPX = sectionHeight + "px";

    
        // Aplicar a altura obitida na propridade "--end-height"
        document.documentElement.style.setProperty('--end-height', sectionHeightPX);

    total[idCity - 1].style.animation = "none";
    total[idCity - 1].style.animation = "bairro 1s forwards";

    // esperar animação terminar para exibir    
    setTimeout(function(){
        retorna2.style.display = "block";
        retorna2.style.animation = "animOpe 0.6s forwards";

        bairroSelecionado.style.visibility = "visible";
        bairroSelecionado.style.animation = "animOpe 0.6s forwards";
    }, 1000);
}

// Retorna para o ano da vistoria
function retorna1() {
    let box_3 = document.getElementById("box-3");
    // Redefinir
        box_3.style.animation = "none";

    let retorna1 = document.getElementById("retorna1");
    // Redefinir
        retorna1.style.display = "none";
        retorna1.style.animation = "none";

    let grid_choice = document.getElementById("grid-choice-" + idCity);
        // Redefinir
        grid_choice.style.animation = "none";
        grid_choice.style.visibility = "unset";

    let vistoria = document.getElementById("vistoria-" + vistoriaAno + "-" + idCity);
    // Redefinir
        vistoria.style.animation = "none";

    // Obter altura antes
        var sectionHeight = total[idCity - 1].scrollHeight;
        var sectionHeightPX = sectionHeight + "px";

    // Aplicar a altura obitida na propridade "--front-height"
        document.documentElement.style.setProperty('--front-height', sectionHeightPX);

    // remover a id "vistoria"
    total[idCity - 1].style.animation = "none";
    vistoria.style.display = "none";
    document.getElementById("select" + idCity).style.animation = "none";
    document.getElementById("select" + idCity).style.visibility = "hidden";
    document.getElementById("select" + idCity).style.display = "grid";

    // Obter altura depois
        var sectionHeight = total[idCity - 1].scrollHeight;
        var sectionHeightPX = sectionHeight + "px";
    
    // Aplicar a altura obitida na propridade "--end-height"
        document.documentElement.style.setProperty('--end-height', sectionHeightPX);

    total[idCity - 1].style.animation = "voltarEscolhaAnoVistoria 1s forwards";

    total[idCity - 1].addEventListener('animationend', () => {
        document.getElementById("select" + idCity).style.visibility = "visible";
        document.getElementById("select" + idCity).style.animation = "animOpe 0.6s forwards";
    });

    // Definir a grid city 
    for (let i = 0; i < grid_city.length; i++) {
        grid_city[i].style.animation = "none";
        grid_city[i].style.animation = "voltarEscolhaAnoVistoria 1s forwards";
    }
}

// Retornar para seleção de vistoria 
function retorna2() {
    let retorna1 = document.getElementById("retorna1");
    retorna1.style.display = "block";
    let box_3 = document.getElementById("box-3");

    let grid_choice = document.getElementById("grid-choice-" + idCity);
        // Redefinir
        grid_choice.style.animation = "none";

    let retorna2 = document.getElementById("retorna2");
        //Redefinir
        retorna2.style.animation = "none";

    let bairroSelecionado = document.getElementById('bairro-' + bairroUsado + "-idcity-" + idCity);
        //Redefinir
        bairroSelecionado.style.animation = "none";

    // Obter altura antes
        // altura da box-city
        var sectionHeight = total[idCity - 1].scrollHeight;
        var sectionHeightPX = sectionHeight + "px";

        // altura da box-3
        var sectionBoxHeight = box_3.scrollHeight;
        var sectionBoxHeightPX = sectionBoxHeight + "px";

        // Aplicar a altura obitida na propridades
        document.documentElement.style.setProperty('--front-height', sectionHeightPX);
        document.documentElement.style.setProperty('--box-front-height', sectionBoxHeightPX);

    bairroSelecionado.style.animation = "animEnd 0.6s forwards";

    // Definir a grid city 
    for (let i = 0; i < grid_city.length; i++) {
        grid_city[i].style.animation = "none";
    }

    bairroSelecionado.style.display = "none";
    bairroSelecionado.style.visibility = "hidden";

    grid_choice.style.visibility = "hidden";
    grid_choice.style.display = "block";

    total[idCity - 1].style.animation = "none";
    total[idCity - 1].style.height = "fit-content";
    total[idCity - 1].style.width = "100%";

    // Obter altura depois
        var sectionHeight = total[idCity - 1].scrollHeight;
        var sectionHeightPX = sectionHeight + "px";

        // altura da box-3
        var sectionBoxHeight = box_3.scrollHeight;
        var sectionBoxHeightPX = sectionBoxHeight + "px";

        // Aplicar a altura obitida na propridades
        document.documentElement.style.setProperty('--end-height', sectionHeightPX);
        document.documentElement.style.setProperty('--box-end-height', sectionBoxHeightPX);

    total[idCity - 1].style.animation = "voltarEscolhaVistoria 1s forwards";
    box_3.style.animation = "voltarEscolhaVistoriaBOX 1s forwards";
    retorna2.style.display = "none";

    // esperar animação terminar para exibir
    setTimeout(function(){
        grid_choice.style.visibility = "visible";
        grid_choice.style.animation = "animOpe 0.6s forwards";
    }, 1000);
}


// Pesquisa
function search() {
    var input, filter, txt, i, txtValue;

    var h = window.innerHeight;

    // redefinir animações e visibilidade da grid-city
    if (h < 1060) {
        grid_city[0].style.gridTemplateColumns = "auto";
        grid_city[0].style.width = "100%";
        grid_city[0].style.animation = "none";
    } else {
        grid_city[0].style.gridTemplateColumns = "auto auto";
        grid_city[0].style.width = "fit-content";
        grid_city[0].style.animation = "none";
    }

    // redefinir animações e visibilidade da box-city e select
    for (let i = 0; i < classRetorna.length; i++) {
        classRetorna[i].style.display = "none";
        classRetorna[i].style.animation = "none";
    }

    for (let i = 0; i < total.length; i++) {
        total[i].style.animation = "none";
    }

    for (let i = 0; i < vistoria.length; i++) {
        vistoria[i].style.display = "none";
        vistoria[i].style.animation = "none";
    }

    for (let i = 0; i < classSelect.length; i++) {
        classSelect[i].style.display = "none";
        classSelect[i].style.animation = "none";
    }

    input = document.getElementById('input_search');
    filter = input.value.toLowerCase();

    txt = document.getElementsByTagName('h3');

    for (i = 0; i < txt.length; i++) {
        txtValue = txt[i].textContent || txt[i].innerText;
        txtValue = txtValue.toLocaleLowerCase();

        if (txtValue.indexOf(filter) > -1) {
            total[i].style.display = "block";
        } else {
            total[i].style.display = "none";
        }

    }
}
