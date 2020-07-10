'use strict';

/*const random = (min, max) => {
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const generateNumbers = (amount, from, to) => {
    let str = '' ;
    for (let i = 0 ; i < amount ; i++) {
        str += (!str ? '' : ',') + random (from, to) ;
    }
    return str ;
}

const listOfNumbers = generateNumbers (10, 50, 100);

console.log (listOfNumbers) ;*/

let globalId = 1 ;

const createMonster = (id, name, superpower, area) =>  ({
    id : globalId++ ,
    userId : id , 
    name ,
    superpower ,
    area ,
});

/*const ktulhu = createMonster (1, 'asd', 'asdasd', 'asdasdasd') ;
const elder = createMonster (2, 'jk', 'jkjk', 'jkjkjk') ;*/


/*for (const key in ktulhu) {
    if (ktulhu.hasOwnProperty(key)) {
        const value = ktulhu[key];
        console.log (value, key) ;        
    }
}*/

/*const ktulhuv2 = ktulhu ;

console.log (ktulhu, `\n`, ktulhuv2) ;
delete ktulhuv2.name ;*/
