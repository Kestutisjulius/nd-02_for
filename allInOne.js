/*1. */
    for (let i = 1; i <= 5; i++) {
        console.log(`${i}). Labas`);
    }

/*2. */
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*3. */
for (let i = 0; i <= 40; i += 10) {
    console.log(i);
}

/*4.*/
for (let i = 49; i <= 53; i++){
    console.log(i);
}

/*5.*/
for (let i = 0; i < 5; i++){
    console.log(Math.floor(Math.random() * 11));
}

/*6.*/
for (let i = 1; i <= 20; i++){
    if (i % 3 !== 0) {
        console.log(i + ' nesidalyja is 3');
    }
}

/*7.daugyba is skaiciaus*/
let skaicius = 9; 
for (let i = 1; i <= 10; i++){
    console.log(skaicius * i);
}
/*8. nuo 1 iki n colius centimetrais.*/
let cm = 0; let inch = 2;
for (let i = 1; i <= inch; i++){
    console.log(`${i} inches = ` + i*2.54 + ' cm');
  }   

  /*9. Bankas moka 2% , Ataskaitoje pateikite: metus, palūkanas, indėlį.*/
    const yers = 2; let contribution = 100; let interest = 0.02;
  for (var i = 1; i <= yers; i++){
   let difference = (contribution * interest) ;
    contribution += difference;
 console.log(`for ${i} yer(s) contribution: ${(Math.round(contribution*1000)/1000)} € from them difference ${(Math.round(difference*1000)/1000)} €`);
 increment = contribution - difference;
}  

/*10. visus mūsų eros keliamuosius metus.*/
        let range = true ;
    for ( let years = 1 ; years < 9999; years++ ) {
        if (years % 4 != 0) {
            range = false;
        } else 
        if (years % 100 === 0 && years % 400 !== 0) {
            range = false;
        }     else {  
        console.log( `This: ${years} is LEAP`);
        }
    } 