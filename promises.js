

function oldEnoughToDrive( resolve, reject ){
    let age = 11;
    let name = "Alex";
    
    if( age >= 16 ){
        resolve( `${name} is eligible to drive!` );
    }
    else{
        reject( `${name} is not old enough to drive!` );
    }
}


let wait = new Promise( oldEnoughToDrive );

wait
    .then( response => {
        console.log( response );
    })
    .catch( error => {
        console.log( error );
    });

console.log( "This will execute first" );
