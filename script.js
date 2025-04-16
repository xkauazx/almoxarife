// Base de dados fictícia (pode ser alimentada dinamicamente no futuro)
const pecas = [
  { nome: "Luva Simples 100mm de PVC Série Normal", local: " 1º Tenda > 1º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Calça Amarela GG", local: "2º Tenda > 8º Prateleira > 3º Coluna > 1º Fileira" },
  { nome: "Joelho 45º 50mm de PVC Série Normal - Esgoto", local: "1º Tenda > 1º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Junção Simples 100x100mm Série Normal - Esgoto ", local: "  1º Tenda > 1º Prateleira > 1|2º Coluna > 2º Fileira " },
  { nome: "Junção Simples 40x40mm Série Normal - Esgoto ", local: "  1º Tenda > 1º Prateleira > 2º Coluna > 3º Fileira " },
  { nome: "Bucha de Redução  50x40 ", local: "  1º Tenda > 1º Prateleira > 2º Coluna > 1º Fileira " },
  { nome: "Luva Simples 50mm  Série Normal - Esgoto", local: "  1º Tenda > 1º Prateleira > 3º Coluna > 1/2º Fileira " },
  { nome: "Luva  Simples 75mm Série Normal - Esgoto", local: "  1º Tenda > 1º Prateleira > 3º Coluna > 3º Fileira " },
  { nome: "Te de Pvc 40x40  ", local: "  1º Tenda > 1º Prateleira > 2º Coluna > 3º Fileira " },
  { nome: "Tê de PVC Soldável com bucha de latão 025x1/2", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 1º Fileira " },
  { nome: "Registro Esfera de Pvc 25mm", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 2º Fileira " },
  { nome: "Tê de pvc Soldavel com bucha latão 020x1/2", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 3º Fileira " },
  { nome: "Luva de Pvc Soldável com bucha Latão 025x1/2 ", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 3º Fileira " },
  { nome: "Registro Esfera de PVC 60mm ", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 1º Fileira " },
  { nome: "Registro Esfera de PVC 110mm ", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 1º Fileira " },
  { nome: "hidrômetro Multijato 3/4, 1.5 ", local: "  1º Tenda > 2º Prateleira > 2º Coluna > 3º Fileira " },
  { nome: "Tê de PVC PBA 60mm ", local: "  1º Tenda > 2º Prateleira > 2º Coluna > 2º Fileira " },
  { nome: "Tê de PVC PBA 85mm ", local: "  1º Tenda > 2º Prateleira > 2º Coluna > 2º Fileira " },
  { nome: "Curva 90° PVC PBA ", local: "  1º Tenda > 2º Prateleira > 2º Coluna > 1º Fileira " },
  { nome: "Tê PEX Multicamada 16x16x16mm ", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 3º Fileira " },
  { nome: "Cotovelo 90° PEX Multicamada 16x16", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 3º Fileira " },
  { nome: "Distribuidor Aberto com Rosca Pex 3/4, 4 saidas ", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 3º Fileira " },
  { nome: "Tê de Redução de PVC PBA 100/75 x de 100/ 85mm", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 2º Fileira " },
    { nome: "Tê de Redução de PVC PBA- DN 75 / 50 x DE 85/ 60mm", local: " 1° Tenda > 2° Prateleira > 3° Coluna > 2° Fileira " },
    { nome: "Bomba para Piscina com Filtro Monofásico, Potência 1/3 CV, Vazão  ", local: "Box 1" },
    { nome: "VentoKit ", local: "Box 1" },
    { nome: "Conjunto de Filtro e Bomba, Vazão Nominal=33,0m2/h Potência=3,0CV - Hman= 14,0mca  ", local: "Box 1" },
    { nome: "Redução de PVC PBA 110x85mm - Junta Elástica - Bolsa, Bolsa", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 2º Fileira " },
    { nome: "Redução de PVC PBA - 85x60mm - Junta Elástica - Ponta,Bolsa ", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 2º Fileira " },
    { nome: "Curva 90° de PVC PBA -DN 75 / DE 85mm - Junta Elástica - Ponta, Bolsa ", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 1º Fileira " },
    { nome: "Curva 45° de PVC PBA - DN 75 / DE 85mm - Junta Elástica - Ponta, Bolsa ", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 1º Fileira " },
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

  if (termo === "") {
    resultList.classList.remove("show"); // Esconde a lista se o campo estiver vazio
    return;
  }

  const resultados = pecas.filter(p => p.nome.toLowerCase().includes(termo));

  if (resultados.length > 0) {
    resultList.classList.add("show"); // Mostra a lista apenas se tiver resultados

    resultados.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.nome;
      li.classList.add("sugestao");
      li.addEventListener("click", () => mostrarLocalizacao(p));
      resultList.appendChild(li);
    });
  } else {
    resultList.classList.remove("show"); // Se não tiver resultados, esconde
  }
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
