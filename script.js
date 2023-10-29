//1.Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.
function dataortalama(data) {
    let toplam = 0

    for (let i = 0; i < data.length; i++) {
        toplam = toplam + data[i]
    }
    let ortalama = toplam / data.length
    return ortalama
}
console.log(dataortalama([2, 3, 4, 5, 6, 7, 8]));


const dataorta = (data) => {
    let toplam = 0

    for (let i = 0; i < data.length; i++) {
        toplam = toplam + data[i]

    }
    let ortalama = toplam / data.length
    return ortalama
}
console.log(dataorta([2, 3, 4, 5, 6, 7, 8]));



//2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
const cuttoplam = (arr) => {
    let toplam = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            toplam = toplam + arr[i]
        }
    }
    return toplam
}
console.log(cuttoplam([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//3.Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
const tektoplam = (arr) => {
    let toplam = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            toplam = toplam + arr[i]
        }
    }
    return toplam
}
console.log(tektoplam([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//4.Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.
const hasiltap = (arr) => {
    let cut = 0
    let tek = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            cut = cut + arr[i]

        } else if (arr[i] % 2 === 1) {
            tek = tek + arr[i]
        }
    }
    const hasil = tek * cut
    return hasil
}
console.log(hasiltap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));