let perfilJogador = JSON.parse(localStorage.getItem('perfilJogador'));

const loader = document.getElementById('loader');
const mensagemLoader = document.getElementById('mensagemLoader');

window.addEventListener('load', () => {
	loader.style.display = 'none';
});

const circuito = document.querySelector('#circuito');
const solucaoPerfeita = document.querySelector('#solucaoPerfeita');
const output = document.querySelector('#output');

const DIMENSAO_ELEMENTO = '35px';
const ELEMENTOS_POR_COLUNA = 10;
const QUANTIDADE_ELEMENTOS = 150;

const divCodigo = document.querySelector('#divCodigo');
const btnFinalizarCriacaoCircuito = document.querySelector('#btnFinalizarCriacaoCircuito');
const btnCriarNovoCircuito = document.querySelector('#btnCriarNovoCircuito');

document.documentElement.style.setProperty('--dimensaoElemento', DIMENSAO_ELEMENTO);
document.documentElement.style.setProperty('--elementosPorColuna', ELEMENTOS_POR_COLUNA);

// cria os espaços do circuito
for (let i = 0; i < QUANTIDADE_ELEMENTOS; i++) {
	const espacoElemento = document.createElement('div');
	espacoElemento.setAttribute('title', `${i}`);
	espacoElemento.classList.add('espacoElemento');
	circuito.appendChild(espacoElemento);
}
// coloca os inputs de solução
for (let i = 0; i < ELEMENTOS_POR_COLUNA; i++) {
	const div = document.createElement('div');
	div.classList.add('input-solucao-perfeita', 'input');
	div.innerText = 0;
	solucaoPerfeita.appendChild(div); // input é a div com flexbox
}

const elementos = [... document.querySelectorAll('.elemento')];
const espacosElementos = [... document.querySelectorAll('.espacoElemento')];
const codigo = document.querySelector('#codigo');

let elementoClicado = null;
let elementoCriado = null;
let lista_elementos = [];

function arrayQuantidadeColunas() {
	return ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
}

let circuitoJSON = {
	lista_elementos: [],
	posicao_elementos_iniciais: null,
	solucoes_possiveis: []
};
let circuitosFeitos = [];

function limpaElementos() {
	elementos.forEach(elemento => {
		elementoClicado = null;
		elementoCriado = null;
		elementoAutomatico = null;
		elemento.style.border = 'none';
	});
}

function objetoElemento() {
	return {
		elemento: null,
		posicao: null,
		conexao: []
	};
}

let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];
let combinacoes = [];
for(let i = 0; i < letras.length; i++) {
    for (let j = 0; j < letras.length; j++) {
        combinacoes.push(`${letras[i]}${letras[j]}`);
    }
}

elementos.forEach(elemento => {
	elemento.addEventListener('click', () => {
		houveElementoAutomatico = false;
		const music = new Audio('media/efeitos-sonoros/0.wav'); music.play(); music.loop = false;
		limpaElementos();
		elementoClicado = elemento.getAttribute('title');
		elementoCriado = objetoElemento();
		elemento.style.border = '2px solid seagreen';
	})
});

