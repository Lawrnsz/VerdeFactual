const messages = [
  { time: "10:00", sender: "bot", text: "Olá! Bem-vindo ao Papo Factual, seu portal de notícias e curiosidades sobre o meio ambiente! 🌱 Como posso te ajudar hoje?" },
  { time: "10:05", sender: "user", text: "Oi! Eu queria saber mais sobre os impactos do desmatamento na Amazônia. Vocês têm alguma matéria sobre isso?" },
  { time: "10:15", sender: "bot", text: "Com certeza! O desmatamento na Amazônia é um tema urgente. Ele tem sérios impactos à biodiversidade, clima e também afeta a vida das comunidades locais. Temos uma matéria recente no nosso portal que fala sobre os principais danos ambientais causados pela prática. Você pode conferir mais detalhes clicando aqui: [link fictício]." },
  { time: "10:20", sender: "user", text: "Sim, por favor! E vocês têm dicas para ajudar no combate ao desmatamento?" },
  { time: "10:25", sender: "bot", text: "Temos sim! Entre as ações que você pode adotar estão apoiar organizações que atuam em preservação, reduzir o consumo de produtos ligados ao desmatamento, como carne bovina e derivados de áreas desmatadas, e espalhar informações corretas sobre o tema. Que tal nos ajudar com essa diferença?" },
  { time: "10:30", sender: "user", text: "Quero sim! Existe alguma iniciativa comunitária para reflorestamento que eu possa apoiar?" },
  { time: "10:35", sender: "bot", text: "Sim, há vários projetos incríveis acontecendo no momento! Algumas ONGs promovem plantios participativos de árvores, inclusive com envolvimento de escolas e comunidades urbanas. Há também campanhas de financiamento coletivo que você pode apoiar financeiramente ou presencialmente. Que incrível sua atitude!" },
  { time: "10:40", sender: "user", text: "Seria ótimo! Quero muito contribuir de alguma forma." },
  { time: "10:45", sender: "bot", text: "Maravilha! Em nossa seção “Contribuir” você pode encontrar uma lista de projetos ambientais que aceitam voluntariado, doações e apoio técnico. Sua participação faz toda a diferença!" },
  { time: "10:50", sender: "user", text: "Que incrível! Vou conferir agora mesmo. Obrigado!" },
  { time: "11:00", sender: "bot", text: "Maravilha! Em nossa seção “Contribuir” você pode encontrar uma lista de projetos ambientais que aceitam voluntariado, doações e apoio técnico. Sua participação faz toda a diferença!" },
];

const chatBody = document.getElementById('chatBody');

messages.forEach(msg => {
  const msgBlock = document.createElement('div');
  msgBlock.className = 'message-block';

  const time = document.createElement('span');
  time.className = 'timestamp';
  time.textContent = msg.time;

  const bubble = document.createElement('div');
  bubble.className = msg.sender === 'bot' ? 'bot-message' : 'user-message';
  bubble.textContent = msg.text;

  msgBlock.appendChild(time);
  msgBlock.appendChild(bubble);
  chatBody.appendChild(msgBlock);
});

// Scroll até o final
chatBody.scrollTop = chatBody.scrollHeight;
