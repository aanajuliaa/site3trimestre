
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.container');

    // Função para embaralhar os cartões
    function shuffleCards() {
        const shuffled = Array.from(cards).sort(() => Math.random() - 0.5);
        shuffled.forEach(card => container.appendChild(card)); // Adiciona os cartões embaralhados ao container
    }

    shuffleCards(); // Chama a função para embaralhar os cartões

    // Adiciona o evento de clique para girar os cartões
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardInner = card.querySelector('.card-inner');
            cardInner.classList.toggle('active'); // Adiciona ou remove a classe 'active' no cartão
        });
    });
});
