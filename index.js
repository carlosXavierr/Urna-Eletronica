
alert('Candidatos a presidencia:\n Zé Carioca: 10 \nGoblin: 20\nDog Caramelo: 30')

let num1 = document.querySelector('#num1');
let candidato = document.querySelector('.candidato');
let img = document.querySelector('img');

function inserir(x) {
    let num1 = document.querySelector('#num1')
    num1.value += x
}
function corrige() {
    num1.value = ''
    candidato.innerText = ''
    img.style.display = 'none'
}
function branco() {
    if (num1 = branco) {
        candidato.innerText = 'BRANCO'
        img.src = 'http://artcomvidros.com.br/wp-content/uploads/2021/10/products-manequim-de-plastico-masculino-completo-padrao-bege-detalhe.jpg'
        img.style.display = 'inline-block'
    }
}
function votar() {

    if (num1.value == 30) {
        candidato.innerText = 'DOG CARAMELO'
        img.src = 'https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg'
        img.style.display = 'inline-block'
    }
    if (num1.value == 10) {
        candidato.innerText = 'ZÉ CARIOCA'
        img.src = 'https://recreio.uol.com.br/media/uploads/disney/ze_carioca_capa_RByclzB.jpg'
        img.style.display = 'inline-block'
    }
    if (num1.value == 20) {
        candidato.innerText = 'GOBLIN'
        img.src = 'http://pm1.narvii.com/6331/7b438f8c8515a881dada2a78cbf22286cbec53a5_00.jpg'
        img.style.display = 'inline-block'
    }

    if (num1.value != 30 && num1.value != 10 && num1.value != 20) {
        candidato.innerText = 'VOTO NULO'
        img.src = 'https://cdn-icons-png.flaticon.com/512/1/1954.png'
        img.style.display = 'inline-block'
    }
}
