/*

    OBJETIVO - quando clicarmos na aba temos que mostrar
    o conteúdo da aba que foi clicada pelo usuário e
    esconder o conteúdo da aba anterior

    - passo 1 - dar um jeito de pegar os elementos que
    representam as abas no HTML

    - passo 2 - dar um jeito de identificar o clique no
    elemento da aba

    - passo 3 - quando o usuário clicar, desmarcar a aba
    selecionada

    - passo 4 - marcar a aba clicada como selecionado

    - passo 5- esconder o conteúdo anterior

    - passo 6 - mostrar o conteúdo da aba selecionada

*/

const tabs = document.querySelectorAll(`.aba`);

tabs.forEach((tab) => {

    tab.addEventListener(`click`, function () {

        if (tab.classList.contains(`selecionado`)) return;

        selectTab(tab);

        showTabInfo(tab);
    });

});

function selectTab(tab) {

    //passo 3
    const selectedTab = document.querySelector(`.aba.selecionado`);

    selectedTab.classList.remove(`selecionado`);

    //passo 4
    tab.classList.add(`selecionado`);

}

function showTabInfo(tab) {

    //passo 5
    const selectedInformation = document.querySelector(`.informacao.selecionado`);

    selectedInformation.classList.remove(`selecionado`);

    //passo 6
    const idOfElementOfInformation = `informacao-${tab.id}`;
    console.log(idOfElementOfInformation)

    const informationToBeShown = document.getElementById(idOfElementOfInformation);
    console.log(informationToBeShown)

    informationToBeShown.classList.add(`selecionado`);

}