document.addEventListener("keypress", function(event) {
	if (event.keyCode === 49) {
		elementos.forEach(elemento => {
			if (elemento.getAttribute('title') === 'linha-central-vertical') {
				houveElementoAutomatico = false;
				const music = new Audio('media/efeitos-sonoros/0.wav'); music.play(); music.loop = false;
				limpaElementos();
				elementoClicado = elemento.getAttribute('title');
				elementoCriado = objetoElemento();
				elemento.style.border = '2px solid seagreen';				
			}
		});		
	} else if (event.keyCode === 50) {
		elementos.forEach(elemento => {
			if (elemento.getAttribute('title') === 'not') {
				houveElementoAutomatico = false;
				const music = new Audio('media/efeitos-sonoros/0.wav'); music.play(); music.loop = false;
				limpaElementos();
				elementoClicado = elemento.getAttribute('title');
				elementoCriado = objetoElemento();
				elemento.style.border = '2px solid seagreen';				
			}
		});		
	} else if (event.keyCode === 51) {
		elementos.forEach(elemento => {
			if (elemento.getAttribute('title') === 'and') {
				houveElementoAutomatico = false;
				const music = new Audio('media/efeitos-sonoros/0.wav'); music.play(); music.loop = false;
				limpaElementos();
				elementoClicado = elemento.getAttribute('title');
				elementoCriado = objetoElemento();
				elemento.style.border = '2px solid seagreen';				
			}
		});		
	} else if (event.keyCode === 52) {
		elementos.forEach(elemento => {
			if (elemento.getAttribute('title') === 'remove') {
				houveElementoAutomatico = false;
				const music = new Audio('media/efeitos-sonoros/0.wav'); music.play(); music.loop = false;
				limpaElementos();
				elementoClicado = elemento.getAttribute('title');
				elementoCriado = objetoElemento();
				elemento.style.border = '2px solid seagreen';				
			}
		});		
	}
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let elementoAutomatico;
let houveElementoAutomatico = false;
let ultimoElementoComplexo = 1;
function criaElementoAutomatico(indice) {
	elementoAutomatico = objetoElemento();
	elementoAutomatico['conexao'].push(indice);

	if (ultimoElementoComplexo % 2 === 0) {
		elementoAutomatico['posicao'] = indice - 10;
		espacosElementos[indice - 10].classList.add('elemento-presente');
		elementoAutomatico['elemento'] = 'linha-recentralizadora-esquerda';
		espacosElementos[indice - 10].style.backgroundImage = "url('media/elementos/linha-recentralizadora-esquerda.png')";
		ultimoElementoComplexo++;
	} else {
		elementoAutomatico['posicao'] = indice+1 - 10;
		espacosElementos[indice+1 - 10].classList.add('elemento-presente');
		elementoAutomatico['elemento'] = 'linha-recentralizadora-direita';
		espacosElementos[indice+1 - 10].style.backgroundImage = "url('media/elementos/linha-recentralizadora-direita.png')";
		ultimoElementoComplexo++;						
	}
	houveElementoAutomatico = true;
}

function criaConexaoElemento(indice, nomeElemento) {
	if (indice < 140) {
		// elementos que se conectam no elemento abaixo e tão somente no elemento abaixo
		if (nomeElemento === 'linha-central-vertical' || nomeElemento === 'cruz' || nomeElemento === 'cruz-quebrada-esquerda' || nomeElemento === 'cruz-quebrada-direita' || nomeElemento === 't' || nomeElemento === 'not') {
			return [indice + 10];
		}
		// elementos que se conectam a algum elemento ao lado
		if (nomeElemento === 'linha-central-horizontal') {
			if (espacosElementos[indice - 1].classList.contains('elemento-presente')) {
				return [indice - 1];
			} else {
				return [indice + 1];
			}
		}

		// elementos que se conectam à esquerda
		if (nomeElemento === 'primeiro-canto' || nomeElemento === 'quarto-canto') {
			if (!espacosElementos[indice - 1].classList.contains('elemento-presente')) {
				return [indice + 10];
			} else {
				return [indice - 1];
			}
		}

		// elementos que se conectam à direita
		if (nomeElemento === 'segundo-canto' || nomeElemento === 'terceiro-canto') {
			if (!espacosElementos[indice + 1].classList.contains('elemento-presente')) {
				return [indice + 10];
			} else {
				return [indice + 1];
			}
		}


		// elementos que se conectam a dois outros elementos imediatamente abaixo (isto é, elementos complexos)
		if (nomeElemento === 'and' || nomeElemento === 'or' || nomeElemento === 'xor' || nomeElemento === 'xnor' || nomeElemento === 'nor' || nomeElemento === 'nand') {
			return [indice + 10, indice + 10 + 1];
		}
	} else {
		return [];
	}
}

let primeiroElementoInformado = false;
let posicao_elementos_iniciais = [];
for (let i = 0; i < espacosElementos.length; i++) {
	espacosElementos[i].addEventListener('click', () => {
		if ((elementoClicado && !espacosElementos[i].classList.contains('elemento-presente')) || elementoClicado === 'remove') {
			const music = new Audio('media/efeitos-sonoros/1.wav'); music.play(); music.loop = false;
			let conexao = criaConexaoElemento(i, elementoClicado);

			let erro;
			if (i >= 140 && elementoClicado !== 'linha-central-vertical' && elementoClicado !== 'remove') {
				erro = 'O primeiro elemento informado deve ser necessariamente uma linha central vertical.';
			} else if (i < 10 && elementoClicado !== 'linha-central-vertical' && elementoClicado !== 'remove') {
				erro = 'O último elemento informado deve ser necessariamente uma linha central vertical.';
			}

			if (!primeiroElementoInformado && i < 140) {
				erro = 'Você deve começar o circuito pelos espaços imediatamente acima dos inputs.';
			}

			if (erro) {
				exibeToast(erro, 'brown');
			}

			if (!erro) {
				primeiroElementoInformado = true;
				switch(elementoClicado) {
					case 'and':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/primeiro-and.png')";
						espacosElementos[i+1].style.backgroundImage = "url('media/elementos/segundo-and.png')";
						criaElementoAutomatico(i);
						break;
					case 'or':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/primeiro-or.png')";
						espacosElementos[i+1].style.backgroundImage = "url('media/elementos/segundo-or.png')";
						criaElementoAutomatico(i);
						break;
					case 'xor':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/primeiro-xor.png')";
						espacosElementos[i + 1].style.backgroundImage = "url('media/elementos/segundo-xor.png')";
						criaElementoAutomatico(i);
						break;
					case 'xnor':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/primeiro-xnor.png')";
						espacosElementos[i + 1].style.backgroundImage = "url('media/elementos/segundo-xnor.png')";
						criaElementoAutomatico(i);
						break;
					case 'nor':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/primeiro-nor.png')";
						espacosElementos[i + 1].style.backgroundImage = "url('media/elementos/segundo-nor.png')";
						criaElementoAutomatico(i);
						break;
					case 'nand':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/primeiro-nand.png')";
						espacosElementos[i + 1].style.backgroundImage = "url('media/elementos/segundo-nand.png')";
						criaElementoAutomatico(i);
						break;
					case 'not':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/not.png')";
						break;
					case 'linha-central-vertical':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/linha-central-vertical.png')";
						break;
					case 'primeiro-canto':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/primeiro-canto.png')";
						break;
					case 'segundo-canto':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/segundo-canto.png')";
						break;	
					case 'terceiro-canto':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/terceiro-canto.png')";
						break;	
					case 'quarto-canto':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/quarto-canto.png')";
						break;	
					case 'linha-central-horizontal':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/linha-central-horizontal.png')";
						break;
					case 'cruz':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/cruz.png')";
						break;
					case 'cruz-quebrada-esquerda':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/cruz-quebrada-esquerda.png')";
						break;
					case 'cruz-quebrada-direita':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/cruz-quebrada-direita.png')";
						break;
					case 't':
						espacosElementos[i].style.backgroundImage = "url('media/elementos/t.png')";
						break;
					case 'remove':
						espacosElementos[i].style.setProperty('background-image', 'none');
						espacosElementos[i].classList.remove('elemento-presente');
						for (let j = 0; j < lista_elementos.length; j++) {
							if (lista_elementos[j].posicao === i) {
								lista_elementos.splice(j, 1);
							}
						}
						for (let j = 0; j < posicao_elementos_iniciais.length; j++) {
							if (posicao_elementos_iniciais[j] === i) {
								posicao_elementos_iniciais.splice(j, 1);
							}
						}
						break;
				}
				if (elementoClicado !== 'remove') {
					espacosElementos[i].classList.add('elemento-presente');
					elementoCriado.elemento = elementoClicado;
					elementoCriado.posicao = i;
					elementoCriado.conexao = conexao;
					lista_elementos.push(elementoCriado);

					if (houveElementoAutomatico) {
						lista_elementos.push(elementoAutomatico);
					}

					if (i >= 140) {
						posicao_elementos_iniciais.push(i);
					}				
				}
				limpaElementos();
				exibeToast('Elemento inserido e conexão informada com sucesso.', 'purple');
			}
		} else {
			const music = new Audio('media/efeitos-sonoros/1.wav'); music.play(); music.loop = false;
			exibeToast('Você não selecionou um elemento ou este espaço está indisponível.', 'brown');
		}
		circuitoJSON.lista_elementos = lista_elementos;
		circuitoJSON.posicao_elementos_iniciais = posicao_elementos_iniciais;
		codigo.value = JSON.stringify(circuitoJSON);
	})
}

// event listeners nos inputs de solução perfeita
const inputsSolucaoPerfeita = document.querySelectorAll('.input-solucao-perfeita');
for (let i = 0; i < inputsSolucaoPerfeita.length; i++) {
	inputsSolucaoPerfeita[i].addEventListener('click', () => {
		if (inputsSolucaoPerfeita[i].innerText === '0') {
			inputsSolucaoPerfeita[i].innerText = '1';
			inputsSolucaoPerfeita[i].style.setProperty('background-color', 'seagreen');
			const music = new Audio('media/efeitos-sonoros/1.wav'); music.play(); music.loop = false;
		} else {
			inputsSolucaoPerfeita[i].innerText = '0';
			inputsSolucaoPerfeita[i].style.setProperty('background-color', 'tomato');

			const music = new Audio('media/efeitos-sonoros/0.wav'); music.play(); music.loop = false;
		}
		propaga(lista_elementos);
	});
}

function exibeToast(conteudo, bg = 'seagreen') {
	const toast = document.querySelector('.toast');
	toast.style.setProperty('background-color', bg);
	toast.style.setProperty('display', 'block');
	toast.innerText = conteudo;
	setTimeout(() => {
		toast.style.setProperty('display', 'none');
	}, 5000);
}

function estadosIguais(estado1, estado2) {
    let iguais = true;
    for (let i = 0; i < estado1.length; i++) {
        if (estado1[i] !== estado2[i]) {
            iguais = false;
            break;
        }
    }
    return iguais;
}

function defineInputsCircuito(estadoInicial = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']) {
	const inputs = [... document.querySelectorAll('.input')];
	inputs.forEach((input, index) => {
		if (estadoInicial[index] === '0') {
			input.style.setProperty('background-color', 'tomato');
		} else {
			input.style.setProperty('background-color', 'seagreen');
		}
		input.innerText = estadoInicial[index];
	});
}

function criaTodasPossibilidadesResposta(posicao_elementos_iniciais) {
	let quantidadeNecessaria;;
	if (posicao_elementos_iniciais.length > 0) {
		quantidadeNecessaria = Math.pow(2, posicao_elementos_iniciais.length);
	} else {
		quantidadeNecessaria = 0;
	}
	let respostasPossiveisValidas = [];
	
	if (quantidadeNecessaria > 0) {
		do {
			let estadoInicial = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
		    for (let i = 0; i < posicao_elementos_iniciais.length; i++) {
		        estadoInicial[posicao_elementos_iniciais[i] - 140] = getRandomIntInclusive(0, 1).toString();
		    }

			let jaTem = false;
			for (let j = 0; j < respostasPossiveisValidas.length; j++) {
				if (estadosIguais(respostasPossiveisValidas[j], estadoInicial)) {
					jaTem = true;
				}
			}

			if (!jaTem) {
				respostasPossiveisValidas.push(estadoInicial);
			}
		} while(respostasPossiveisValidas.length < quantidadeNecessaria);
	}

    return respostasPossiveisValidas;
}

function verificaSolucoesPossiveis(circuitoJSON) {
	let respostasPossiveisValidas = criaTodasPossibilidadesResposta(circuitoJSON.posicao_elementos_iniciais);
	let solucoes_possiveis = [];
	for (let i = 0; i < respostasPossiveisValidas.length; i++) {
		let r = pegaOutputDePropagacaoVirtual(circuitoJSON, respostasPossiveisValidas[i]);
		if (r) {
			let jaTem = false;
			for (let j = 0; j < solucoes_possiveis.length; j++) {
				if (estadosIguais(solucoes_possiveis[j], respostasPossiveisValidas[i])) {
					jaTem = true;
				}
			}

			if (!jaTem) {
				solucoes_possiveis.push(respostasPossiveisValidas[i]);
			}
		}
	}

	return solucoes_possiveis;
}

function pegaOutputDePropagacaoVirtual(circuitoJSON, estadoInicial = ["0","0","0","0","1","1","0","0","0","0"]) {
	function ativaAlgumElementoDadaSuaPosicao(posicaoDada) {
		for (let j = 0; j < circuitoJSON.lista_elementos.length; j++) {
			if (circuitoJSON.lista_elementos[j].posicao === posicaoDada) {
				circuitoJSON.lista_elementos[j].estado = 'on';
			}
		}
	}

	function verificaSeDeterminadoElementoEstaAtivo(posicaoDada) {
		let ativo = false;
		for (let j = 0; j < circuitoJSON.lista_elementos.length; j++) {
			if (circuitoJSON.lista_elementos[j].posicao === posicaoDada && circuitoJSON.lista_elementos[j].estado === 'on') {
				ativo = true;
			}
		}
		return ativo;
	}

	// coloca o atributo "estado" e dá a ele o valor off para cada um dos elementos
	for (let i = 0; i < circuitoJSON.lista_elementos.length; i++) {
		circuitoJSON.lista_elementos[i].estado = 'off';
	}
	// realiza a primeira propagação, considerando a posição dos elementos inicias e o estadoInicial passado
	// percorre o array de posição dos elementos iniciais, para sem seguida verificar se a posição correspondente do estado inicial é 1, porque se for, queremos ativar esse elemento que tá nessa posição inicial
	for (let i = 0; i < circuitoJSON.posicao_elementos_iniciais.length; i++) {
		if (estadoInicial[circuitoJSON.posicao_elementos_iniciais[i] - 140] === '1') {
			ativaAlgumElementoDadaSuaPosicao(circuitoJSON.posicao_elementos_iniciais[i]);
		}
	}
	// realiza o resto da propagação, com base nos elementos iniciais que estão ativos
	for (let i = 0; i < circuitoJSON.lista_elementos.length; i++) { 
		let nomeElemento = circuitoJSON.lista_elementos[i].elemento.split('-');
		// linhas normais
		if (nomeElemento.includes('linha') || nomeElemento.includes('canto') || nomeElemento.includes('cruz') || nomeElemento.includes('t')) {
			// se tem conexão 0, é porque é um dos primeiros elementos
			if (circuitoJSON.lista_elementos[i].conexao.length !== 0) {				
                if (verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0])) {
                	circuitoJSON.lista_elementos[i].estado = 'on';
                } else {
                	circuitoJSON.lista_elementos[i].estado = 'off';
                }
			}
		}
		// not: inverte
		if (circuitoJSON.lista_elementos[i].elemento === 'not') {
			if (verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0])) {
				circuitoJSON.lista_elementos[i].estado = 'off';
			} else {
				circuitoJSON.lista_elementos[i].estado = 'on';
			}
		}
		// and: ambas devem ser verdadeiras
		if (circuitoJSON.lista_elementos[i].elemento === 'and') {
			if (verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0]) && verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[1])) {
				circuitoJSON.lista_elementos[i].estado = 'on';
			} else {
				circuitoJSON.lista_elementos[i].estado = 'off';
			}
		}
		// or: pelo menos uma deve ser verdadeira
		if (circuitoJSON.lista_elementos[i].elemento === 'or') {
			if (verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0]) || verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[1])) {
				circuitoJSON.lista_elementos[i].estado = 'on';
			} else {
				circuitoJSON.lista_elementos[i].estado = 'off';
			}
		}
        // nand: falsa se ambas verdadeiras
        if (circuitoJSON.lista_elementos[i].elemento === 'nand') {
            if (verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0]) && verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[1])) {
                circuitoJSON.lista_elementos[i].estado = 'off';
            } else {
                circuitoJSON.lista_elementos[i].estado = 'on';
            }
        }
        // nor: nenhuma deve ser verdadeira
        if (circuitoJSON.lista_elementos[i].elemento === 'nor') {
            if (!verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0]) && !verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[1])) {
                circuitoJSON.lista_elementos[i].estado = 'on';
            } else {
                circuitoJSON.lista_elementos[i].estado = 'off';
            }
        }
        // xor: só uma pode ser verdadeira
        if (circuitoJSON.lista_elementos[i].elemento === 'xor') {
            if ((verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0]) && !verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[1])) || (!verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0]) && verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[1]))) {
                circuitoJSON.lista_elementos[i].estado = 'on';
            } else {
                circuitoJSON.lista_elementos[i].estado = 'off';
            }
        }
        // xnor: ou ambas falsas ou ambas verdadeiras
        if (circuitoJSON.lista_elementos[i].elemento === 'xnor') {
            if ((!verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0]) && !verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[1])) || (verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[0]) && verificaSeDeterminadoElementoEstaAtivo(circuitoJSON.lista_elementos[i].conexao[1]))) {
                circuitoJSON.lista_elementos[i].estado = 'on';
            } else {
                circuitoJSON.lista_elementos[i].estado = 'off';
            }
        }
        // fim
	}
	// agora altera o output, verificando se todos os últimos elementos estão ativos
	let output = true, totalElementosUltimaPosicao = 0;
	for (let i = 0; i < circuitoJSON.lista_elementos.length; i++) {
		if (circuitoJSON.lista_elementos[i].posicao < 10) {
			totalElementosUltimaPosicao++;
			if (circuitoJSON.lista_elementos[i].estado === 'off') {
				output = false;
			}			
		}
	}
	// remove a propriedade "estado" dos elementos, já que ela não será útil mais
	for (let i = 0; i < circuitoJSON.lista_elementos.length; i++) {
		delete circuitoJSON.lista_elementos[i].estado;
	}

	return output && totalElementosUltimaPosicao > 0;
}

