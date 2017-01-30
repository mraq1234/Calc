var bufor = '';
var wyrazenie = '';
var wyswietlacz = document.getElementById('wyswietlacz');
var funkcja = false;

var przyciski = document.querySelectorAll('div.key');
for (i = 0; i < przyciski.length; i++) {
    klasa = przyciski[i].className.replace('key', '').trim();
    if (klasa === 'btn') {
        przyciski[i].onclick = btn_func;
    } else if (klasa === 'func' || klasa === 'plus') {
        przyciski[i].onclick = func_func;
    } else if (klasa === 'equal') {
        przyciski[i].onclick = eval_func;
    } else if (klasa === 'clear') {
        przyciski[i].onclick = clear_func;
    } else {
        przyciski[i].onclick = digit_func;
    }

function btn_func() {
    bufor += this.id;

    wyswietlacz.innerHTML = bufor;
    funkcja = false;
}

function eval_func() {
    var wartosc = 0;
    var str = '0';
    if (funkcja) {
        str = wyrazenie.substr(0, wyrazenie.length - 1); //jeśli wcześniej był wciśnięty przycisk funkcji to przed przeliczeniem musimy go usunąć
    } else if (bufor != '' || wyrazenie != '') {
        str = wyrazenie + bufor; //jeśli nie to nie można zapomnieć o tym co na wyświetlaczu
    } 
    wartosc = eval(str);
    wyswietlacz.innerHTML = wartosc;
    wyrazenie = '';
    if (bufor != '0') {
        bufor = wartosc;
    } else {
        bufor = '';
    }
    
}
//tutaj będzie obsługa +/-


function func_func() {
  /*  if (bufor == '' && wyrazenie == '' && this.id != '-') {
        return;
    } else if (this.id == '-' && funkcja === false) {
        //wyrazenie += this.id;
        bufor += '-';
        wyswietlacz.innerHTML = bufor;
        bufor = '';
        funkcja = true;
        return;
    } coś tu nie hula */ 
    //sprawdzamy czy poprzednio nie był wciśnięty klawisz funkcyjny
    if (funkcja === true) {
        wyrazenie[wyrazenie.length - 1] = this.id; //tutaj zamieniamy na nowo wybraną funkcję
        return;
    }
    wyrazenie = wyrazenie + bufor + this.id;
    bufor = "";
    funkcja = true;
}

function clear_func() {
    bufor = '';
    wyrazenie = '';
    wyswietlacz.innerHTML = '0'
    funkcja = false;
    return;
}

function digit_func() {

}



}