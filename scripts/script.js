function mostrarOcultarResposta(id) {
    var respostaDiv = document.getElementById(id);
    if (respostaDiv.style.display === 'none') {
        respostaDiv.style.display = 'block';
    } else {
        respostaDiv.style.display = 'none';
    }
}

function toggleDropdown() {
    var dropdownList = document.getElementById("dropdownList");
    dropdownList.classList.toggle("active");
}
  
function selectOption(option) {
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.textContent = option;
    toggleDropdown();
}
  