function calcTotal() {
    const qtd = Number(window.document.querySelector("#cQtd").value)
    const res = window.document.querySelector("#cTot")
    total = qtd * 1500
    res.value = total
}