// Eseményfigyelő a DOMContentLoaded eseményre
document.addEventListener('DOMContentLoaded', () => {
    // API hívás a randomuser.me végponthoz
    fetch('https://randomuser.me/api/')
        .then(response => {
            // Ellenőrzi, hogy a válasz sikeres-e
            if (!response.ok) {
                throw new Error('Hálózati hiba történt.');
            }
            return response.json(); // Válasz JSON formátumú adatokká alakítása
        })
        .then(data => {
            const user = data.results[0]; // Az első felhasználó adatai

            // Profilkép beállítása
            document.getElementById('profil-kep').src = user.picture.large;
            document.getElementById('profil-kep').alt = `${user.name.first} ${user.name.last} profilképe`;

            // Név beállítása
            document.getElementById('nev').textContent = `${user.name.first} ${user.name.last}`;

            // Email beállítása
            document.getElementById('email').textContent = `Email: ${user.email}`;

            // Telefonszám beállítása
            document.getElementById('telefon').textContent = `Telefon: ${user.phone}`;
        })
        .catch(error => {
            // Hiba esetén logoljuk a konzolba és felhasználóbarát üzenetet jelenítünk meg
            console.error('Error fetching user data:', error);
            document.getElementById('profil').innerHTML = '<p>Profiladatok betöltése sikertelen.</p>';
        });
});
