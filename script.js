// Base de dados fictícia (pode ser alimentada dinamicamente no futuro)
const pecas = [
    { nome: "Luva Simples 100mm", local: "Tenda 1 > Prateleira 1 > Coluna 1 > Fileira 3" },
    { nome: "Calça Amarela GG", local: "Tenda 2 > Prateleira 8 > Coluna 3 > Fileira 1" },
    { nome: "Joelho 45ª 50mm ", local: "  Tenda 3 > Prateleira 4 > Coluna 3 > Fileira 2" },
    { nome: "Broca 10mm", local: "Tenda 1 > Prateleira 3 > Coluna 2 > Fileira 1" }
  ];
  
  const searchBar = document.getElementById("searchBar");
  const resultList = document.getElementById("resultList");
  
  // Escuta a digitação
  searchBar.addEventListener("input", function () {
    const termo = this.value.toLowerCase();
    resultList.innerHTML = "";
  
    if (termo === "") return;
  
    const resultados = pecas.filter(p => p.nome.toLowerCase().includes(termo));
  
    resultados.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.nome;
      li.classList.add("sugestao");
      li.addEventListener("click", () => mostrarLocalizacao(p));
      resultList.appendChild(li);
    });
  });
  
  function mostrarLocalizacao(peca) {
    resultList.innerHTML = "";
  
    const container = document.createElement("div");
    container.classList.add("localizacao");
  
    const titulo = document.createElement("h2");
    titulo.textContent = peca.nome;
  
    const local = document.createElement("p");
    local.textContent = "Localização: " + peca.local;
  
    container.appendChild(titulo);
    container.appendChild(local);
    resultList.appendChild(container);
  }
  