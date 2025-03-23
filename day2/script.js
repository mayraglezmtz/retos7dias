document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let aciertos = 0;

    // Función para voltear la carta
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add("flip");

        if (!hasFlippedCard) {
            // Primera carta volteada
            hasFlippedCard = true;
            firstCard = this;
        } else {
            // Segunda carta volteada
            hasFlippedCard = false;
            secondCard = this;

            checkForMatch();
        }
    }

    // Función para verificar si las cartas coinciden
    function checkForMatch() {
        if (firstCard.dataset.id === secondCard.dataset.id) {
            // Coinciden
            disableCards();
            aciertos++;
            document.getElementById("aciertos").textContent = aciertos;
        } else {
            // No coinciden
            unflipCards();
        }
    }

    // Función para deshabilitar las cartas coincidentes
    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
    }

    // Función para voltear las cartas nuevamente si no coinciden
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetBoard();
        }, 1000);
    }

    // Función para reiniciar el tablero
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    // Barajar las cartas
    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
    })();

    // Agregar evento de clic a cada carta
    cards.forEach(card => card.addEventListener("click", flipCard));
});