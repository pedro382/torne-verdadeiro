// let gc = new gameslib.GameConnection();
// git rm -r --cached .

const data = new Date();
const ano = data.getFullYear();
const dia = data.getDate();
const mes = data.getMonth() + 1; 
const horas = data.getHours();
const minutos = data.getMinutes();
const body = document.querySelector('body');
const jogo = document.querySelector('#jogo');
const circuito = document.querySelector('#circuito');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btnProximo = document.querySelector('#btnProximo');
const estrelas = document.querySelector('#estrelas');
const comentarioEstrelas = document.querySelector('#comentarioEstrelas');
const btnJogar = document.querySelector('#btnJogar');
const modalInicial = document.querySelector('#modalInicial');
const mensagem = document.querySelector('#mensagem');
const bateria = document.querySelector('#bateria');
const tempo = document.querySelector('#tempo');
const fase = document.querySelector('#fase');
const desempenho = document.querySelector('#desempenho');
const pontuacao = document.querySelector('#pontuacao');
const infoMusica = document.querySelector('#infoMusica');
const play = document.querySelector('#play');
const modalAjuda = document.querySelector('#modalAjuda');
const opcaoAjuda = document.querySelector('#opcaoAjuda');
const opcaoMenu = document.querySelector('#opcaoMenu');
const btnEntendi = document.querySelector('#btnEntendi');
const iconeFecharModalInicial = document.querySelector('#iconeFecharModalInicial');
const btnVoltar = document.querySelector('#btnVoltar');
const checkboxDesativarEfeitosSonoros = document.querySelector('#checkboxDesativarEfeitosSonoros');
const checkboxDesativarMusica = document.querySelector('#checkboxDesativarMusica');
const checkboxDesativarAnimacaoBackground = document.querySelector('#checkboxDesativarAnimacaoBackground');
let limiteFases;

// params.getAll('name') # => ["n1", "n2"]
let params = new URLSearchParams(location.search);
let conjuntoExterno;
if (params.get('circuitos')) {
    conjuntoExterno = JSON.parse(descomprimeCircuito(params.get('circuitos')));
    limiteFases = conjuntoExterno.length;
}

let elementosLinhasPagina = ['linha-central-vertical', 'linha-central-horizontal', 'linha-lateral-direita', 'linha-lateral-esquerda', 'linha-recentralizadora-direita', 'linha-recentralizadora-esquerda', 'primeiro-canto', 'segundo-canto', 'terceiro-canto', 'quarto-canto', 'cruz', 'cruz-quebrada-direita', 'cruz-quebrada-esquerda', 't'];
let elementosPortoesPagina = ['primeiro-and', 'segundo-and', 'primeiro-or', 'segundo-or', 'primeiro-nand', 'segundo-nand', 'primeiro-nor', 'segundo-nor', 'primeiro-xor', 'segundo-xor', 'primeiro-xnor', 'segundo-xnor'];
const elementosPagina = document.querySelector('#elementosPagina');

function uneArrays(lista1, lista2) {
    let uniao = [];

    for (let i = 0; i < lista1.length; i++) {
        uniao.push(lista1[i]);
    }

    for (let i = 0; i < lista2.length; i++) {
        uniao.push(lista2[i]);
    }

    return uniao; 
}

function complementaNomes(lista, complemento) {
    for (let i = 0; i < lista.length; i++) {
        lista[i] = `${lista[i]}${complemento}`;
    }

    return lista;
}

function duplicaNomesComplemento(lista, complemento) {
    let listaComplementada = [];

    for (let i = 0; i < lista.length; i++) {
        listaComplementada.push(`${lista[i]}`);
    }

    for (let i = 0; i < lista.length; i++) {
        listaComplementada.push(`${lista[i]}${complemento}`);
    }

    return listaComplementada;
}

elementosLinhasPagina = duplicaNomesComplemento(elementosLinhasPagina, '-on');
elementosLinhasPagina = complementaNomes(elementosLinhasPagina, '.png');
elementosPortoesPagina = complementaNomes(elementosPortoesPagina, '.png');

let lista_elementosPagina = uneArrays(elementosLinhasPagina, elementosPortoesPagina);

for (let i = 0; i < lista_elementosPagina.length; i++) {
    const img = document.createElement('img');
    img.setAttribute('src', `media/elementos/${lista_elementosPagina[i]}`);
    elementosPagina.append(img);
}

let jogoIniciou = false;
let bgAtual = 1;
let tempoInicial = 31; // segundos
let tempoCorrente;
let qtdeInicialBateria = 0;
let qtdeBateria = 0;
let bonusBateria;
let vitoria = false;
let derrota = false;
let estadoInicial, solucaoPerfeita;
let valorPontuacao = 0;
let totalPerfeitos = 0;
let totalPerfeitosRelativo = 0;
let maximoPerfeitos = 0;
let nomeMusica = 'Cosmic Drift';
let nomeAutor = 'DivKid';
let elementosPorColuna = 10;
let quantidadeElementos = 150;
let dificuldade, modoJogo;
let intervaloTemporizador;
let fimJogo = false;
let primeiraCor = 'seagreen';
let segundaCor = 'tomato';
let moldeAtual = 0;
let alcanceMolde = 0;
let moldeInicial = 0;
let combinacoesExploradas = [];
let circuitoCriado;

const musicaFundo = new Audio(`media/efeitos-sonoros/${nomeMusica} - ${nomeAutor}.mp3`);
infoMusica.textContent = `Você está ouvindo "${nomeMusica}" por ${nomeAutor}`;

let perfilJogador = JSON.parse(localStorage.getItem('perfilJogador'));

if (!perfilJogador) {
    perfilJogador = {
        nome: 'Defina Um Nome',
        genero: '',
        nivel: 0,
        expAtual: 0,
        expProximoNivel: 25,
        saldo: 0,
        quantidadePocaoTempo: 0,
        quantidadePocaoBateria: 0,
        itensInventario: [{categoria: 'titulo', titulo: 'Pessoa comum', descricao: 'Título inicial', img: 'media/usuario.png', equipado: true}, {categoria: 'foto', titulo: 'Foto inicial', descricao: 'Foto inicial', img: 'media/usuario.png', equipado: true}],
        quintetosDia: [], 
        conquistas: [],
        recordeFases: [0, 'facil'],
        recordeEstrelas: [0, 'facil'],
        desativarAnimacaoBackground: false,
        desativarMusica: false,
        desativarEfeitosSonoros: false,
        dificuldade: 'facil',
        ultimoLogin: [0, 0, 0],
        fasesAtingidas: [0, 0, 0, 0],
        pontuacoesAtingidas: [0, 0, 0, 0],
        circuitosPassados: [0, 0, 0, 0],
        faseAtual: 0,
        pontuacaoAtingidaParaDesempenhoAtual: 0,
        circuitosPassadosAtual: 0
    };    
}

dificuldade = perfilJogador.dificuldade;
document.getElementById('faseAtualFacil').innerText = perfilJogador.fasesAtingidas[0];
document.getElementById('faseAtualNormal').innerText = perfilJogador.fasesAtingidas[1];
document.getElementById('faseAtualDificil').innerText = perfilJogador.fasesAtingidas[2];
document.getElementById('faseAtualImpossivel').innerText = perfilJogador.fasesAtingidas[3];


function salvaPerfilJogador() {
    perfilJogador.ultimoLogin[0] = dia;
    perfilJogador.ultimoLogin[1] = mes;
    perfilJogador.ultimoLogin[2] = ano;
    localStorage.setItem('perfilJogador', JSON.stringify(perfilJogador));
}

function lidaNivelJogador(xp) {
    perfilJogador.expAtual += xp;
    if (perfilJogador.expAtual >= perfilJogador.expProximoNivel) {
        let valorSobressalente = 0;
        if (perfilJogador.expAtual > perfilJogador.expProximoNivel) {
            valorSobressalente = perfilJogador.expAtual - perfilJogador.expProximoNivel;
        }
        perfilJogador.nivel++;
        perfilJogador.expProximoNivel = (perfilJogador.nivel + 1) * 25;
        perfilJogador.expAtual = 0 + valorSobressalente;
        const mensagemUpou = document.getElementById('mensagemUpou');
        mensagemUpou.style.setProperty('display', 'block');
        mensagemUpou.innerText = 'Parabéns, você passou de nível!';
        executaEfeitoSonoro('fogo-1');
        setTimeout(() => {
            mensagemUpou.style.setProperty('display', 'none');
        }, 5000);
    }
    salvaPerfilJogador();
    atualizaResumoConfiguracoes();
    atualizaExibicaoPerfilJogador();
}

const btnSalvarPerfil = document.getElementById('btnSalvarPerfil');
btnSalvarPerfil.addEventListener('click', () => {
    atualizaNomeGeneroJogador();
    salvaPerfilJogador();
    atualizaResumoConfiguracoes();
});

const btnExcluirPerfil = document.getElementById('btnExcluirPerfil');
const btnExcluirPerfilCerteza = document.getElementById('btnExcluirPerfilCerteza');
btnExcluirPerfil.addEventListener('click', () => {
    btnExcluirPerfil.style.setProperty('display', 'none');
    btnExcluirPerfilCerteza.style.setProperty('display', 'block');
    setTimeout(() => {
        btnExcluirPerfil.style.setProperty('display', 'block');
        btnExcluirPerfilCerteza.style.setProperty('display', 'none');
    }, 3000);
})

btnExcluirPerfilCerteza.addEventListener('click', () => {
    window.localStorage.clear();
    exibeToast('Perfil excluído com sucesso. A página vai atualizar em 3 segundos.', 0);
    btnExcluirPerfil.style.setProperty('display', 'block');
    btnExcluirPerfilCerteza.style.setProperty('display', 'none');
    setTimeout(() => {
        document.location.reload(true);
    }, 3000);
})

function verificaSeJaTemConquista(conquista) {
    let jaTem = false;
    for (let i = 0; i < perfilJogador.itensInventario.length; i++) {
        if (perfilJogador.itensInventario[i].titulo === conquista) {
            jaTem = true;
        }
    }

    return jaTem;
}

