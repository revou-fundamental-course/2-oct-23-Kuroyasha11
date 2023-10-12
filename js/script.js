const input = document.getElementById('input')
const hasil = document.getElementById('hasil')
const kalkulasi = document.getElementById('kalkulasi')
const konversi = document.getElementById('konversi')
const reset = document.getElementById('reset')
const sebaliknya = document.getElementById('sebaliknya')
const label_input = document.getElementById('label_input')
const label_hasil = document.getElementById('label_hasil')
let kebalikan = false
const regex = /^[+-.,eE\d]+$/

const t_konversi = () => {
    try {
        if (regex.test(input.value)) {
            if (!kebalikan) {
                hasil.value = (input.value * 9 / 5) +32
                kalkulasi.value = `${input.value}% * (9/5) + 32 = ${hasil.value}%` 
            } else {
                hasil.value = (input.value - 32) * 5/9
                kalkulasi.value = `(${input.value}% - 32) * 5/9 = ${hasil.value}%` 
            }
        } else  {
            throw new SyntaxError("Input tidak Valid!")
        }
    } catch (error) {
        alert('Konversi Gagal : ' + error.messsage)
    }
} 

const t_sebaliknya = () => {
    try {
        kebalikan = !kebalikan
        let temp = label_input.innerText
        label_hasil.innerText = temp
        input.value = hasil.value
        if(hasil.value){
            t_konversi()
        }
    } catch (error) {
        alert('Sebaliknya Gagal : ' + error.messsage)
    }
}

const t_reset = () => {
    try {
        input.value = ""
        hasil.value = ""
        kalkulasi.value = ""
    } catch (error) {
        alert('Reset Gagal : ' + error.messsage)
    }
}
