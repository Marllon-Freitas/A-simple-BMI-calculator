const form = document.querySelector('.form'); //captura o formulario no HTML //captures the form in HTML

//fica de olho no evento submit //keep an eye on the submit event
form.addEventListener('submit', function(evento) {
    evento.preventDefault(); //previne o estado padrão, não permitindo o formulario ser enviado //prevents the default state by not allowing the form to be submitted

    //captura os inputs do usuario
    //captures user input
    const inputPeso = evento.target.querySelector('.peso');
    const inputAltura = evento.target.querySelector('.altura');
    
    //transforma os valores capturados em numbers
    //turns captured values into numbers
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //caso o valor retornado seja 'NaN'(falso) ele envia as mensagens de aviso
    //if the returned value is 'NaN' (false) it sends the warning messages
    if (!peso && !altura) {
        setResultado("Peso e altura inválidos!");
        return;
    }

    if(!peso) {
        setResultado('Peso inválido!', false);
        return;
    }
    if(!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    
    const imc = getIMC(peso, altura);
    const grauImc = getGrauImc(imc);

    const msg = `Seu IMC é <strong>${imc}</strong> (${grauImc}).`; //mensagem que é exibido ao usuario //message that is displayed to the user
    setResultado(msg, true);
});

//função que calcula o IMC
//function that calculates BMI
function getIMC(peso, altura) {
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
}

//função que retorna o grau do IMC
//function that returns the BMI level
function getGrauImc (imc) {
    const grau = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return grau[5];
    }
    if (imc >= 34.9) {
        return grau[4];
    }
    if (imc >= 29.9) {
        return grau[3];
    }
    if (imc >= 24.9) {
        return grau[2];
    }
    if (imc >= 18.5) {
        return grau[1];
    }
    if (imc < 18.5) {
        return grau[0];
    }
}

//funcão que cria paragrafos
//function that creates paragraphs
function criaParagrafos () {
    const p = document.createElement('p'); //cria uma constante p que vai armazenar o resultado em uma tag <p> //creates a constant p that will store the result in a <p> tag  
    return p;
}

//exibe o resultado na tela
//displays the result on the screen
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado'); //joga o valor do identificador 'resultado' para a constante //sets the identifier 'result' to a constant
    const p = criaParagrafos();
    resultado.innerHTML = ''; //limpa esse resultado //clear this result

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('invalido');
    }

    p.innerHTML = msg;  //exibe a frase no HTML em forma de parágrafo //displays the sentence in HTML as a paragraph
    resultado.appendChild(p); //insere o elemento p como filho da div resultado //inserts the p element as a child of the resulting div
}