function propaga(circuitoJSON) {
	const inputs = [... document.querySelectorAll('.input')];
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].innerText === '1' && (espacosElementos[i + 140].classList.contains('elementoPresente') || espacosElementos[i + 140].classList.contains('elemento-presente'))) {
			espacosElementos[i + 140].classList.add('on');
			espacosElementos[i + 140].style.backgroundImage = 'url("media/elementos/linha-central-vertical-on.png")';
		} else if (espacosElementos[i + 140].classList.contains('elemento-presente') || espacosElementos[i + 140].classList.contains('elementoPresente')) {
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
                    espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = `url(media/elementos/${circuitoJSON[i].elemento}-on.png)`;
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

    return alteraOutput();
}

function alteraOutput() {
	let verdadeiro = true, totalElementos = 0;
	for (let i = 0; i < 10; i++) {
		if (espacosElementos[i].classList.contains('elementoPresente')) {
			totalElementos++;
			if (!espacosElementos[i].classList.contains('on')) {
				verdadeiro = false;
			}
		}
	}

	if (verdadeiro && totalElementos > 0) {
		output.style.setProperty('background-color', 'seagreen');
		output.innerText = 'Verdadeiro';
	} else {
		output.style.setProperty('background-color', 'tomato');
		output.innerText = 'Falso';
	}

	return verdadeiro && totalElementos > 0;
}

