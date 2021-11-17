
function countNumVisits(){
    let count = 0;

    function addToCount(){
        count ++;
        console.log( count );
    }

    return addToCount;
}


let globalCount = countNumVisits();


function listOfNames(){
    let names = [];

    function addToList( name ){
        names.push( name );
        return names;
    }

    return addToList;
}

let fullList = listOfNames();

console.log( "FullList:", fullList( "Alex" ) );
console.log( "FullList:", fullList( "Maria" ) );

let secondList = listOfNames();

console.log( "SecondList:", secondList( "Roger" ) );

console.log( "FullList:", fullList( "Julie" ) );