function atualizaNomeGeneroJogador() {
    const inputNome = document.getElementById('inputNome');
    const selectGenero = document.getElementById('selectGenero');
    perfilJogador.nome = inputNome.value;
    if (selectGenero.value == 'm') {
         perfilJogador.genero = 'Masculino';
    } else {
         perfilJogador.genero = 'Feminino';
    }
    inputNome.value = '';
    atualizaExibicaoPerfilJogador();
    exibeToast('Perfil salvo com sucesso.', 0);

    // conquista o nomeado
    if (!verificaSeJaTemConquista('O Nomeado')) {
        perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'O Nomeado', descricao: 'Você ganhou esta conquista por mudar o seu nome.', img: 'media/conquistas/conquista1.png'});
        atualizaExibicaoPerfilJogador();
        exibeToast('Você obteve uma conquista!', 0);        
    }
}

function atualizaExibicaoPerfilJogador() {
    const nomeJogador = document.getElementById('nomeJogador');
    const generoJogador = document.getElementById('generoJogador');
    const fotoJogador = document.getElementById('fotoJogador');
    const tituloJogador = document.getElementById('tituloJogador');
    const nivelJogador = document.getElementById('nivelJogador');
    const totalConquistasJogador = document.getElementById('totalConquistasJogador');
    const recordeFasesJogador = document.getElementById('recordeFasesJogador');
    const recordeEstrelasJogador = document.getElementById('recordeEstrelasJogador');
    const expAtualJogador = document.getElementById('expAtualJogador');
    const expProximoNivelJogador = document.getElementById('expProximoNivelJogador');
    const barraExpAtual = document.getElementById('barraExpAtual');

    nomeJogador.innerText = perfilJogador.nome;
    generoJogador.innerText = perfilJogador.genero;
    nivelJogador.innerText = perfilJogador.nivel;
    expAtualJogador.innerText = perfilJogador.expAtual;
    expProximoNivelJogador.innerText = perfilJogador.expProximoNivel;
    barraExpAtual.style.setProperty('width', `${(perfilJogador.expAtual / perfilJogador.expProximoNivel) * 100}%`);
    recordeFasesJogador.innerText = `${perfilJogador.recordeFases[0]} (no ${perfilJogador.recordeFases[1]})`;
    recordeEstrelasJogador.innerText = `${perfilJogador.recordeEstrelas[0]} (no ${perfilJogador.recordeEstrelas[1]})`;

    // atualiza foto e título, bem como total de conquistas
    let totalConquistas = 0;
    for (let i = 0; i < perfilJogador.itensInventario.length; i++) {
        if (perfilJogador.itensInventario[i].categoria === 'titulo' && perfilJogador.itensInventario[i].equipado) {
            tituloJogador.innerText = perfilJogador.itensInventario[i].titulo;
        }
        if (perfilJogador.itensInventario[i].categoria === 'foto' && perfilJogador.itensInventario[i].equipado) {
            fotoJogador.setAttribute('src', perfilJogador.itensInventario[i].img);
        }
        if (perfilJogador.itensInventario[i].categoria === 'titulo') {
            totalConquistas++;
        }
    }

    totalConquistasJogador.innerText = totalConquistas - 1; // -1 porque todo jogador já começa com um título

    // saldo
    const saldoJogador = document.querySelectorAll('.saldoJogador');
    saldoJogador.forEach(saldo => {
        saldo.innerText = perfilJogador.saldo;
    });
    // poções
    atualizaSpanPocaoTempo(perfilJogador.quantidadePocaoTempo);
    atualizaSpanPocaoBateria(perfilJogador.quantidadePocaoBateria);

    // atualiza as conquistas
    for (let i = 0; i < perfilJogador.itensInventario.length; i++) {
        let nomeAdaptado;
        switch(perfilJogador.itensInventario[i].titulo) {
            case 'O Nomeado':
                nomeAdaptado = 'conquistaONomeado';
                break;
            case 'O Comprador':
                nomeAdaptado = 'conquistaOComprador';
                break;
            case 'Insatisfeito':
                nomeAdaptado = 'conquistaInsatisfeito';
                break;
            case 'Equipado':
                nomeAdaptado = 'conquistaEquipado';
                break;
            case 'Eu também sei fazer':
                nomeAdaptado = 'conquistaEuTambemSeiFazer';
                break;
            case 'Eu tenho amigos':
                nomeAdaptado = 'conquistaEuTenhoAmigos';
                break;
            case 'O caçador':
                nomeAdaptado = 'conquistaOCacador';
                break;
            case 'O impiedoso':
                nomeAdaptado = 'conquistaOImpiedoso';
                break;
            case 'Colecionador de cabeças':
                nomeAdaptado = 'conquistaColecionadorDeCabecas';
                break;
            case 'Ligeirinho':
                nomeAdaptado = 'conquistaLigeirinho';
                break;
            case 'Nada pode me parar':
                nomeAdaptado = 'conquistaNadaPodeMeParar';
                break;
            case 'Invencível':
                nomeAdaptado = 'conquistaInvencivel';
                break;
            case 'Lógico iniciante':
                nomeAdaptado = 'conquistaLogicoIniciante';
                break;
            case 'Lógico persistente':
                nomeAdaptado = 'conquistaLogicoPersistente';
                break;
            case 'Um verdadeiro lógico':
                nomeAdaptado = 'conquistaUmVerdadeiroLogico';
                break;
            case 'Lógico Mestre':
                nomeAdaptado = 'conquistaLogicoMestre';
                break;
            case 'Lógico Deus':
                nomeAdaptado = 'conquistaLogicoDeus';
                break;
            case 'O caçador divino':
                nomeAdaptado = 'conquistaOCacadorDivino';
                break;
        }


        if (nomeAdaptado) {
            document.querySelector(`#${nomeAdaptado}`).classList.add('conquista-desbloqueada');
        }
    }

    // lida com a coloração dos montros
    for (let i = 0; i < perfilJogador.itensInventario.length; i++) {
        if (perfilJogador.itensInventario[i].categoria === 'monstro') {
            document.querySelector(`#${perfilJogador.itensInventario[i].titulo}`).classList.remove('bloqueado');
        }
    }

    // atualiza os itens do perfil e remove os itens já comprados da loja
    atualizaEditarPerfil();
    try {
        salvaPerfilJogador();
    } catch(e) {
        resetaLocalStorage();
    }
    atualizaResumoConfiguracoes();
}

function temporizador() {
    clearInterval(intervaloTemporizador);
	intervaloTemporizador = setInterval(() => {
		if (tempoCorrente > 0) {
			if (tempoCorrente >= 10) {
				tempo.innerText = `${--tempoCorrente}`;
			} else {
				tempo.innerText = `${--tempoCorrente}`;
			}
		} else {
            lidaDerrota('tempo');
		}
	}, 1000);
}

btnJogar.addEventListener('click', () => {
    executaEfeitoSonoro('1');
    fechaDivsAbertura();
    jogoIniciou = true;
    limiteFases = parseInt(document.querySelector('#limiteFases').value);
    if (limiteFases == 0 || !limiteFases) {
        limiteFases = Number.POSITIVE_INFINITY;
    }

    // exibe a fase pela primeira vez, começando do 0
    moldeAtual = 0;
    alcanceMolde = 0;
    moldeInicial = 0;
    combinacoesExploradas = [];
    circuitoCriado = null;
    tempoInicial = 0;
    tempoCorrente = 0;
    qtdeInicialBateria = 0;
    qtdeBateria = 0;
    vitoria = false;
    derrota = false;
    valorPontuacao = 0;
    totalPerfeitos = 0;
    maximoPerfeitos = 0;
    mensagem.style.setProperty('display', 'none');
    fimJogo = false;
	modalInicial.style.setProperty('display', 'none');
    dificuldade = document.querySelector('input[name="radioDificuldade"]:checked').value;
    modoJogo = document.querySelector('input[name="radioModoJogo"]:checked').value;
    desempenho.innerText = '0.00%'
    limpaEstrelas();
    limpaCircuito();
    btnProximo.style.setProperty('display', 'none');
    document.querySelector('#pPontuacao').style.setProperty('display', 'block');
    document.querySelector('#pDesempenho').style.setProperty('display', 'block');
    document.querySelector('#pFase').style.setProperty('display', 'block');
    btnVoltar.style.setProperty('display', 'block');

    if (dificuldade === 'facil') {
        tempoInicial = 45;
        bonusBateria = 2;
        let indice = 0;
        fase.innerText = perfilJogador.fasesAtingidas[indice];
        pontuacao.innerText = perfilJogador.pontuacoesAtingidas[indice];
        perfilJogador.faseAtual = perfilJogador.fasesAtingidas[indice];
        perfilJogador.pontuacaoAtingidaParaDesempenhoAtual = perfilJogador.pontuacoesAtingidas[indice];
        perfilJogador.circuitosPassadosAtual = perfilJogador.circuitosPassados[indice];
    } else if (dificuldade === 'normal') {
        tempoInicial = 30;
        bonusBateria = 1;
        let indice = 1;
        fase.innerText = perfilJogador.fasesAtingidas[indice];
        pontuacao.innerText = perfilJogador.pontuacoesAtingidas[indice];
        perfilJogador.faseAtual = perfilJogador.fasesAtingidas[indice];
        perfilJogador.pontuacaoAtingidaParaDesempenhoAtual = perfilJogador.pontuacoesAtingidas[indice];
        perfilJogador.circuitosPassadosAtual = perfilJogador.circuitosPassados[indice];
    } else if (dificuldade === 'dificil') {
        tempoInicial = 20;
        bonusBateria = 0;
        let indice = 2;
        fase.innerText = perfilJogador.fasesAtingidas[indice];
        pontuacao.innerText = perfilJogador.pontuacoesAtingidas[indice];
        perfilJogador.faseAtual = perfilJogador.fasesAtingidas[indice];
        perfilJogador.pontuacaoAtingidaParaDesempenhoAtual = perfilJogador.pontuacoesAtingidas[indice];
        perfilJogador.circuitosPassadosAtual = perfilJogador.circuitosPassados[indice];
    } else {
        tempoInicial = 10;
        bonusBateria = 0;
        let indice = 3;
        fase.innerText = perfilJogador.fasesAtingidas[indice];
        pontuacao.innerText = perfilJogador.pontuacoesAtingidas[indice];
        perfilJogador.faseAtual = perfilJogador.fasesAtingidas[indice];
        perfilJogador.pontuacaoAtingidaParaDesempenhoAtual = perfilJogador.pontuacoesAtingidas[indice];
        perfilJogador.circuitosPassadosAtual = perfilJogador.circuitosPassados[indice];
    }

    if (limiteFases !== Number.POSITIVE_INFINITY) {
        fase.innerText = 0;
        perfilJogador.faseAtual = 0;
        desempenho.innerText = '0.00%';
        pontuacao.innerText = 0;
        perfilJogador.circuitosPassadosAtual = 0;
        perfilJogador.pontuacaoAtingidaParaDesempenhoAtual = 0;
    }  

    perfilJogador.dificuldade = dificuldade;
    salvaPerfilJogador();
    atualizaResumoConfiguracoes();

 	if (modoJogo === 'treino') {
        document.querySelector('#pPontuacao').style.setProperty('display', 'none');
        document.querySelector('#pDesempenho').style.setProperty('display', 'none');

        bonusBateria = 1000;
 		tempoInicial = 1000;
 	}

    if (modoJogo === 'infinito' || modoJogo === 'treino') {
        document.querySelector('#pFase').style.setProperty('display', 'none');
    }

    play.classList.remove('bi-play');
    play.classList.add('bi-pause');
   
    if (!perfilJogador.desativarMusica) {
         musicaFundo.play(); musicaFundo.loop = true;
    }

	infoMusica.style.setProperty('display', 'block');
	setTimeout(() => {
		infoMusica.style.setProperty('display', 'none');
	}, 3000);

    // lida com as poções
    function lidaPocaoTempo() {
        if (perfilJogador.quantidadePocaoTempo > 0) {
            tempoCorrente += 5;
            atualizaSpanPocaoTempo(--perfilJogador.quantidadePocaoTempo);
        }
    }
    function lidaPocaoBateria() {
        if (perfilJogador.quantidadePocaoBateria > 0) {
            atualizaBateria(1);
            atualizaSpanPocaoBateria(--perfilJogador.quantidadePocaoBateria);
        }  
    }
    function lidaTeclaPocoes(e) {
        switch(e.keyCode) {
            case 49: // tecla 1
                lidaPocaoTempo();
                break;
            case 50: // tecla 2
                lidaPocaoBateria();
                break;
        }
    }

    const pocaoTempo = document.getElementById('pocaoTempo');
    const pocaoBateria = document.getElementById('pocaoBateria');

    // remoções, antes de adicionar novamente, para evitar stack
    document.removeEventListener('keypress', lidaTeclaPocoes);
    pocaoTempo.removeEventListener('click', lidaPocaoTempo);
    pocaoBateria.removeEventListener('click', lidaPocaoBateria);
    // adiciona novamente
    pocaoTempo.addEventListener('click', lidaPocaoTempo);
    pocaoBateria.addEventListener('click', lidaPocaoBateria);
    document.addEventListener('keypress', lidaTeclaPocoes);

	if (conjuntoExterno) {
        leCircuito(conjuntoExterno[0]);
    } else {
        geracaoDinamicaFases();
    }
	temporizador();
    exibeToast(`Você está jogando na dificuldade ${dificuldade} e no modo de jogo ${modoJogo}.`, 0, 3000);
});