function limpaCircuito() {
	lista_elementos = [];
	circuitoJSON = {
		lista_elementos: [],
		posicao_elementos_iniciais: [],
		solucoes_possiveis: []
	};
	codigo.value = '';
	posicao_elementos_iniciais = [];
	for (let i = 0; i < espacosElementos.length; i++) {
		espacosElementos[i].style.backgroundImage = "none";
		espacosElementos[i].classList.remove('elemento-presente');
		espacosElementos[i].classList.remove('elementoPresente');
		espacosElementos[i].classList.remove('on');
	}
	defineInputsCircuito();
	divCodigo.style.setProperty('display', 'none');
}

// apenas lê o array com os objetos do circuito e insere os backgrounds nas devidas posições
function leCircuito(circuitoJSON, limpa = true) {
	if (limpa) {
		limpaCircuito();
	}
	if (!circuitoJSON.lista_elementos) {
		circuitoJSON = JSON.parse(circuitoJSON);
	}
	circuitoJSON = circuitoJSON.lista_elementos;
	lista_elementos = circuitoJSON;

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
			espacosElementos[circuitoJSON[i].posicao].classList.add('elemento-presente');
		} else {
			espacosElementos[circuitoJSON[i].posicao].classList.add('elemento-presente');
			espacosElementos[circuitoJSON[i].posicao + 1].classList.add('elemento-presente');
		}
	}
	propaga(circuitoJSON);
	alteraOutput();
}

