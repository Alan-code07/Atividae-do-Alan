function openTab(tabId) {
  // Oculta todas as abas
  document.querySelectorAll('.tab-content')
          .forEach(tab => tab.classList.remove('active'));

  // Remove "active" dos botões
  document.querySelectorAll('.tab-btn')
          .forEach(btn => btn.classList.remove('active'));

  // Mostra a aba clicada
  document.getElementById(tabId).classList.add('active');

  // Marca o botão clicado
  event.target.classList.add('active');
}
