let quote = document.getElementsByClassName("quotecontainer")[0]
console.log(quote) 

function click(){
    console.log("quote")
quote.innerhtml = "Science is bomb, bro"
}

quote.addEventListener("click", function (){
    console.log(document.querySelector('.Quote'))
    this.querySelector(".Quote").innerHTML = "Nothing in science has any value to society if it is not communicated." 
    this.querySelector("#quoteattribute").innerHTML = "~ Anne Roe"
})