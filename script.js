let somCount = document.querySelector('#som__count')
let dollarPrice = document.querySelector('#dollar__price')
let dollarCount = document.querySelector('#converted__dollars')
const convertBtn = document.querySelector('.convert__btn')
console.log(somCount.value)
console.log(dollarPrice.value)

convertBtn.addEventListener('click',(e => {

    if(isNaN(somCount.value) === true || somCount.value === "" || somCount.value === " " || somCount.value <= 0) {
        alert("Ошибка! Сомы введены неверно!")
        somCount.value = ""
    } 
    else if(isNaN(dollarPrice.value) === true || dollarPrice.value === "" || dollarPrice.value === " " || dollarPrice.value <= 0){
        alert("Ошибка! Курс введен неверно!")
        dollarPrice.value = ""
    }
    else {
        dollarCount.value = somCount.value / dollarPrice.value
        let dollarCountRounded = Math.floor(dollarCount.value * 100) / 100
        dollarCount.value = dollarCountRounded + " USD"
    }
}))

// console.log(soms.value);