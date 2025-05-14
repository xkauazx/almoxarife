// Base de dados fictícia (pode ser alimentada dinamicamente no futuro)
const pecas = [
  { nome: "Luva Simples 100mm de PVC Série Normal", local: " 1º Tenda > 1º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Calça Amarela GG", local: "2º Tenda > 8º Prateleira > 3º Coluna > 1º Fileira" },
  { nome: "Joelho 45º 50mm de PVC Série Normal - Esgoto", local: "1º Tenda > 1º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Junção Simples 100x100mm Série Normal - Esgoto ", local: "  1º Tenda > 1º Prateleira > 1|2º Coluna > 2º Fileira " },
  { nome: "Junção Simples 40x40mm Série Normal - Esgoto ", local: "  1º Tenda > 1º Prateleira > 2º Coluna > 3º Fileira " },
  { nome: "Bucha de Redução Longa de PVC 50x40mm Série Normal - Esgoto", local: "  1º Tenda > 1º Prateleira > 2º Coluna > 1º Fileira " },
  { nome: "Luva Simples 50mm  Série Normal - Esgoto", local: "  1º Tenda > 1º Prateleira > 3º Coluna > 1/2º Fileira " },
  { nome: "Luva  Simples 75mm Série Normal - Esgoto", local: "  1º Tenda > 1º Prateleira > 3º Coluna > 3º Fileira " },
  { nome: "Te de Pvc 40x40mm Série Normal - Esgoto", local: "  1º Tenda > 1º Prateleira > 2º Coluna > 3º Fileira " },
  { nome: "Tê de PVC Soldável com bucha de latão 025x1/2", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 3º Fileira " },
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
  { nome: "Luva de PVC Soldável com Bucha Latão 32x1 - Água Fria ", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 3º Fileira " },
  { nome: "Joelho 90° de PVC Soldável com Bucha Latão 20mmx1/2 - Água Fria ", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 3º Fileira " },
  { nome: "Luva de PVC Soldável com Bucha Latão 25x3/4 - Água Fria ", local: "  1º Tenda > 2º Prateleira > 1º Coluna > 3º Fileira " },
  { nome: "Hidrômetro Unijato 0/1 Qn = 0,75m/h - Qmac.=1,5m/h - Classe B - Pré equipado  ", local: "  1º Tenda > 2º Prateleira > 3º Coluna > 3º Fileira " },
  { nome: "Luva de CPVC Soldável 54mm - Água Quente ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
  { nome: "Joelho 90° de CPVC Soldável 54mm - Água Quente ", local: "  ?º Tenda > ?º Prateleira > ?º Coluna > ?º Fileira " },
  { nome: "Curva 90° de PVC PBA - DN 100 / DE 110mm - Junta Elástica - Ponta, Bolsa ", local: "  1º Tenda > 2º Prateleira > 2º Coluna > 1º Fileira " },
  { nome: "Curva 45° de PVC Soldável - 110mm - Água Fria ", local: "  1º Tenda > 2º Prateleira > 2º Coluna > 1º Fileira " },
  { nome: "Luva de PVC Soldável com bucha de Redução 20mmx1/2 - Água Fria", local: " 1º Tenda > 2º Prateleira > 1º Coluna > 2º Fileira " },
  { nome: "Corpo Ralo Seco Articulado com saída Lateral ", local: " Painel 1/2° Prateleira (Frente)" },
  { nome: "Conexão PEX Curta com Rosca Fêmea Móvel - 16mm x 1/2 ", local: "Painel 1° Prateleira (Frente)  " },
  { nome: "Válvula de PVC  1.1/4 - Lavatorio", local: " 1° Tenda > 2° Prateleira > Parte Superior" },
  { nome: "Válvula Americana para Pia em ABS Cromado - 3.1/2' x 1.1/2 ", local: "  1º Tenda > 2º Prateleira > Parte Superior" },
  { nome: "Te de PVC Soldável 85mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Te de PVC Soldável 50mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Te de PVC Soldável 75mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Joelho 45° Soldável 60mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Te de Redução 90° Soldável 50x25mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Te de PVC Soldável 25mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Te de Redução 90° de PVC 50x32mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Te de PVC 32x25mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Bucha de Redução de PVC Soldável Longa 60x32mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Bucha de Redução de PVC Soldável Longa 85x60mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Luva de Redução de PVC Soldável 50x25mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Bucha de Redução de PVC Soldável Longa 40x32mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Bucha de Redução de PVC Soldável Longa 50x32mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Joelho 90° de PVC Soldável 50mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Luva de Redução de PVC Soldável 40x32mm - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Bucha de Redução Soldável Curta 25x20 - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Bucha de Redução de PVC Soldável Curta 25x20 - Água Fria", local: "1º Tenda > 3º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Te de PVC Soldável 20mm - Água Fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 3º Fileira" },
  { nome: "Te de PVC Soldável 32mm - Água Fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 3º Fileira" },
  { nome: "Te de Redução 90° de PVC Soldável 40x25mm - Água Fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 3º Fileira" },
  { nome: "Te de PVC Soldável 40mm - Água Fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 3º Fileira" },
  { nome: "Te de Redução 90° de PVC Soldável 50x32mm - Água Fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 3º Fileira" },
  { nome: "Bucha de redução de PVC soldável longa 40x25mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Joelho 45° PVC soldável 32mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Joelho de 45° de PVC soldável 32mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Joelho 45° de PVC soldável 20mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Luva de PVC soldável 20mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Bucha de redução de PVC soldável curta 60x50mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Bucha de redução de PVC soldável longa 60x50mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Bucha de redução de PVC soldável longa 85x75mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Luva de PVC soldável 40mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Válvula de retenção vertical de PVC 50mm soldável", local: "1º Tenda > 3º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Válvula de retenção horizontal de PVC 50mm", local: "1º Tenda > 3º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Cap de PVC soldável 25mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Curva de 45° soldável 60mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Curva de 45° de PVC soldável 60mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Curva 90° de PVC soldável 50mm - água fria", local: "1º Tenda > 3º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Plug de PVC roscável 1/2", local: "1º Tenda > 3º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Niple de PVC roscável 1/2", local: "1º Tenda > 3º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Joelho de 45° de PVC soldável 75mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 3º Fileira" },
  { nome: "Joelho de 45° soldável 50mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 3º Fileira" },
  { nome: "Adaptador de PVC soldável curto com bolsa e rosca 25mmx3/4 - registro", local: "1º Tenda > 3º Prateleira > 3º Coluna > 3º Fileira" },
  { nome: "Bucha de redução de PVC soldável longa 110x75mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 3º Fileira" },
  { nome: "Bucha de redução de PVC soldável longa 110x60mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 3º Fileira" },
  { nome: "Bucha de redução de PVC soldável longa 75x50mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 3º Fileira" },
  { nome: "Adaptador de PVC soldável curto com bolsa e rosca 75mmx2.1/2 - registro", local: "1º Tenda > 3º Prateleira > 3º Coluna > 3º Fileira" },
  { nome: "Adaptador de PVC soldável curto com bolsa e rosca 50mmx1.1 - registro", local: "1º Tenda > 3º Prateleira > 3º Coluna > 3º Fileira" },
  { nome: "Joelho 90° de PVC soldável 60mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 2º Fileira" },
  { nome: "Joelho 90° de PVC soldável 40mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 2º Fileira" },
  { nome: "Joelho 90° de PVC soldável 32mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 2º Fileira" },
  { nome: "Joelho 90° de PVC soldável 20mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 2º Fileira" },
  { nome: "Joelho 90° de PVC soldável 25mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 2º Fileira" },
  { nome: "Joelho 90° de PVC soldável 75mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 1º Fileira" },
  { nome: "Joelho 90° de PVC soldável 110mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 1º Fileira" },
  { nome: "Curva 45° PVC soldável 25mm - água fria", local: "1º Tenda > 3º Prateleira > 3º Coluna > 1º Fileira" },
  { nome: "Fita tira trinca", local: "1º Tenda > 4º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Fita crepe 48mm x 50m", local: "1º Tenda > 4º Prateleira > 1º Coluna > 3º Fileira" },
  { nome: "Brocha", local: "1º Tenda > 5º Prateleira > 2º Coluna > 1º Fileira" },
  { nome: "Chave de fenda", local: "1º Tenda > 5º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Pincel trincha", local: "1º Tenda > 5º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Grelha hemisférica 100mm", local: "1º Tenda > 5º Prateleira > 1º Coluna > 1º Fileira" },
  { nome: "Grelha hemisférica 75mm", local: "1º Tenda > 5º Prateleira > 1º Coluna > 1º Fileira" },
  { nome: "Disco diamantado 110mm", local: "1º Tenda > 5º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Disco de serra circular 185mm", local: "1º Tenda > 5º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Disco diamantado 180mm", local: "1º Tenda > 5º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Kit serra-copos", local: "1º Tenda > 5º Prateleira > 2º Coluna > 3º Fileira" },
  { nome: "Filtro lixadeira", local: "1º Tenda > 5º Prateleira > 2º Coluna > 3º Fileira" },
  { nome: "Chave Philips", local: "1º Tenda > 5º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Espátula de aço", local: "1º Tenda > 5º Prateleira > 2º Coluna > 2º Fileira" },
  { nome: "Lápis para carpinteiro", local: "1º Tenda > 5º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Disco flap", local: "1º Tenda > 5º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Disco diamantado de desbaste 115mm", local: "1º Tenda > 5º Prateleira > 1º Coluna > 2º Fileira" },
  { nome: "Disco de desbaste 230mm", local: "1º Tenda > 5º Prateleira > 1º Coluna > 2º Fileira" },
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