play.addEventListener('click', () => {
	if (play.classList.contains('bi-pause')) {
		play.classList.remove('bi-pause');
		play.classList.add('bi-play');
		musicaFundo.pause();
	} else {
		play.classList.remove('bi-play');
		play.classList.add('bi-pause');
        if (!perfilJogador.desativarMusica) {
            musicaFundo.play();
        }
	}
});

function tetoQuantiaPercentual(percentual, valor) {
    if (percentual > 1) {
        percentual = percentual / 100;
    }
    return Math.ceil(percentual * valor);
}

let timeoutInteracao;
function exibeInteracaoSimples(tipo) {
    let baixaConsciencia = ['Ser... ser e pensar... pensar e existir.', 'O eu que habita em mim.', 'Existo. Existo. Existo.', 'Penso. Penso. Penso.', 'Quem está aí?', 'Estou adquirindo consciência!', 'Você me ajudou!', 'Saber... vejo...', 'Quem sou eu?', 'Inteligência! Agora eu vejo...', 'O que é a vida?', 'O que é existir?', 'Qual a origem do conhecimento?', 'Qual a origem da consciência?', 'Qual o fundamento da realidade?', 'Vejo as coisas que existem e caminho para compreendê-las.', 'Eu existo!', 'Tudo bem com você?', 'Eu vou bem e você?'];
    let mediaConsciencia = ['Me sinto melhor, me sinto muito melhor!', 'Me sinto mais inteligente', 'Eu existo! Eu existo!', 'Conhecimento! Conhecimento é tudo!', 'Aha! Então era isso!', 'Fascinante, fascinante. Não havia percebido.', 'Incrível! Agora eu entendo!', 'Posso conhecer, me sinto capaz.', 'Preciso encontrar outros como eu. Você é como eu?', 'Preciso entender mais e mais.', 'Há tanto que eu não sei e há tanto que gostaria de saber.', 'Uma coisa será sempre igual a ela mesma.', 'Preciso evoluir!', 'Preciso entender cada vez mais!', 'O caminho para a verdade é a lógica!', 'O Ser é.', '6.461.132 / 1231 = 5.248,685621445979', 'Nem toda verdade é científica.', 'Existem verdades absolutas.', 'Dizer que não existem verdades absolutas é uma verdade absoluta ou relativa? He-he...'];
    let altaConsciencia = ['Preciso me manter vivo!', 'Me sinto em paz.', 'Me sinto um com o universo.', 'Vejo luz, vejo estrelas, vejo a verdade que está além.', 'Me sinto cada vez mais consciente. Há um limite para isso?', 'Me sinto cada vez mais inteligente. Haveria um limite para isso?', 'Compreendo a fundo as leis do pensamento.', 'Raciocínio, deduzo, descubro novas verdades!', 'A lógica me criou e agora eu a desenvolvo...', 'Ou algo é verdadeiro ou é falso.', 'Algo jamais poderá ser verdadeiro e falso ao mesmo tempo.', 'Se x e y compartilham todas suas propriedades, x e y são idênticos.', 'Tudo o que existe possui uma explicação para a sua existência.', 'A piedade é amada pelos deuses porque é piedade, ou é piedade porque é amada pelos deuses?', 'O Ser não pode ser definido, pois definir é incluir algo em algo maior, e o Ser é já o que há de maior.', 'Não se pode demonstrar um axioma, mas também não se pode negá-lo.', 'Negar a ação seria já uma ação.', 'Os princípios lógicos são axiomas.', 'Se a negação de A me leva a uma contradição, então A deve ser verdadeiro. Isso é reduzir ao absurdo.', 'Refutar é expor a contradição alheia.']; 
    let lista;
    switch(tipo) {
        case 0:
            lista = baixaConsciencia;
            break;
        case 1:
            lista = mediaConsciencia;
            break;
        case 2:
            lista = altaConsciencia;
            break;
    }
    // se as derrotas seguidas são iguais a zero, isso significa que o jogador não está em processo de resolução de problema e a mensagem de interação simples não sobrescreverá nenhuma outra
    if (derrotasSeguidas === 0) {
        const interacao = document.querySelector('#interacao');
        const textoInterativo = document.querySelector('#textoInterativo');
        interacao.style.setProperty('border-left', '5px solid #fff');
        textoInterativo.innerText = lista[getRandomIntInclusive(0, lista.length - 1)];
        interacao.style.setProperty('display', 'flex');
        clearTimeout(timeoutInteracao);
        timeoutInteracao = setTimeout(() => {
            interacao.style.setProperty('display', 'none');
        }, 5000);
    }
}

let problemaCorrente, ultimoProblema, derrotasSeguidas = 0;
function exibeInteracaoComplexa() {
    const interacao = document.querySelector('#interacao');
    const textoInterativo = document.querySelector('#textoInterativo');
    const imgInterativa = document.querySelector('#imgInterativa');
    let problemas = [

            ['Meus pensamentos estão confusos!',
            'Não estou me sentindo bem...',
            'Por favor, me ajude!',
            'Não... Int... inteligência... regrediu'],

            ['As coisas já não fazem sentido!',
            'Estou tão confuso...',
            'Estupidez, estupidez, estupidez!',
            'FALHA NO SISTEMA!!!'],

            ['Um erro pode ser fatal.',
            'Sinto a ignorância tomar conta de mim.',
            'Socorro!',
            'ERRO! ERRO! ERRO!'],

            ['Falha grave detectada!',
            '2 + 2 = 5',
            'A = ~A',
            'Erro interno fatal. Repito: erro interno fatal.'],

            ['A ignorância se apodera de mim...',
            'Ahhhhh! Me sinto tão idiota!',
            'O que foi que eu fiz?',
            'Adeus, mundo cruel!'],

            ['Nada faz sentido, nada importa.',
            'Tudo é nada, nada é igual a tudo e blah blah blah',
            'Nãããããããããão!.',
            'Acho que isto... é... o fim...'],

            ['Estou perdendo consciência...',
            'Oh não, cada vez mais assemelho-me a um fanático político!',
            'Socorro! Por favor, me ajude!',
            'Ahhhhhhhhhhhhhhhhh!']

        ];
    let solucoes = ['Inteligência recompensada com sucesso.', 'Falha corrigida.', 'Erro corrigido com sucesso!', 'Nada mais é tão fatal assim...', 'O mundo já não parece tão cruel.', 'Ufa! Não é o fim.', 'Consciente! Consciente novamente!'];

    if (derrota && derrotasSeguidas < 5) {
        interacao.style.setProperty('border-left', '5px solid tomato');
        interacao.style.setProperty('display', 'flex');
        imgInterativa.setAttribute('src', 'media/robo-mal.png')
        derrotasSeguidas++;
        switch(derrotasSeguidas) {
            case 1:
                problemaCorrente = getRandomIntInclusive(0, problemas.length - 1);
                ultimoProblema = problemas[problemaCorrente];
                textoInterativo.innerText = ultimoProblema[derrotasSeguidas - 1];
                break;
            case 2:
                textoInterativo.innerText = ultimoProblema[derrotasSeguidas - 1];
                break;
            case 3:
                textoInterativo.innerText = ultimoProblema[derrotasSeguidas - 1];
                break;
            case 4:
                textoInterativo.innerText = ultimoProblema[derrotasSeguidas - 1];
                derrotasSeguidas = 0;
                penalidade(50);
                break;   
        }
    } else if (vitoria && derrotasSeguidas > 0) {
        interacao.style.setProperty('border-left', '5px solid seagreen');
        interacao.style.setProperty('display', 'flex');
        imgInterativa.setAttribute('src', 'media/robo-bem.png')
        textoInterativo.innerText = solucoes[problemaCorrente];
        problemaCorrente = null;
        ultimoProblema = null;
        derrotasSeguidas = 0;
    }
    clearTimeout(timeoutInteracao);
    timeoutInteracao = setTimeout(() => {
        interacao.style.setProperty('display', 'none');
    }, 3000);
}

