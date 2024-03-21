// Code your solutions in this file
const namesArray =["Tulley","frenchie","Mary"];

const writeCards=(namesArray,event)=>{
    let thanksCards=[]
    for (let i=0; i< namesArray.length; i++ ){
        thanksCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
   return thanksCards
    
}
const event = "birthday";
const cards = writeCards(namesArray, event);
console.log(cards);

const countDown =(startingNo) =>{
    while (startingNo> 0){
        console.log(startingNo);
        startingNo-=1;
    }
    console.log(startingNo);

}
