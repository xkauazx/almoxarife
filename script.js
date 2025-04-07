// Base de dados fictícia (pode ser alimentada dinamicamente no futuro)
const pecas = [
    { nome: "Luva Simples 100mm", local:"1º Tenda > 1º Prateleira > 1º Coluna > 3º Fileira" },
    { nome: "Calça Amarela GG", local: "2º Tenda > 8º Prateleira > 3º Coluna > 1º Fileira" },
    { nome: "Joelho 45º 50mm ", local: "1º Tenda > 1º Prateleira > 1º Coluna > 2º Fileira" },
    { nome: "Junção Simples 100x100 ", local: "  1º Tenda > 1º Prateleira > 1/2º Coluna > 2º Fileira " },
    { nome: "Junção Simples 40x40 ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
    { nome: " ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
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
  
