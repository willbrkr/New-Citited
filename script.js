function start(){
    var author = getAuthor();
    var title = getTitle();
    var date = getDate();
    var pub = getPub();
    printCit(author, title, date, pub);
}

function getAuthor(){
    return prompt("Please enter the author of the work. ");
}

function getTitle(){
    return prompt("Please enter the title of the work. ");
}

function getDate(){
    return prompt("Please enter the date published. ");
}

function getPub(){
    return prompt("Who published the work? ");
}

function printCit(author, title, date, pub){
    var citation = `${author}, ${title}, ${date}, ${pub}`;
    alert(`Your Hancockonian citation is: ${citation} `);
    //console.log("Your citation is:");
    //console.log(citation);
}
