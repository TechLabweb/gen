let quotes = [
    "Я того маму ебал",
    "MADELINE suck",
    "dura ebanaya",
    "TechLab — the best studio in the world",
    "Морфизм прив",
    "Morphin qq",
    "Hello! My Name is August!",
    "десигнерс сосайте))))",
    "прив вегас как курсач??",
    "маделин не закончит биржу никогдаа",
]

function generateRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}

document.getElementById("generate-quote").addEventListener("click", function() {
    let randomQuote = generateRandomQuote();
    document.getElementById("quote").textContent = randomQuote;
})

function addNewQuote() {
    let newQuote = document.getElementById("new-quote").value;
    if (newQuote) {
        quotes.push(newQuote);
        document.getElementById("new-quote").value = "";
        alert ("Цитата успешно добавлена");
    }
}

document.getElementById("add-quote").addEventListener("click", addNewQuote);