let texto = document.getElementsByClassName("text_field");
let imagem = document.getElementsByClassName("img_container");
let no_msg_container = document.getElementsByClassName("no_msg_text");
let texto_h2 = document.getElementsByClassName("no_msg_text_h2");
let texto_p = document.getElementsByClassName("no_msg_text_p");
let copy_button = document.getElementsByClassName("btn_copy");
let column2 = document.getElementsByClassName("column2");
let new_p = document.getElementsByClassName("p_style");

//função para evitar que letras maiúsculas, acentos e cedilhas sejam inseridas
function digitar() {
  let texto = document.getElementsByClassName("text_field")[0];
  let arlet = alert.length;
  texto.addEventListener("keypress", function (event) {
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

    if (caracteresProibidos.includes(event.charCode)) {
      event.preventDefault();
    }

    // letra maiúscula de A-Z (códigos ASCII de 65 a 90)
    if (event.charCode >= 65 && event.charCode <= 90) {
      event.preventDefault();
    }
  });
}

function limpar() {
  texto[0].value = "";
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
    addClass(texto_h2, "hide", 0);
    addClass(texto_p, "hide", 0);
    addClass(new_p, "new_p_style", 0);

    new_p[0].innerHTML = newText;
    copy_button[0].style.display = "block";
    column2[0].style.gap = "150px";
    no_msg_container[0].style.overflow = "auto";
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
    addClass(texto_h2, "hide", 0);
    addClass(texto_p, "hide", 0);
    addClass(new_p, "new_p_style", 0);

    new_p[0].innerHTML = newText;
    copy_button[0].style.display = "block";
    column2[0].style.gap = "150px";
    no_msg_container[0].style.overflow = "auto";
    limpar();
  }
}
