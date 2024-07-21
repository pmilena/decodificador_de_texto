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
//FUNÇÃO COPIAR
copyButtonActive.addEventListener("click", () => {
  navigator.clipboard.writeText(pCopy.textContent);
});

limpar(); //para manter o cursor ativo na text-area. Como foi adicionado na função limpar, subi para ativar sempre que a página for atualizada, não apenas depois de clicar nos botões

//função para impedir caracteres proibidos
function digitar() {
  let texto = document.getElementsByClassName("text_field")[0];

  texto.addEventListener("input", function (event) {
    // Remover caracteres proibidos
    let newValue = "";
    for (let i = 0; i < texto.value.length; i++) {
      let charCode = texto.value.charCodeAt(i);
      // Verifica se o caractere é uma letra minúscula
      if ((charCode >= 97 && charCode <= 122) || charCode === 32) {
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
// //INÍCIO DARK MODE
const switchCheckbox = document.getElementById("theme-switch");
const body = document.body;
const logo = document.getElementById("logo__img");

function applyTheme(theme) {
  const isDarkMode = theme === "dark";

  body.classList.toggle("dark-mode", isDarkMode);
  body.classList.toggle("light-mode", !isDarkMode);

  Array.from(column2).forEach((el) => {
    el.classList.toggle("dark-mode", isDarkMode);
    el.classList.toggle("light-mode", !isDarkMode);
  });

  Array.from(texto).forEach((el) => {
    el.classList.toggle("dark-mode", isDarkMode);
    el.classList.toggle("light-mode", !isDarkMode);
  });

  Array.from(copyButton).forEach((el) => {
    el.classList.toggle("dark-mode", isDarkMode);
    el.classList.toggle("light-mode", !isDarkMode);
  });

  logo.src = isDarkMode ? "./assets/logo3_bg-dark.png" : "./assets/logo3.png";
  localStorage.setItem("theme", theme);
}

// Inicializar com preferência anterior do usuário
const savedTheme = localStorage.getItem("theme") || "light";
switchCheckbox.checked = savedTheme === "dark";
applyTheme(savedTheme);

switchCheckbox.addEventListener("change", () => {
  const newTheme = switchCheckbox.checked ? "dark" : "light";
  applyTheme(newTheme);
});
//FIM DARK MODE
