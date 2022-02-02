function contar() {
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var pas  = document.getElementById("txtp")
    var res = document.getElementById("res")

    if(ini.value.length == 0 || fim.Value.length == 0 ||pas.value.length == 0) {
    alert("[ERRO] Faltam dados")
} else {
    res.innerHTML = 'contando'
    let i = Number(ini.value)
    let f = Number(ini.value)
    let p = Number(ini.value)
    for(var c = i ; c <=f; c*=p){
        res.innerHTML += `${c}`//
    }
}
}