// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
// Buon lavoro a tutte e a tutti!!

// creare la lista
const list = ["frutta", "verdura", "carne", "pesce", "pane", "aqua"];
// stampare la lista
//dichiarare variabile contatore
let i = 0;
let listElement = " ";
// condizione di uscita
while (i < list.length) {
  // i<6
  // dopo ogni esecuzione di while, aggiungere nella variabile
  // listElement un elemento dell'array alla lista spesa
  listElement += "<li>" + list[i] + "</li>";
  i++;
  console.log(listElement);
}
// stampare output
document.getElementById("lista-spesa").innerHTML = listElement;
