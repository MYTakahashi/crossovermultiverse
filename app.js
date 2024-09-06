function pesquisar(){
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value

    if (campoPesquisa == '') {
        section.innerHTML = 'Nada encontrado! Tente novamente!'
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultado = '';
    let heroi = '';
    let editora = '';
    let descricao = '';

    for (let hero of dados) {
        heroi = hero.heroi.toLowerCase()
        editora = hero.editora.toLowerCase()
        descricao = hero.descricao.toLowerCase()
        if (heroi.includes(campoPesquisa) || 
        editora.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa)  ) 
        {
        resultado += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${hero.heroi}</a>
            </h2>
            <p class="descricao-meta">${hero.editora}
            </p>
            <p class="descricao-meta">${hero.descricao}
            </p>
            <a href=${hero.link} target="_blank">Mais informações</a>
        </div>
        `
        }   
    }

    if (!resultado){
        resultado = 'Personagem não encontrado! Tente novamente!'
    }

    section.innerHTML = resultado
}