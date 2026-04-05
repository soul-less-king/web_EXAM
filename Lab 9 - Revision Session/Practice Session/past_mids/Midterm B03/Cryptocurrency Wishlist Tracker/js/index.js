const API_URL = "https://gist.githubusercontent.com/abdalabaaji/6b4a99b4d27f33d8c639e3e0dbade2dc/raw/b1baf7a6020b9115dc18313a2f1f72df634b95c5/crypto";

let cryptoData = [];

fetchCryptoData()

async function fetchCryptoData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        cryptoData = data; 
        displayCryptoData(cryptoData); 

    } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
    }
}

function displayCryptoData(data) {
    const coinList = document.getElementById("coinList");
    coinList.innerHTML = "";
    
    data.forEach(coin => {
        const coinCard = document.createElement("div");
        coinCard.classList.add("coin-card");

        coinCard.innerHTML = `
            <img src="${coin.icon}" alt="${coin.name} Icon">
            <h2>${coin.name}</h2>
            <p>Symbol: ${coin.symbol}</p>
            <p>Price: $${coin.price.toLocaleString()}</p>
            <p>Market Cap: $${coin.cap.toLocaleString()}</p>
            <button onclick="addToWishlist('${coin.symbol}')">Add to Wishlist</button>
        `;

        coinList.appendChild(coinCard);
    });
}




function sortData(criteria) {
    let sortedData = [...cryptoData];
    if (criteria === "name") {
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "price") {
        sortedData.sort((a, b) => a.price - b.price);
    }
    displayCryptoData(sortedData);
}


document.getElementById("sortOptions").addEventListener("change", (event) => {
    sortData(event.target.value);
});


function addToWishlist(symbol) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.some(coin => coin.symbol === symbol)) {
        alert(`${symbol} is already in your wishlist!`);
        return;
    }

   
    const coinToAdd = cryptoData.find(coin => coin.symbol === symbol);
    if (coinToAdd) {
        wishlist.push(coinToAdd); 
        localStorage.setItem("wishlist", JSON.stringify(wishlist)); 
        alert(`${symbol} added to your wishlist!`);
    }
}

document.getElementById("showWishlist").addEventListener("click", displayWishlist);

function displayWishlist() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const coinList = document.getElementById("coinList");
    coinList.innerHTML = ""; 

    if (wishlist.length === 0) {
        coinList.innerHTML = "<p>Your wishlist is empty!</p>";
        return;
    }

    wishlist.forEach(coin => {
        const coinCard = document.createElement("div");
        coinCard.classList.add("coin-card");

        coinCard.innerHTML = `
            <img src="${coin.icon}" alt="${coin.name} Icon">
            <h2>${coin.name}</h2>
            <p>Symbol: ${coin.symbol}</p>
            <p>Price: $${coin.price.toLocaleString()}</p>
            <p>Market Cap: $${coin.cap.toLocaleString()}</p>
            <button onclick="removeFromWishlist('${coin.symbol}')">Remove</button>
        `;

        coinList.appendChild(coinCard);
    });
}


function removeFromWishlist(symbol) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

 
    wishlist = wishlist.filter(coin => coin.symbol !== symbol);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(`${symbol} removed from wishlist!`);
    displayWishlist();
}





/*

// Home Page
<div class="coin-card">
    <img src="https://via.placeholder.com/50" alt="Coin Icon">
    <h2>Bitcoin</h2>
    <p>Symbol: BTC</p>
    <p>Price: $61,915.5</p>
    <p>Market Cap: $1,121,393,739,784</p>
    <button>Add to Wishlist</button>
</div>


// Wishlist Card
<div class="coin-card">
    <img src="https://via.placeholder.com/50" alt="Coin Icon">
    <h2>Ethereum</h2>
    <p>Symbol: ETH</p>
    <p>Price: $3,895.7</p>
    <p>Market Cap: $467,823,479,682</p>
    <button>Remove</button>
</div>

*/


