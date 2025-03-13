async function getQuote() {
  try {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();

    document.getElementById("quote").innerText = `"${data.content}" - ${data.author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("quote").innerText = "Failed to fetch quote. Please try again later.";
  }
}

