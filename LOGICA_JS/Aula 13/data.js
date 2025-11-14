function data(){
    var hoje = new Date()

    console.log(hoje);
    console.log(hoje.toString());
    
    console.log(hoje.toISOString());

    console.log(hoje.toLocaleString());
    console.log(hoje.toLocaleDateString());
    console.log(hoje.toLocaleTimeString());

    var dataFormatada = {
        dd: hoje.getDate(),
        mm: hoje.getMonth(),
        aaaa: hoje.getFullYear()
    }

    console.log(dataFormatada);

    var mesLongo = hoje.getLocaleString("pt-br", {month: "long"});
    var mesCurto = hoje.getLocaleString("pt-br", {month: "short"});
    console.log(mesLongo);
    console.log(mesCurto);
    
    var weekDayLongo = hoje.toLocaleString("pt-br", {weekday: "long"});
    var weekDayCurto = hoje.toLocaleString("pt-br", {weekday: "short"});
    console.log(weekDayLongo);
    console.log(weekDayCurto);
}

data();