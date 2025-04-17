const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const selectedKitsDisplay = document.getElementById('selectedKitsDisplay');
const form = document.getElementById('requisicaoForm');
const preview = document.getElementById('preview');

// Definindo a composição de cada kit
const composicaoKits = {
    "kaua": [
        "kaukk",
        "5 rolos de fio 1,5mm",
        "20 caixas de luz",
        "15 tomadas 10A",
        "5 disjuntores 20A"
      ],
  "Kit Elétrico": [
    "10 rolos de fio 2,5mm",
    "5 rolos de fio 1,5mm",
    "20 caixas de luz",
    "15 tomadas 10A",
    "5 disjuntores 20A"
  ],
  "Kit Hidráulico": [
    "10 tubos PVC 100mm",
    "20 conexões 100mm",
    "5 rolos de fita veda-rosca",
    "10 registros de pressão",
    "5 metros de mangueira flexível"
  ],
  "Kit de Segurança": [
    "5 capacetes",
    "10 óculos de proteção",
    "8 pares de luvas",
    "5 cintos de segurança",
    "10 protetores auriculares"
  ],
  "Kit Ferramentas": [
    "5 martelos",
    "3 serrotes",
    "2 furadeiras",
    "10 chaves de fenda",
    "5 alicates universais"
  ]
};

// Função para mostrar os itens do kit em um modal centralizado
function mostrarDetalhesKit(nomeKit) {
    const itens = composicaoKits[nomeKit];
    if (!itens) return;
  
    // Criar overlay (fundo escuro)
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.borderRadius = '8px';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
  
  
    // Criar modal
    const modal = document.createElement('div');
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.textShadow = 'none';
    modal.style.borderRadius = '8px';
    modal.style.width = '80%';
    modal.style.maxWidth = '500px';
    modal.style.maxHeight = '80vh';
    modal.style.overflowY = 'auto';
    modal.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
    
    // Adicionando display flex e column ao conteúdo do modal
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
     
  
    // Conteúdo do modal com estrutura flex column
    modal.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        gap: 7px;
        position: relative;
        color: black;
      
        
      ">
      
    
        <h3 style="margin: 0; color: #black; font-size: 30px; font-family: teko;">Composição do ${nomeKit}</h3>
        <ul style="
          color:gray/
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-left: 20px;
          margin: 0;
           text-shadow: none;
          font-size: 25px;
          font-family: teko;
          
           
          
        ">
          ${itens.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button style="
          position: absolute;
          top: 0;
          right: 0;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #666;
          
        ">×</button>
      </div>
    `;
  
    // Adicionar modal ao overlay
    overlay.appendChild(modal);
  
    // Adicionar overlay ao body
    document.body.appendChild(overlay);
  
    // Fechar modal ao clicar no botão X
    modal.querySelector('button').addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  
    // Fechar modal ao clicar no overlay (fora do modal)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        document.body.removeChild(overlay);
      }
    });
  }

// Mostrar/ocultar dropdown
dropdownBtn.addEventListener('click', () => {
  const isVisible = dropdownContent.style.display === 'block';
  dropdownContent.style.display = isVisible ? 'none' : 'block';
});

// Atualizar texto com kits selecionados e mostrar detalhes quando marcado
dropdownContent.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const selected = Array.from(dropdownContent.querySelectorAll('input:checked'))
                          .map(input => input.value);
    selectedKitsDisplay.textContent = selected.length
      ? selected.join(', ')
      : 'Nenhum kit selecionado';

    // Se o checkbox foi marcado, mostrar detalhes do kit
    if (e.target.checked) {
      mostrarDetalhesKit(e.target.value);
    }
  }
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent.style.display = 'none';
  }
});

// Envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const encarregado = document.getElementById('encarregado').value.trim();
  const obra = document.getElementById('obra').value.trim();
  const adicionais = document.getElementById('adicional').value.trim();
  const kits = Array.from(dropdownContent.querySelectorAll('input:checked'))
                    .map(input => input.value);

  const mensagem = ` REQUISIÇÃO\n\n` + 
                `👷 Encarregado: ${encarregado}\n` +
                `🏗️ Obra: ${obra}\n` +
                `🧰 Kits: ${kits.join(', ') || 'Nenhum'}\n` +
                ` Adicionais: ${adicionais || 'Nenhum'}`;

  preview.textContent = mensagem;
  const phoneNumber = "5561996896166"; 
  
  // Criar o link do WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
  
  // Abrir o WhatsApp em uma nova aba
  window.open(whatsappUrl, '_blank');
  
  // Limpar o formulário (opcional)
  form.reset();
  selectedKitsDisplay.textContent = 'Nenhum kit selecionado';
;
});