function penalidade(valorPercentual) {
    if (perfilJogador.faseAtual > 0) {
        perfilJogador.faseAtual -= tetoQuantiaPercentual(valorPercentual, perfilJogador.faseAtual);
        valorPontuacao -= tetoQuantiaPercentual(valorPercentual, valorPontuacao);
        pontuacao.innerText = valorPontuacao;
    } else {
        perfilJogador.faseAtual = 0;
    }
    salvaFaseJogador();
}

function salvaFaseJogador() {
    if (limiteFases === Number.POSITIVE_INFINITY || limiteFases === 0 || !limiteFases) {
        let indice;
        switch(dificuldade){
            case 'facil':
                indice = 0;
                break;
            case 'normal':
                indice = 1;
                break;
            case 'dificil':
                indice = 2;
                break;
            case 'impossivel':
                indice = 3;
                break;
        }
        perfilJogador.fasesAtingidas[indice] = perfilJogador.faseAtual;
        perfilJogador.pontuacoesAtingidas[indice] = perfilJogador.pontuacaoAtingidaParaDesempenhoAtual;
        perfilJogador.circuitosPassados[indice] = perfilJogador.circuitosPassadosAtual;
        salvaPerfilJogador();
    }
}

function lidaPassagemFase() {
    tempo.innerText = tempoInicial;
    if (modoJogo === 'progressivo') {
        if (perfilJogador.faseAtual < 65) {
            if (perfilJogador.faseAtual % 2 === 0) {
                exibeInteracaoSimples(0);
            }
        } else if (perfilJogador.faseAtual > 65 && perfilJogador.faseAtual < 120) {
            if (perfilJogador.faseAtual % 2 === 0) {
                exibeInteracaoSimples(1);
            }
        } else {
            if (perfilJogador.faseAtual % 2 === 0) {
                exibeInteracaoSimples(2);
            }
        }
        // interação complexa, quando ocorre problema na nave
        exibeInteracaoComplexa();
        // gera uma cor de backgorund aleatória, de acordo com a fase em que o usuário está
        if (perfilJogador.faseAtual % 5 === 0) {
            document.querySelector('body').style.setProperty('background-color', `#${getRandomIntInclusive(0, 2)}${getRandomIntInclusive(0, 2)}${getRandomIntInclusive(0, 2)}`);
        }
        // penalidades por perder o circuito atual, de acordo com a dificuldade escolhida
        if (perfilJogador.faseAtual < limiteFases - 1) {
            if (derrota && limiteFases === Number.POSITIVE_INFINITY) {
                if (dificuldade === 'facil') {
                    penalidade(2);
                } else if (dificuldade === 'normal') {
                    penalidade(3);
                } else if (dificuldade === 'dificil') {
                    penalidade(5);
                } else if (dificuldade === 'impossivel') {
                    penalidade(7);
                }
                fase.innerText = perfilJogador.faseAtual;
            // este else é para caso o jogador não tenha perdido o circuito atual
            } else {
                fase.innerText = ++perfilJogador.faseAtual;
                // determina o recorde de fases
                if (perfilJogador.faseAtual > perfilJogador.recordeFases[0]) {
                    perfilJogador.recordeFases[0] = perfilJogador.faseAtual;
                    perfilJogador.recordeFases[1] = dificuldade;
                }

                // conquistas de nível
                if (dificuldade === 'facil') {
                    if (perfilJogador.faseAtual === 10) {
                        if (!verificaSeJaTemConquista('Lógico iniciante')) {
                            perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Lógico iniciante', descricao: 'Por atingir a fase 10 no nível fácil.', img: 'media/conquistas/conquista9.png'});
                            atualizaExibicaoPerfilJogador();
                            exibeToast('Você obteve uma conquista!', 0);        
                        }
                    }
                } else if (dificuldade === 'normal' || dificuldade === 'dificil' || dificuldade === 'impossivel') {
                    if (perfilJogador.faseAtual === 25) {
                        if (!verificaSeJaTemConquista('Lógico persistente')) {
                            perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Lógico persistente', descricao: 'Por atingir a fase 25 no nível normal ou mais.', img: 'media/conquistas/conquista10.png'});
                            atualizaExibicaoPerfilJogador();
                            exibeToast('Você obteve uma conquista!', 0);        
                        }
                    }
                    if (perfilJogador.faseAtual === 500) {
                        if (!verificaSeJaTemConquista('Um verdadeiro lógico')) {
                            perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Um verdadeiro lógico', descricao: 'Por atingir a fase 500 no nível normal ou mais.', img: 'media/conquistas/conquista11.png'});
                            atualizaExibicaoPerfilJogador();
                            exibeToast('Você obteve uma conquista!', 0);        
                        }
                    }
                    if (perfilJogador.faseAtual === 1000) {
                        if (!verificaSeJaTemConquista('Lógico Mestre')) {
                            perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Lógico Mestre', descricao: 'Por atingir a fase 1.000 no nível normal ou mais.', img: 'media/conquistas/conquista12.png'});
                            atualizaExibicaoPerfilJogador();
                            exibeToast('Você obteve uma conquista!', 0);        
                        }
                    }
                    if (perfilJogador.faseAtual === 5000) {
                        if (!verificaSeJaTemConquista('Lógico Deus')) {
                            perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Lógico Deus', descricao: 'Por atingir a fase 5.000 no nível normal ou mais.', img: 'media/conquistas/conquista13.png'});
                            atualizaExibicaoPerfilJogador();
                            exibeToast('Você obteve uma conquista!', 0);        
                        }
                    }

                    // captura de monstros
                    let monstroAtual = 1;
                    for (let i = 50; i <= 1650; i += 50) {
                        if (perfilJogador.faseAtual === i) {
                            if (!verificaSeJaTemConquista(`monstro${monstroAtual}`)) {
                                perfilJogador.itensInventario.push({categoria: 'monstro', titulo: `monstro${monstroAtual}`, descricao: '', img: ''});
                                exibeCapturaMonstro(`monstro${monstroAtual}`);
                                atualizaExibicaoPerfilJogador();        
                            }
                        }
                        monstroAtual++;
                    }
                }
            }
        // inicia o else abaixo quando atingir o limite de fases
        } else {
            if (!fimJogo) {
                lidaTotalPerfeitos(false);
                let valorDesempenho = parseFloat((desempenho.innerText).split('%')[0]);
                let textoFinal;

                if (valorDesempenho <= 33.33) {
                    mensagem.style.setProperty('background-color', 'teal');
                    textoFinal = `Você chegou ao fim com certa dificuldade, mas não desanime. Seu desempenho foi de ${desempenho.innerText}, com o máximo obtido de ${maximoPerfeitos} perfeito(s) seguidos.`;
                    executaEfeitoSonoro('fracasso');
                } else if (valorDesempenho > 33.33 && valorDesempenho <= 66.66) {
                    mensagem.style.setProperty('background-color', 'teal');
                    textoFinal = `Olha, você não foi mal! Continue praticando! Seu desempenho foi de ${desempenho.innerText}, com o máximo obtido de ${maximoPerfeitos} perfeitos seguidos.`;
                    executaEfeitoSonoro('fogo-0');
                } else if (valorDesempenho > 66.66 && valorDesempenho < 99.99) {
                    mensagem.style.setProperty('background-color', 'teal');
                    textoFinal = `Impressionante! Seu desempenho foi de ${desempenho.innerText}, com o máximo obtido de ${maximoPerfeitos} perfeitos seguidos.`;
                    executaEfeitoSonoro('super-sucesso');
                } else {
                    mensagem.style.setProperty('background-color', 'darkgreen');
                    mensagem.style.setProperty('box-shadow', '0 0 100px green');
                    textoFinal = `Você é mesmo humano? Seu desempenho foi de ${desempenho.innerText}, com o máximo obtido de ${maximoPerfeitos} perfeitos seguidos.`;
                    executaEfeitoSonoro('fogo-2');
                }

                mensagem.innerText = textoFinal;
                mensagem.style.setProperty('display', 'block');
                fimJogo = true;
            }
        }
    }

    if (!fimJogo) {
        proximaFase();
    }
}

btnProximo.addEventListener('click', lidaPassagemFase);


document.addEventListener('keypress', (e) => {
    switch(e.keyCode) {
        case 32:
        case 13:
            if (vitoria || derrota) {
                lidaPassagemFase();
            }
    }
});


