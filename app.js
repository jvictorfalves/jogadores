function pesquisar() {
    // Obtém o valor digitado no campo de pesquisa, converte para minúsculas para facilitar a comparação.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Seleciona a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let htmljogadores = "";

    // Verifica se o campo de pesquisa está vazio.
    if (!campoPesquisa) {
        // Se estiver vazio, exibe uma mensagem informando que é necessário digitar um nome.
        section.innerHTML = `<p>Digite um atleta para a pesquisa!</p>`;
        // Interrompe a função.
        return;
    } else {
        // Itera sobre cada jogador no array 'jogadores'.
        for (let i = 0; i < jogadores.length; i++) {
            // Obtém o nome e a descrição do jogador atual, convertendo para minúsculas.
            let atleta = jogadores[i].nome.toLowerCase();
            let descricaoAtleta = jogadores[i].descricao.toLowerCase();

            // Verifica se o nome ou a descrição do jogador contém o termo de pesquisa.
            if (atleta.includes(campoPesquisa) || descricaoAtleta.includes(campoPesquisa)) {
                // Se encontrar uma correspondência, adiciona o HTML do jogador aos resultados.
                htmljogadores += `
                    <div class="item-resultado">
                        <h2>
                            <a href="${jogadores[i].linkInsta}" target="_blank">${jogadores[i].nome}</a>
                        </h2>
                        <p class="descricao-meta">${jogadores[i].descricao}</p>
                        <a href="${jogadores[i].link}" target="_blank">Mais informações.</a>
                    </div>`;
            }
        }
    }
    // Verifica se foram encontrados resultados.
    if (!htmljogadores) {
        // Se não houver resultados, exibe uma mensagem informando que nada foi encontrado.
        htmljogadores = `<p>Nada foi encontrado!</p>`;
    }
    // Atualiza o conteúdo da seção de resultados com o HTML gerado.
    section.innerHTML = htmljogadores;
}