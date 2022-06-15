// getting the quotes from the api
let allQuotes = [];

const getQuotes = async ()=>{
    try{
        const response = await fetch("https://type.fit/api/quotes")
        allQuotes = await response.json()
        console.log(allQuotes);
        return allQuotes;

    }catch(exception){
        console.log(exception);
    }
}

// getting one random quote from the response

const getRandomQuote = ()=>{
    const quoteNumber = Math.floor(Math.random()*allQuotes.length);
    return allQuotes[quoteNumber]

}

// displaying the quote and the author
const displayQuote = ()=>{
    const quote = getRandomQuote();
    document.getElementById("quote").innerHTML = quote.text;
    document.getElementById("author").innerHTML = quote.author;
}