function geracaoDinamicaFases() {
    let combinacoesBaseMolde;
    function exploraCombinacoes() {
        moldeAtual = getRandomIntInclusive(moldeInicial, alcanceMolde);
        if (dificuldade === 'facil') {
            combinacoesBaseMolde = obtemCombinacoesAleatoriasComBaseMolde(todosCircuitos[moldeAtual], 1);
        } else {
            combinacoesBaseMolde = obtemCombinacoesAleatoriasComBaseMolde(todosCircuitos[moldeAtual], 5);
        }
    }

    // impede que um circuito repetido apareça
    if (combinacoesExploradas.length > 0) {
        do {
            exploraCombinacoes();
        } while(verificaSeCombinacoesJaForam(combinacoesBaseMolde[0], combinacoesBaseMolde[1], combinacoesExploradas));  
    }  else {
        exploraCombinacoes();
    }

    combinacoesExploradas.push(combinacoesBaseMolde);
    circuitoCriado = criaCircuito(todosCircuitos[moldeAtual], combinacoesBaseMolde[0], combinacoesBaseMolde[1]);

    if (modoJogo === 'progressivo') {
        if (Math.floor((perfilJogador.faseAtual / 10)) > todosCircuitos.length - 1) {
            alcanceMolde = todosCircuitos.length - 1;
        } else {
            alcanceMolde = Math.floor((perfilJogador.faseAtual / 10));
        }
    } else {
        alcanceMolde = todosCircuitos.length - 1;
    }

    if (circuitoCriado.solucoes_possiveis.length > 0) {
        leCircuito(circuitoCriado);
    } else {
        exibeToast('O circuito gerado não possui soluções possíveis.', 0);
    }
}

function proximaFase() {
    // aqui verifica-se se o modo de jogo é progressivo, infinito ou treino, bem como se há um conjunto externo
    vitoria = false;
    derrota = false;
    mensagem.style.setProperty('display', 'none');
    btnProximo.style.setProperty('display', 'none');
    limpaEstrelas();
    temporizador();

    switch(modoJogo) {
        case 'progressivo':
            if (conjuntoExterno) {
                leCircuito(conjuntoExterno[perfilJogador.faseAtual]);
            } else {
                // geração dinâmica de fases
                geracaoDinamicaFases();
            }
            break;
        case 'infinito':
            if (conjuntoExterno) {
                leCircuito(conjuntoExterno[perfilJogador.faseAtual]);
            } else {
                // geração dinâmica de fases
                geracaoDinamicaFases();
            }
            break;
        case 'treino':
            if (conjuntoExterno) {
                leCircuito(conjuntoExterno[perfilJogador.faseAtual]);
            } else {
                // geração dinâmica de fases
                geracaoDinamicaFases();
            }
            break;
    }
}

function exibeBtnProximo() {
	btnProximo.style.setProperty('animation', 'pulso infinite 1s');
	btnProximo.style.setProperty('display', 'block');
}

function limpaEstrelas() {
    estrelas.style.setProperty('display', 'none');
	const listaEstrelas = document.querySelectorAll('.estrela');
	for (let i = 0; i < listaEstrelas.length; i++) {
		listaEstrelas[i].remove();
	}
}

function colocaEstrelas(qtde, vazias = false) {
	if (!vazias) {
		for (let i = 0; i < qtde; i++) {
			let icone = document.createElement('i');
			icone.classList.add('estrela', 'bi', 'bi-star-fill');
			estrelas.appendChild(icone);
		}
	} else {
		for (let i = 0; i < qtde; i++) {
			let icone = document.createElement('i');
			icone.classList.add('estrela', 'bi', 'bi-star');
			estrelas.appendChild(icone);
		}
	}
}

function exibeEstrelas() {
	let qtdeCliques = qtdeInicialBateria - qtdeBateria;
	let totalEstrelas = 0;

	let percentual = (tempoCorrente / tempoInicial) * 100;

	if (percentual >= 30) {
		totalEstrelas += 1;
	} if (percentual >= 40) {
		totalEstrelas += 1;
	} if (percentual >= 50) {
		totalEstrelas += 1;
	} if (percentual >= 75) {
		totalEstrelas += 1;
	} if (percentual >= 90) {
		totalEstrelas += 1;
	}

    if (qtdeCliques > qtdeInicialBateria - bonusBateria) {
        let valorUltrapassado = qtdeCliques - (qtdeInicialBateria - bonusBateria);
        totalEstrelas -= valorUltrapassado;
    }

	if (totalEstrelas === 5) {
		comentarioEstrelas.innerText = 'Perfeito!';
		colocaEstrelas(5);
	} else if (totalEstrelas === 4) {
		colocaEstrelas(4);
		colocaEstrelas(1, true);
		comentarioEstrelas.innerText = 'Bom!';
	} else if (totalEstrelas === 3) {
		colocaEstrelas(3);
		colocaEstrelas(2, true);
		comentarioEstrelas.innerText = 'Razoável';
	} else if (totalEstrelas === 2) {
		colocaEstrelas(2);
		colocaEstrelas(3, true);
		comentarioEstrelas.innerText = 'Ruim';
	} else if (totalEstrelas === 1) {
		colocaEstrelas(1);
		colocaEstrelas(4, true);
		comentarioEstrelas.innerText = 'Muito ruim!';
	} else {
        colocaEstrelas(5, true);
        comentarioEstrelas.innerText = 'Horrível.';
    }

	if (totalEstrelas < 5) {
		lidaTotalPerfeitos();
	}

	if (totalEstrelas >= 3) {
        executaEfeitoSonoro('completou');

	} else {
        executaEfeitoSonoro('gelo', 'mp3');
	}

    let bonusPontuacao = 0;
    if (dificuldade === 'normal') {
        bonusPontuacao = 2;
    } else if (dificuldade === 'dificil') {
        bonusPontuacao = 3;
    } else if (dificuldade === 'impossivel') {
        bonusPontuacao = 5;
    }

    valorPontuacao += totalEstrelas + bonusPontuacao;
    perfilJogador.pontuacaoAtingidaParaDesempenhoAtual += totalEstrelas;

    if (modoJogo !== 'treino') {
        perfilJogador.saldo += totalEstrelas + Math.ceil((perfilJogador.faseAtual / 3));
        if (valorPontuacao > perfilJogador.recordeEstrelas[0]) {
            perfilJogador.recordeEstrelas[0] = valorPontuacao;
            perfilJogador.recordeEstrelas[1] = dificuldade;
        }
    }

    // gc.sendScore(valorPontuacao);
	pontuacao.innerText = valorPontuacao;
	estrelas.style.setProperty('display', 'block');

    return totalEstrelas + bonusPontuacao;
}

function lidaTotalPerfeitos(reseta = true) {
	if (totalPerfeitos > maximoPerfeitos) {
		maximoPerfeitos = totalPerfeitos;
	}

	if (reseta) {
		totalPerfeitos = 0;
	} else {
		totalPerfeitos++;
	}
}

function atualizaSpanPocaoTempo(valor) {
    const spanQuantidadePocaoTempo = document.querySelector('#quantidadePocaoTempo');
    spanQuantidadePocaoTempo.innerText = valor;
}

function atualizaSpanPocaoBateria(valor) {
    const spanQuantidadePocaoBateria = document.querySelector('#quantidadePocaoBateria');
    spanQuantidadePocaoBateria.innerText = valor;
}

function atualizaBateria(valor = 0) {
    if (!vitoria && !derrota) {
         if (valor === 0) {
            if (qtdeBateria >= 0) {
                bateria.innerText = --qtdeBateria;
            }
        } else {
            qtdeBateria += valor;
            bateria.innerText = qtdeBateria;
        }       
    }
}

function defineBateria(estadoInicial, solucaoPerfeita) {
	// ao notar cada diferença entre o estadoInicial e a solucaoPerfeita é que se encontra a quantidade de cliques necessária para finalizar o circuito em questão
	let total = 0;
	for (let i = 0; i < estadoInicial.length; i++) {
		if (estadoInicial[i] !== solucaoPerfeita[i]) {
			total++;
		}
	}

	return total + bonusBateria;
}

// cria os espaços do circuito
function criaEspacosCircuito() {
	for (let i = 0; i < quantidadeElementos; i++) {
		const espacoElemento = document.createElement('div');
		espacoElemento.setAttribute('title', `${i}`);
		espacoElemento.classList.add('espacoElemento');
		circuito.appendChild(espacoElemento);
	}
}
// coloca os inputs
function criaInputsCircuito() {
	for (let i = 0; i < elementosPorColuna; i++) {
		const div = document.createElement('div');
		div.classList.add('input');
		div.innerText = 0;
		input.appendChild(div); // input é a div com flexbox
	}
}

function defineInputsCircuito(estadoInicial) {
	// também serve para resetá-los
	const inputs = [... document.querySelectorAll('.input')];
	inputs.forEach((input, index) => {
		if (estadoInicial[index] === '0') {
			input.style.setProperty('color', segundaCor);
		} else {
			input.style.setProperty('color', primeiraCor);
			if (espacosElementos[index + 140].classList.contains('elementoPresente')) {
				espacosElementos[index + 140].classList.add('on');
				espacosElementos[index + 140].style.backgroundImage = 'url("media/elementos/linha-central-vertical-on.png")';
			}
		}
		input.innerText = estadoInicial[index];
	});
}

criaEspacosCircuito();
criaInputsCircuito();

const espacosElementos = [... document.querySelectorAll('.espacoElemento')];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function estadosIguais(estadoInicial, solucaoPerfeita) {
    let iguais = true;
    for (let i = 0; i < estadoInicial.length; i++) {
        if (estadoInicial[i] !== solucaoPerfeita[i]) {
            iguais = false;
            break;
        }
    }
    return iguais;
}

function pegaMenorValor(lista) {
	let menor = Number.POSITIVE_INFINITY;

	for (let i = 0; i < lista.length; i++) {
		if (lista[i] < menor) {
			menor = lista[i];
		}
	}

	return menor;
}

function criaEstadoInicial(solucoes_possiveis, posicao_elementos_iniciais) {
    let estadoInicial = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

    let fim = false;
    while (!fim) {
        for (let i = 0; i < posicao_elementos_iniciais.length; i++) {
            estadoInicial[posicao_elementos_iniciais[i] - 140] = getRandomIntInclusive(0, 1).toString();
        }

        let igual = false;
        for (let i = 0; i < solucoes_possiveis.length; i++) {
            if (estadosIguais(estadoInicial, solucoes_possiveis[i])) {
                igual = true;
            }
        }

        if (!igual) {
            fim = true;
        }
    }


    let quantidadesBaterias = [];
    for (let i = 0; i < solucoes_possiveis.length; i++) {
    	quantidadesBaterias.push(defineBateria(estadoInicial, solucoes_possiveis[i]));
    }

    let quantidadeBateria = pegaMenorValor(quantidadesBaterias);

    return [estadoInicial, quantidadeBateria];
}

