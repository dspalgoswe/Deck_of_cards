document.getElementById('drawCardButton').addEventListener('click', drawCard);

function drawCard() {
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Hämta bild URL och skapa bild element
                const card = data.cards[0];
                const cardDiv = document.getElementById('cardImage');

                // Rensa tidigare kort
                cardDiv.innerHTML = '';

                // Skapa ett nytt bild element
                const img = document.createElement('img');
                img.setAttribute('src', card.image);
                img.setAttribute('alt', `${card.value} of ${card.suit}`);
                img.style.width = '300px'; // Ställ in önskad storlek på kortet
                img.style.height = 'auto';  // Bevara bildens proportioner

                // Lägg till bild i div
                cardDiv.appendChild(img);
            } else {
                console.error('Misslyckades med att dra kort');
            }
        })
        .catch(error => {
            console.error('Fel vid hämtning av kort:', error);
        });
}