function finalizaCriacaoCircuito() {
	loader.style.display = 'flex';
	setTimeout(() => {
		circuitoJSON.solucoes_possiveis = verificaSolucoesPossiveis(circuitoJSON);
		loader.style.display = 'none';
		if (circuitoJSON.solucoes_possiveis.length > 0) {
			codigo.value = JSON.stringify(circuitoJSON);
			divCodigo.style.setProperty('display', 'block');
			exibeToast('Circuito finalizado com sucesso.', 'seagreen');
			atualizaTotalCircuitosFeitos();
		} else {
			exibeToast('Não existe solução para esse circuito.', 'tomato');
		}
	}, 300);
	circuitosFeitos.push(circuitoJSON);
}

function atualizaTotalCircuitosFeitos() {
	const totalCircuitosFeitos = [... document.querySelectorAll('.total-circuitos-feitos')];
	totalCircuitosFeitos.forEach(total => {
		total.innerText = circuitosFeitos.length;
	});
}

btnCriarNovoCircuito.addEventListener('click', () => {
	limpaCircuito();
	exibeToast('Pronto, você já pode criar outro circuito.', 'dodgerblue');
});

btnFinalizarCriacaoCircuito.addEventListener('click', () => {
	finalizaCriacaoCircuito();
});

const btnGerarLink = document.querySelector('#btnGerarLink');
btnGerarLink.addEventListener('click', () => {
	let conjuntoCircuitos = JSON.stringify(circuitosFeitos);
	conjuntoCircuitos = comprimeCircuito(conjuntoCircuitos);
	let url = `${window.location.href}?circuitos=${conjuntoCircuitos}&autor=${perfilJogador.nome}`;
	url = url.replaceAll('criador.html', 'index.html');
	navigator.clipboard.writeText(url);
	exibeToast('Link gerado e copiado para a área de transfêrencia.', 'dodgerblue');
});

