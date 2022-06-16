let allQuotes = [];
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const newQuoteBtn = document.getElementById('new-quote')
const twitterBtn = document.getElementById('twitter')

// getting the quotes from the api
const getQuotes = async ()=>{
    try{
        const response = await fetch("https://type.fit/api/quotes")
        allQuotes = await response.json() 
        console.log(allQuotes)     
    }catch(exception){
        console.log(exception);
    }
}

// getting one random quote from the response
const randomQuote =()=>{
    const quote = allQuotes[Math.floor(Math.random()*allQuotes.length)];
    quoteText.textContent = quote.text;
    
    quote.author? quoteAuthor.textContent = quote.author : quoteAuthor.textContent = 'Unknown'
    if(quote.text.length>100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote')
    }
}

//onLoad
getQuotes()
.then(()=>randomQuote())

const tweetQuote = ()=>{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
    window.open(twitterUrl,"_blank")
}


//event listeners
newQuoteBtn.addEventListener('click',randomQuote)
twitterBtn.addEventListener('click',tweetQuote)