async function getQuote() {
    try {
        let response = await fetch("https://dummyjson.com/quotes");
        let quotes = await response.json();

        // Select a random quote from the array
        let randomIndex = Math.floor(Math.random() * quotes.quotes.length);
        let randomQuote = quotes.quotes[randomIndex];

        document.getElementById("quote").innerText = `"${randomQuote.quote}" - ${randomQuote.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").innerText = "Failed to fetch quote. Please try again later.";
    }
}