function realizaSubstituicoes(circuitoJSON, padrao, tipo = 'and') {
	let total = 0;
	for (let i = 0; i < circuitoJSON.lista_elementos.length; i++) {
		if (circuitoJSON.lista_elementos[i].elemento === tipo) {
			total++;
		}
	}

	if (total === padrao.length) {
		let posicaoPadrao = 0;
		for (let i = 0; i < circuitoJSON.lista_elementos.length; i++) {
			if (circuitoJSON.lista_elementos[i].elemento === tipo) {
				circuitoJSON.lista_elementos[i].elemento = padrao[posicaoPadrao];
				posicaoPadrao++;
			}
		}
	}

	circuitoJSON.solucoes_possiveis = verificaSolucoesPossiveis(circuitoJSON);

	return circuitoJSON;
}

// compressor de circuitos
function comprimeCircuito(circuitoJSON) {
	return circuitoJSON
		.replaceAll('"lista_elementos":', '^')
		.replaceAll('"posicao_elementos_iniciais":', '~')
		.replaceAll('"solucoes_possiveis":', '=')
		.replaceAll('{"elemento":"linha-central-vertical","posicao":', 'A')
		.replaceAll('{"elemento":"linha-recentralizadora-esquerda","posicao":', 'B')
		.replaceAll('{"elemento":"linha-recentralizadora-direita","posicao":', 'C')
		.replaceAll('{"elemento":"linha-central-horizontal","posicao":', 'D')
		.replaceAll('{"elemento":"primeiro-canto","posicao":', 'E')
		.replaceAll('{"elemento":"segundo-canto","posicao":', 'F')
		.replaceAll('{"elemento":"terceiro-canto","posicao":', 'G')
		.replaceAll('{"elemento":"quarto-canto","posicao":', 'H')
		.replaceAll('{"elemento":"cruz","posicao":', 'I')
		.replaceAll('{"elemento":"cruz-quebrada-esquerda","posicao":', 'J')
		.replaceAll('{"elemento":"cruz-quebrada-direita","posicao":', 'K')
		.replaceAll('{"elemento":"t","posicao":', 'L')
		.replaceAll('{"elemento":"not","posicao":', 'M')
		.replaceAll('{"elemento":"and","posicao":', 'N')
		.replaceAll('{"elemento":"or","posicao":', 'O')
		.replaceAll('{"elemento":"nand","posicao":', 'P')
		.replaceAll('{"elemento":"xor","posicao":', 'Q')
		.replaceAll('{"elemento":"nor","posicao":', 'R')
		.replaceAll('{"elemento":"xnor","posicao":', 'S')
		.replaceAll(',"conexao":', 'T')
		.replaceAll('},', 'U')
		.replaceAll('],', 'V')
		.replaceAll('"0","0"', 'W')
		.replaceAll('"1","1"', 'X')
		.replaceAll('"0","1"', 'Y')
		.replaceAll('"1","0"', 'Z')
		.replaceAll('[]', '@')
		.replaceAll('[[', '$')
		.replaceAll('144,145', '*')
	    .replaceAll(']}', ')');
}