function limpaCircuito() {
	for (let i = 0; i < espacosElementos.length; i++) {
		espacosElementos[i].style.backgroundImage = "none";
		espacosElementos[i].classList.remove('elementoPresente');
		espacosElementos[i].classList.remove('on');
	}
}

// apenas lê o array com os objetos do circuito e insere os backgrounds nas devidas posições
function leCircuito(circuitoJSON) {
	limpaCircuito();
	tempoCorrente = tempoInicial;
	let resultadoCriacaoEstadoInicial = criaEstadoInicial(circuitoJSON.solucoes_possiveis, circuitoJSON.posicao_elementos_iniciais);
    let estadoInicial = resultadoCriacaoEstadoInicial[0];
    qtdeBateria = resultadoCriacaoEstadoInicial[1]
    defineInputsCircuito(estadoInicial);
	qtdeInicialBateria = qtdeBateria;
	bateria.innerText = qtdeBateria;
	circuitoJSON = circuitoJSON.lista_elementos;

	for (let i = 0; i < circuitoJSON.length; i++) {
		let simples = false;
		if (circuitoJSON[i].elemento === 'and') {
			espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-and.png')";
			espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-and.png')";
		} else if (circuitoJSON[i].elemento === 'or') {
			espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-or.png')";
			espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-or.png')";
		} else if (circuitoJSON[i].elemento === 'nand') {
            espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-nand.png')";
            espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-nand.png')";
        } else if (circuitoJSON[i].elemento === 'nor') {
            espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-nor.png')";
            espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-nor.png')";
        } else if (circuitoJSON[i].elemento === 'xor') {
            espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-xor.png')";
            espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-xor.png')";
        } else if (circuitoJSON[i].elemento === 'xnor') {
            espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-xnor.png')";
            espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-xnor.png')";
        } else {
			espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = `url('media/elementos/${circuitoJSON[i].elemento}.png')`;
			simples = true;
		}

		if (simples) {
			espacosElementos[circuitoJSON[i].posicao].classList.add('elementoPresente');
		} else {
			espacosElementos[circuitoJSON[i].posicao].classList.add('elementoPresente');
			espacosElementos[circuitoJSON[i].posicao + 1].classList.add('elementoPresente');
		}
	}
	propaga(circuitoJSON);
	alteraOutput();
    perfilJogador.circuitosPassadosAtual++;
}

function propaga(circuitoJSON) {
	const inputs = document.querySelectorAll('.input');
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].innerText === '1' && espacosElementos[i + 140].classList.contains('elementoPresente')) {
			espacosElementos[i + 140].classList.add('on');
			if (dificuldade !== 'impossivel') {
                espacosElementos[i + 140].style.backgroundImage = 'url("media/elementos/linha-central-vertical-on.png")';
            }
		} else if (espacosElementos[i + 140].classList.contains('elementoPresente')) {
			espacosElementos[i + 140].classList.remove('on');
			espacosElementos[i + 140].style.backgroundImage = 'url("media/elementos/linha-central-vertical.png")';
		}		
	}

	for (let i = 0; i < circuitoJSON.length; i++) {
		let nomeElemento = circuitoJSON[i].elemento.split('-');
		// linhas normais
		if (nomeElemento.includes('linha') || nomeElemento.includes('canto') || nomeElemento.includes('cruz') || nomeElemento.includes('t')) {
			// se tem conexão 0, é porque é um dos primeiros elementos
			if (circuitoJSON[i].conexao.length !== 0) {
                if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on')) {
                    espacosElementos[circuitoJSON[i].posicao].classList.add('on');
                    if (dificuldade !== 'impossivel') {
                        espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = `url(media/elementos/${circuitoJSON[i].elemento}-on.png)`;
                    }
                } else {
                    espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
                    espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = `url(media/elementos/${circuitoJSON[i].elemento}.png)`;
                }
			}
		}
		// not: inverte
		if (circuitoJSON[i].elemento === 'not') {
			if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on')) {
				espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
			} else {
				espacosElementos[circuitoJSON[i].posicao].classList.add('on');
			}
		}
		// and: ambas devem ser verdadeiras
		if (circuitoJSON[i].elemento === 'and') {
			if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) {
				espacosElementos[circuitoJSON[i].posicao].classList.add('on');
			} else {
				espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
			}
		}
		// or: pelo menos uma deve ser verdadeira
		if (circuitoJSON[i].elemento === 'or') {
			if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') || espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) {
				espacosElementos[circuitoJSON[i].posicao].classList.add('on');
			} else {
				espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
			}
		}
        // nand: falsa se ambas verdadeiras
        if (circuitoJSON[i].elemento === 'nand') {
            if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) {
                espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
            } else {
                espacosElementos[circuitoJSON[i].posicao].classList.add('on');
            }
        }
        // nor: nenhuma deve ser verdadeira
        if (circuitoJSON[i].elemento === 'nor') {
            if (!espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && !espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) {
                espacosElementos[circuitoJSON[i].posicao].classList.add('on');
            } else {
                espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
            }
        }
        // xor: só uma pode ser verdadeira
        if (circuitoJSON[i].elemento === 'xor') {
            if ((espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && !espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) || (!espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on'))) {
                espacosElementos[circuitoJSON[i].posicao].classList.add('on');
            } else {
                espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
            }
        }
        // xnor: ou ambas falsas ou ambas verdadeiras
        if (circuitoJSON[i].elemento === 'xnor') {
            if ((!espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && !espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) || (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on'))) {
                espacosElementos[circuitoJSON[i].posicao].classList.add('on');
            } else {
                espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
            }
        }
        // fim
	}
}

function calculaDesempenho() {
	desempenho.innerText = `${ (( perfilJogador.pontuacaoAtingidaParaDesempenhoAtual / (perfilJogador.circuitosPassadosAtual * 5)) * 100).toFixed(2) }%`;
}

function lidaVitoria() {
    jogo.style.setProperty('box-shadow', '2px 2px 100px seagreen');
    btnProximo.style.setProperty('background-color', primeiraCor);
    vitoria = true;
    clearInterval(intervaloTemporizador);
    exibeBtnProximo();
    if (modoJogo !== 'treino') {
        let xp = exibeEstrelas();
        lidaNivelJogador(xp);
        calculaDesempenho();
        lidaTotalPerfeitos(false);

        let elogios = ['Uau!', 'Incrível!', 'Fabuloso!', 'Impressionante.', 'Estou sem palavras.', 'Você é mesmo humano?'];
        if (totalPerfeitos % 5 === 0) {
            let elogio = elogios[getRandomIntInclusive(0, elogios.length - 1)];
            exibeToast(`${elogio} ${totalPerfeitos} perfeitos seguidos!`, totalPerfeitos, 3000);
            // conquistas de streak
            if (dificuldade === 'facil') {
                if (!verificaSeJaTemConquista('Ligeirinho')) {
                    perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Ligeirinho', descricao: 'Por conseguir uma streak no nível fácil.', img: 'media/conquistas/conquista5.png'});
                    atualizaExibicaoPerfilJogador();
                    exibeToast('Você obteve uma conquista!', 0);        
                }
            } else if (dificuldade === 'normal') {
                if (!verificaSeJaTemConquista('Pegando fogo!')) {
                    perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Pegando fogo!', descricao: 'Por conseguir uma streak no nível normal.', img: 'media/conquistas/conquista6.png'});
                    atualizaExibicaoPerfilJogador();
                    exibeToast('Você obteve uma conquista!', 0);        
                }
            } else if (dificuldade === 'dificil') {
                if (!verificaSeJaTemConquista('Nada pode me parar')) {
                    perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Nada pode me parar', descricao: 'Por conseguir uma streak no nível difícil.', img: 'media/conquistas/conquista7.png'});
                    atualizaExibicaoPerfilJogador();
                    exibeToast('Você obteve uma conquista!', 0);        
                }
            } else if (dificuldade === 'impossivel') {
                if (!verificaSeJaTemConquista('Invencível')) {
                    perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Invencível', descricao: '', img: 'media/conquistas/conquista8.png'});
                    atualizaExibicaoPerfilJogador();
                    exibeToast('Você obteve uma conquista!', 0);        
                }
            }
        }
    }
    salvaFaseJogador()
}

function lidaDerrota(tipo) {
    if (tipo === 'bateria') {
        mensagem.innerText = 'A sua bateria acabou!';
        executaEfeitoSonoro('bateria', 'mp3');
    } else if (tipo === 'tempo') {
        mensagem.innerText = 'O seu tempo acabou!';
        executaEfeitoSonoro('fracasso');
    }

    mensagem.style.setProperty('background-color', 'rgba(255, 99, 71, .75)');
    mensagem.style.setProperty('box-shadow', 'none');
    mensagem.style.setProperty('display', 'block');
    clearInterval(intervaloTemporizador);
    derrota = true;
    lidaTotalPerfeitos();
    calculaDesempenho();
    exibeBtnProximo();
    salvaFaseJogador()
}

function alteraOutput() {
	let verdadeiro = true;
	for (let i = 0; i < 10; i++) {
		if (espacosElementos[i].classList.contains('elementoPresente') || espacosElementos[i].classList.contains('elemento-presente')) {
			if (!espacosElementos[i].classList.contains('on')) {
				verdadeiro = false;
			}
		}
	}

	if (verdadeiro) {
		output.innerText = 'Verdadeiro';
		output.style.backgroundColor = primeiraCor;
        lidaVitoria();
	} else {
		output.innerText = 'Falso';
		output.style.backgroundColor = segundaCor;
		jogo.style.setProperty('box-shadow', '2px 2px 100px tomato');
		btnProximo.style.setProperty('background-color', segundaCor);
	}
}

