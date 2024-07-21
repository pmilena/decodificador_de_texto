let texto = document.getElementsByClassName("text_field");
let imagem = document.getElementsByClassName("img_container");
let noMsgContainer = document.getElementsByClassName("no_msg_text");
let h2Text = document.getElementsByClassName("no_msg_text_h2");
let pText = document.getElementsByClassName("no_msg_text_p");
let copyButton = document.getElementsByClassName("btn_copy");
let column2 = document.getElementsByClassName("column2");
let pNew = document.getElementsByClassName("p_style");

const copyButtonActive = document.getElementById("btn_copy");
const pCopy = document.getElementById("p_new");

copyButtonActive.addEventListener("click", () => {
  navigator.clipboard.writeText(pCopy.textContent);
});

limpar(); //para manter o cursor ativo na text-area. Como foi adicionado na função limpar, subi para ativar sempre que a página for atualizada, não apenas depois de clicar nos botões

//função para evitar que letras maiúsculas, acentos e cedilhas sejam inseridas
function digitar() {
  let texto = document.getElementsByClassName("text_field")[0];

  texto.addEventListener("input", function (event) {
    // Unicode - caracteres especiais
    let caracteresProibidos = [
      94, // Circunflexo
      96, // Acento grave
      180, // Acento agudo
      126, // Til
      199, // Cedilha maiúscula
      231, // Cedilha minúscula
      186, // Ponto e vírgula
      224, // À
      225, // Á
      233, // É
      237, // Í
      243, // Ó
      250, // Ú
      232, // è
      236, // ì
      242, // ò
      249, // ù
      227, // ã
      241, // ñ
      245, // õ
    ];

    // Remover caracteres proibidos
    let newValue = "";
    for (let i = 0; i < texto.value.length; i++) {
      let charCode = texto.value.charCodeAt(i);
      if (
        !caracteresProibidos.includes(charCode) &&
        !(charCode >= 65 && charCode <= 90)
      ) {
        newValue += texto.value[i];
      }
    }
    texto.value = newValue;
  });
}

function limpar() {
  texto[0].value = "";
  texto[0].focus();
}

//e=element; c=class; i=index
function addClass(e, c, i) {
  return e[i].classList.add(c);
}

function criptografar() {
  let newText = texto[0].value;

  if (newText !== "") {
    newText = newText.replace(/a|e|i|o|u/g, (caractere) => {
      switch (caractere) {
        case "a":
          return "ai";
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat";
      }
    });

    addClass(imagem, "hide", 0);
    addClass(h2Text, "hide", 0);
    addClass(pText, "hide", 0);
    addClass(pNew, "pNew_style", 0);

    pNew[0].innerHTML = newText;
    copyButton[0].style.display = "block";
    column2[0].style.gap = "150px";
    noMsgContainer[0].style.overflow = "auto";
    limpar();
  }
}

function descriptografar() {
  let newText = texto[0].value;

  if (newText !== "") {
    newText = newText.replace(/ai|enter|imes|ober|ufat/g, (caractere) => {
      switch (caractere) {
        case "ai":
          return "a";
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ober":
          return "o";
        case "ufat":
          return "u";
      }
    });

    addClass(imagem, "hide", 0);
    addClass(h2Text, "hide", 0);
    addClass(pText, "hide", 0);
    addClass(pNew, "pNew_style", 0);

    pNew[0].innerHTML = newText;
    copyButton[0].style.display = "block";
    column2[0].style.gap = "150px";
    noMsgContainer[0].style.overflow = "auto";
    limpar();
  }
}