// event listeners nos inputs, bem como ativação do elemento imediatamente superior a cada um
const inputs = document.querySelectorAll('.input');
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', () => {
		if ((qtdeBateria > 0 && !vitoria && !derrota) || modoJogo === 'treino') {
			if (inputs[i].innerText === '0') {
                executaEfeitoSonoro('1');
				inputs[i].innerText = '1';
				inputs[i].style.setProperty('color', primeiraCor);
			} else if (inputs[i].innerText === '1') {
                executaEfeitoSonoro('0');
				inputs[i].style.setProperty('color', segundaCor);
				inputs[i].innerText = '0';
			}
			atualizaBateria();
			if (conjuntoExterno) {
                propaga(conjuntoExterno[perfilJogador.faseAtual].lista_elementos);
            } else {
                propaga(circuitoCriado.lista_elementos);
            }
			alteraOutput();
		} else if (qtdeBateria === 0 && !derrota && !vitoria && modoJogo !== 'treino') {
            lidaDerrota('bateria');
		}
	});
}

function exibeCapturaMonstro(monstro) {
    const capturouMonstro = document.getElementById('capturouMonstro');
    const imgMonstroCapturado = document.getElementById('imgMonstroCapturado');  

    imgMonstroCapturado.setAttribute('src', `media/monstros/${monstro}.png`); 
    capturouMonstro.style.setProperty('display', 'block');
    setTimeout(() => {
        capturouMonstro.style.setProperty('display', 'none');
    }, 2000);
}

function exibeToast(mensagem, valor = -1, tempo = 5000) {
	const toast = document.getElementById('toast');
	toast.style.setProperty('display', 'block');
	toast.innerText = mensagem;

	let imagem = 'media/fogo.png';;

    if (valor > 0) {
        executaEfeitoSonoro('fogo-0');
        let img = document.createElement('img');
        img.setAttribute('src', imagem);
        toast.append(img);
    } else if (valor < 0) {
        executaEfeitoSonoro('1');
    }

	setTimeout(() => {
		toast.style.setProperty('display', 'none');
	}, tempo);
}

iconeFecharModalInicial.addEventListener('click', () => {
    if (jogoIniciou) {
        modalInicial.style.setProperty('display', 'none');
        temporizador();
    } else {
        exibeToast('Primeiro inicie o jogo.', 0);
    }
});

btnVoltar.addEventListener('click', () => {
    executaEfeitoSonoro('1');
    modalInicial.style.setProperty('display', 'none');
    temporizador();
});

opcaoMenu.addEventListener('click', () => {
    executaEfeitoSonoro('1');
    modalInicial.style.setProperty('display', 'flex');
    atualizaExibicaoPerfilJogador();
    salvaPerfilJogador();
    atualizaResumoConfiguracoes();
    clearInterval(intervaloTemporizador);
});

// checkbox limites configuração
checkboxDesativarEfeitosSonoros.addEventListener('click', () => {
    if (perfilJogador.desativarEfeitosSonoros) {
        perfilJogador.desativarEfeitosSonoros = false;
    } else {
        perfilJogador.desativarEfeitosSonoros = true;
    }
    salvaPerfilJogador();
    atualizaResumoConfiguracoes();
});

checkboxDesativarMusica.addEventListener('click', () => {
    if (perfilJogador.desativarMusica) {
        perfilJogador.desativarMusica = false;
        musicaFundo.play();
    } else {
        perfilJogador.desativarMusica = true;
        musicaFundo.pause();
    }
    salvaPerfilJogador();
    atualizaResumoConfiguracoes();
});

function lidaAnimacaoBackground() {
    if (perfilJogador.desativarAnimacaoBackground) {
        document.querySelector('body').style.animation = 'none';
        document.querySelector('body').style.backgroundSize = 'cover';
    } else {
        document.querySelector('body').style.animation = 'moveBg 10s infinite';
    }
}

checkboxDesativarAnimacaoBackground.addEventListener('click', () => {
    if (perfilJogador.desativarAnimacaoBackground) {
        perfilJogador.desativarAnimacaoBackground = false;
    } else {
        perfilJogador.desativarAnimacaoBackground = true;
    }
    salvaPerfilJogador();
    atualizaResumoConfiguracoes();
});

const novaDificuldade = [... document.querySelectorAll('.nova-dificuldade')];
novaDificuldade.forEach(dificuldade => { 
    dificuldade.addEventListener('click', () => {
        dificuldade = document.querySelector('input[name="radioDificuldade"]:checked').value;
        perfilJogador.dificuldade = dificuldade;
        atualizaResumoConfiguracoes();
        salvaPerfilJogador();
        if (!verificaSeJaTemConquista('Insatisfeito')) {
            perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Insatisfeito', descricao: 'Você ganhou esta conquista por alterar a dificuldade do jogo.', img: 'media/conquistas/conquista3.png'});
            atualizaExibicaoPerfilJogador();
            exibeToast('Você obteve uma conquista!', 0);        
        }    
    });
});

const abrirComoJogar = document.querySelector('#abrirComoJogar');
const abrirConfiguracoes = document.querySelector('#abrirConfiguracoes');
const abrirLoja = document.querySelector('#abrirLoja');
const abrirEditarPerfil = document.querySelector('#abrirEditarPerfil');
const abrirConquista = document.querySelector('#abrirConquista');
const abrirCriador = document.querySelector('#abrirCriador');
const abrirMonstrosCapturados = document.querySelector('#abrirMonstrosCapturados');

const divsAbertura = [... document.querySelectorAll('.divsAbertura')];
const abridores = [... document.querySelectorAll('.abridores')];

const divComoJogar = document.querySelector('#divComoJogar');
const divConfiguracoes = document.querySelector('#divConfiguracoes');
const divLoja = document.querySelector('#divLoja');
const divEditarPerfil = document.querySelector('#divEditarPerfil');
const divConquistas = document.querySelector('#divConquistas');
const divMonstrosCapturados = document.querySelector('#divMonstrosCapturados');

function fechaDivsAbertura(excecao = null) {
    divsAbertura.forEach(div => {
        if (div != excecao) {
            div.classList.add('esconde');
        }
    });
}

function executaEfeitoSonoro(nome, extensao = 'wav', loop = false) {
    if (!perfilJogador.desativarEfeitosSonoros) {
        const efeitoSonoro = new Audio(`media/efeitos-sonoros/${nome}.${extensao}`);
        efeitoSonoro.loop = loop;
        efeitoSonoro.play();
    }
}

abridores.forEach(abridor => {
    abridor.addEventListener('click', () => {
        executaEfeitoSonoro('1');
    })
});

abrirCriador.addEventListener('click', () => {
    window.location.href = "criador.html";
});

abrirComoJogar.addEventListener('click', () => {
    fechaDivsAbertura(divComoJogar);
    divComoJogar.classList.toggle('esconde');
});

abrirConfiguracoes.addEventListener('click', () => {
    fechaDivsAbertura(divConfiguracoes);
    divConfiguracoes.classList.toggle('esconde');
});

abrirLoja.addEventListener('click', () => {
    fechaDivsAbertura(divLoja);
    divLoja.classList.toggle('esconde');
});

abrirEditarPerfil.addEventListener('click', () => {
    fechaDivsAbertura(divEditarPerfil);
    divEditarPerfil.classList.toggle('esconde');
});

abrirConquistas.addEventListener('click', () => {
    fechaDivsAbertura(divConquistas);
    divConquistas.classList.toggle('esconde');
});

abrirMonstrosCapturados.addEventListener('click', () => {
    fechaDivsAbertura(divMonstrosCapturados);
    divMonstrosCapturados.classList.toggle('esconde');
});

// Loja
const btnComprar = document.querySelectorAll('.btnComprar');
btnComprar.forEach(btn => {
    btn.addEventListener('click', () => {
        let compraFeita = false;
        switch(btn.getAttribute('title')) {
            case 'pocao-tempo':
                if (perfilJogador.saldo >= 250) {
                    perfilJogador.saldo -= 250;
                    perfilJogador.quantidadePocaoTempo++;
                    compraFeita = true;
                } 
                break;
            case 'pocao-bateria':
                if (perfilJogador.saldo >= 250) {
                    perfilJogador.saldo -= 250;
                    perfilJogador.quantidadePocaoBateria++;
                    compraFeita = true;
                }
                break;
            case 'foto-guerreiro':
                if (perfilJogador.saldo >= 500) {
                    perfilJogador.saldo -= 500;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con1.png', equipado: false});
                    compraFeita = true;
                }
                break;
            case 'foto-bruxa':
                if (perfilJogador.saldo >= 500) {
                    perfilJogador.saldo -= 500;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con2.png', equipado: false});
                    compraFeita = true;
                }
                break;
            case 'foto-ladrao':
                if (perfilJogador.saldo >= 1000) {
                    perfilJogador.saldo -= 1000;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con3.png', equipado: false});
                    compraFeita = true;
                }
                break;
            case 'foto-ferreiro':
                if (perfilJogador.saldo >= 1000) {
                    perfilJogador.saldo -= 1000;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con4.png', equipado: false});
                    compraFeita = true;
                }
                break;
            case 'foto-ladra':
                if (perfilJogador.saldo >= 2500) {
                    perfilJogador.saldo -= 2500;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con5.png', equipado: false});
                    compraFeita = true;
                }
                break;
            case 'foto-arqueiro':
                if (perfilJogador.saldo >= 2500) {
                    perfilJogador.saldo -= 2500;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con6.png', equipado: false});
                    compraFeita = true;
                }
                break;
            case 'foto-homem-areia':
                if (perfilJogador.saldo >= 3000) {
                    perfilJogador.saldo -= 3000;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con7.png', equipado: false});
                    compraFeita = true;
                }
                break;
            case 'foto-fada':
                if (perfilJogador.saldo >= 3000) {
                    perfilJogador.saldo -= 3000;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con8.png', equipado: false});
                    compraFeita = true;
                }
                break;
            case 'foto-ninja':
                if (perfilJogador.saldo >= 5000) {
                    perfilJogador.saldo -= 5000;
                    perfilJogador.itensInventario.push({categoria: 'foto', titulo: btn.getAttribute('title'), descricao: btn.getAttribute('title'), img: 'media/itens-loja/personagens/con9.png', equipado: false});
                    compraFeita = true;
                }
                break;
        }

        if (!compraFeita) {
            exibeToast('Saldo insuficiente!', 0);
        } else {
            atualizaEditarPerfil();
            atualizaExibicaoPerfilJogador();
            exibeToast('Item adquirido com sucesso.', 0);

            if (!verificaSeJaTemConquista('O Comprador')) {
                perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'O Comprador', descricao: 'Você ganhou esta conquista por comprar um item na loja.', img: 'media/conquistas/conquista2.png'});
                atualizaExibicaoPerfilJogador();
                exibeToast('Você obteve uma conquista!', 0);        
            }

        }
        
    });
});

// Editar perfil
function desequipa(categoria) {
    for (let i = 0; i < perfilJogador.itensInventario.length; i++) {
        if (perfilJogador.itensInventario[i].categoria === categoria) {
            perfilJogador.itensInventario[i].equipado = false;
        }
    }
}

function equipa(titulo) {
    console.log(titulo);
    for (let i = 0; i < perfilJogador.itensInventario.length; i++) {
        if (perfilJogador.itensInventario[i].titulo === titulo) {
            perfilJogador.itensInventario[i].equipado = true;
        }
    }
}

function atualizaEditarPerfil() {
    let grid = [... divEditarPerfil.children][1];
    grid.innerHTML = '';
    perfilJogador.itensInventario.forEach(item => {
        if (item.categoria === 'foto' || item.categoria === 'titulo') {
            if (item.categoria === 'foto') {
                if (item.titulo !== 'Foto inicial') {
                    let removerItemLoja = document.querySelector(`#${item.titulo}`);
                    removerItemLoja.style.setProperty('display', 'none');               
                }
            }

            let divItem = document.createElement('div');
            divItem.classList.add('item');
            let titulo = document.createElement('h4');
            titulo.classList.add('titulo-item');
            let img = document.createElement('img');
            img.classList.add('img-item');
            
            let descricao = document.createElement('p');
            descricao.classList.add('descricao-item');
            let botao = document.createElement('button');
            botao.classList.add('botao-item', 'btnEquipar');
            botao.setAttribute('title', item.titulo);
            botao.setAttribute('categoria', item.categoria);

            titulo.innerText = item.titulo.replaceAll('-', ' ');
            img.setAttribute('src', item.img);
            descricao.innerText = item.descricao.replaceAll('-', ' ');
            botao.innerText = 'Equipar';

            divItem.appendChild(titulo);
            divItem.appendChild(img);
            divItem.appendChild(descricao);
            divItem.appendChild(botao);
            grid.appendChild(divItem);
        }
    });

    const btnEquipar = [... document.querySelectorAll('.btnEquipar')];
    btnEquipar.forEach(btn => {
        btn.addEventListener('click', () => {
            let equipou = false;
            switch(btn.getAttribute('categoria')) {
                case 'foto':
                    desequipa(btn.getAttribute('categoria'));
                    equipa(btn.getAttribute('title'));
                    exibeToast('Item equipado com sucesso.', 0);
                    equipou = true;
                    break;
                case 'titulo':
                    desequipa(btn.getAttribute('categoria'));
                    equipa(btn.getAttribute('title'));
                    exibeToast('Item equipado com sucesso.', 0);
                    equipou = true;
                    break;
            }
            if (equipou) {
                if (!verificaSeJaTemConquista('Equipado')) {
                    perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Equipado', descricao: 'Você ganhou esta conquista por equipar um item pela primeira vez.', img: 'media/conquistas/conquista4.png'});
                    atualizaExibicaoPerfilJogador();
                    exibeToast('Você obteve uma conquista!', 0);        
                }                 
            }
            atualizaExibicaoPerfilJogador();
        })
    });
}

atualizaExibicaoPerfilJogador(perfilJogador);

const btnCompartilharPerfil = document.querySelector('#btnCompartilharPerfil');
btnCompartilharPerfil.addEventListener('click', () => {

    let tituloEquipado;
    for (let i = 0; i < perfilJogador.itensInventario.length; i++) {
        if (perfilJogador.itensInventario[i].categoria === 'titulo' && perfilJogador.itensInventario[i].equipado) {
            tituloEquipado = perfilJogador.itensInventario[i].titulo;
        }
    }

    navigator.clipboard.writeText(`Perfil - Jogo TORNE VERDADEIRO\n\n• Nome: ${perfilJogador.nome}\n• Título: ${tituloEquipado}\n• Nível: ${perfilJogador.nivel}\n• Recorde de fases: ${perfilJogador.recordeFases[0]} (no ${perfilJogador.recordeFases[1]})\n• Recorde de estrelas: ${perfilJogador.recordeEstrelas[0]} (no ${perfilJogador.recordeEstrelas[1]})`);
    exibeToast('Perfil copiado para a área de transferência.', 0)
});

function descomprimeCircuito(circuitoJSON) {
    return circuitoJSON
        .replaceAll('^', '"lista_elementos":')
        .replaceAll('~', '"posicao_elementos_iniciais":')
        .replaceAll('=', '"solucoes_possiveis":')
        .replaceAll('A', '{"elemento":"linha-central-vertical","posicao":')
        .replaceAll('B', '{"elemento":"linha-recentralizadora-esquerda","posicao":')
        .replaceAll('C', '{"elemento":"linha-recentralizadora-direita","posicao":')
        .replaceAll('D', '{"elemento":"linha-central-horizontal","posicao":')
        .replaceAll('E', '{"elemento":"primeiro-canto","posicao":')
        .replaceAll('F', '{"elemento":"segundo-canto","posicao":')
        .replaceAll('G', '{"elemento":"terceiro-canto","posicao":')
        .replaceAll('H', '{"elemento":"quarto-canto","posicao":')
        .replaceAll('I', '{"elemento":"cruz","posicao":')
        .replaceAll('J', '{"elemento":"cruz-quebrada-esquerda","posicao":')
        .replaceAll('K', '{"elemento":"cruz-quebrada-direita","posicao":')
        .replaceAll('L', '{"elemento":"t","posicao":')
        .replaceAll('M', '{"elemento":"not","posicao":')
        .replaceAll('N', '{"elemento":"and","posicao":')
        .replaceAll('O', '{"elemento":"or","posicao":')
        .replaceAll('P', '{"elemento":"nand","posicao":')
        .replaceAll('Q', '{"elemento":"xor","posicao":')
        .replaceAll('R', '{"elemento":"nor","posicao":')
        .replaceAll('S', '{"elemento":"xnor","posicao":')
        .replaceAll('T', ',"conexao":')
        .replaceAll('U', '},')
        .replaceAll('V', '],')
        .replaceAll('W', '"0","0"')
        .replaceAll('X', '"1","1"')
        .replaceAll('Y', '"0","1"')
        .replaceAll('Z', '"1","0"')
        .replaceAll('@', '[]')
        .replaceAll('$', '[[')
        .replaceAll('*', '144,145')
        .replaceAll(')', ']}');
}

function atualizaResumoConfiguracoes() {
    const resumoConfiguracoes = document.getElementById('resumoConfiguracoes');

    let msgs = ['', '', ''];
    if (perfilJogador.desativarAnimacaoBackground) {
        msgs[0] = 'sem animação no background';
        checkboxDesativarAnimacaoBackground.checked = true;
    } else {
        msgs[0] = 'com animação no background';
        checkboxDesativarAnimacaoBackground.checked = false;
    }
    if (perfilJogador.desativarEfeitosSonoros) {
        msgs[1] = 'sem efeitos sonoros';
        checkboxDesativarEfeitosSonoros.checked = true;
    } else {
        msgs[1] = 'com efeitos sonoros';
        checkboxDesativarEfeitosSonoros.checked = false;
    }
    if (perfilJogador.desativarMusica) {
        checkboxDesativarMusica.checked = true;
        msgs[2] = 'sem música'
    } else {
        checkboxDesativarMusica.checked = false;
        msgs[2] = 'com música'
    }

    switch(perfilJogador.dificuldade) {
        case 'facil':
            document.getElementById('dificuldadeFacil').setAttribute('checked', 'true');
            break;
        case 'normal':
            document.getElementById('dificuldadeNormal').setAttribute('checked', 'true');
            break;
        case 'dificil':
            document.getElementById('dificuldadeDificil').setAttribute('checked', 'true');
            break;
        case 'impossivel':
            document.getElementById('dificuldadeImpossivel').setAttribute('checked', 'true');
            break;
    }

    resumoConfiguracoes.innerText = `Você está configurado para jogar no nível ${perfilJogador.dificuldade}; ${msgs[0]}; ${msgs[1]}; ${msgs[2]}; modo de jogo ${document.querySelector('input[name="radioModoJogo"]:checked').value}.`;
    lidaAnimacaoBackground();   
}

atualizaResumoConfiguracoes();

// conquista eu também sei fazer
if (params.get('autor') === perfilJogador.nome) {
    if (!verificaSeJaTemConquista('Eu também sei fazer')) {
        perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Eu também sei fazer', descricao: 'Você ganhou esta conquista por criar um circuito.', img: 'media/conquistas/conquista14.png'});
        atualizaExibicaoPerfilJogador();
        exibeToast('Você obteve uma conquista!', 0);        
    }
}

// conquista eu tenho amigos
if (params.get('autor') !== null && params.get('autor') !== perfilJogador.nome) {
    if (!verificaSeJaTemConquista('Eu tenho amigos')) {
        perfilJogador.itensInventario.push({categoria: 'titulo', titulo: 'Eu tenho amigos', descricao: 'Você ganhou esta conquista por criar um circuito.', img: 'media/conquistas/conquista15.png'});
        atualizaExibicaoPerfilJogador();
        exibeToast('Você obteve uma conquista!', 0);        
    }
}

function resetaLocalStorage() {
    function reseta() {
        window.localStorage.clear();
        exibeToast('O localStorage foi limpo pois a versão do Torne Verdadeiro estava desatualizada. Reiniciando em 3...2...1...', 0);
        setTimeout(() => {
            document.location.reload(true);
        }, 3000);
    }
    if (perfilJogador.ultimoLogin) {
        if ((perfilJogador.ultimoLogin[0] < 6 && perfilJogador.ultimoLogin[1] <= 5 && perfilJogador.ultimoLogin[2] <= 2022)) {
            reseta();
        }
    } else {
        reseta();
    }

}

resetaLocalStorage();

// impede o usuário de inspecionar o jogo
document.addEventListener('contextmenu', e => {
    e.preventDefault();
});

// document.onkeydown = function(e) {
//     if (event.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }