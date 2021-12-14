const rozmiar_pola: number = 25
import schemat from './klocki'
let tablica: (number | string)[][] = [
    ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
]
let plansza_div: HTMLDivElement = document.createElement("div")
plansza_div.classList.add("plansza")
document.body.appendChild(plansza_div)
let plansza: HTMLImageElement = document.createElement("img")
plansza.classList.add("plansza")
plansza.src = "./assets/plansza.png"
plansza_div.appendChild(plansza)
let next: number
losowanie_nexta()
////////
function losowanie_nexta() {
    if (document.getElementById("next")) {
        plansza_div.removeChild(document.getElementById("next"))
    }
    next = Math.floor(Math.random() * (7 - 1)) + 1;
    let next_img: HTMLImageElement = document.createElement("img")
    next_img.id = "next"
    if (next == 3) {
        next_img.style.width = 100 + 'px'
    }
    else if (next == 5) {
        next_img.style.width = 50 + 'px'
        next_img.style.height = 50 + 'px'
    }
    else {
        next_img.style.width = 75 + 'px'
        next_img.style.height = 50 + 'px'
    }
    next_img.src = "./assets/kolor" + next + ".png"
    plansza_div.appendChild(next_img)
    return next
}

//////
let klocek: number[][]
let dodawany: number = next

losowanie_nexta()

switch (dodawany) {
    case 1: {
        klocek = schemat.schem1
        break;
    }
    case 2: {
        klocek = schemat.schem2
        break;
    }
    case 3: {
        klocek = schemat.schem3
        break;
    }
    case 4: {
        klocek = schemat.schem4
        break;
    }
    case 5: {
        klocek = schemat.schem5
        break;
    }
    case 6: {
        klocek = schemat.schem6
        break;
    }
    case 7: {
        klocek = schemat.schem7
        break;
    }
}




let x: number = 4
let y: number = 1

// for (let i = 0; i < klocek.length; i++) {
//     for (let j = 0; j < klocek[i].length; j++) {
//         if (klocek[i][j] == 1) {
//             tablica[y + i][x + j] = klocek[i][j]
//         }
//     }
// }
// let pion: number = 175 + 25 * y
// let poziom: number = 25 + 25 * x
// let dodawany_img: HTMLImageElement = document.createElement("img")
// dodawany_img.src = "./assets/kolor" + dodawany + ".png"
// dodawany_img.style.left = poziom + "px"
// dodawany_img.style.top = pion + "px"
// dodawany_img.style.position = "absolute"
// if (dodawany == 3) {
//     dodawany_img.style.width = klocek.length * rozmiar_pola + "px"
//     dodawany_img.style.height = 25 + "px"
// }
// else if (dodawany == 5) {
//     dodawany_img.style.width = klocek.length * rozmiar_pola + "px"
//     dodawany_img.style.height = klocek.length * rozmiar_pola + "px"
// }
// else {
//     dodawany_img.style.width = klocek.length * rozmiar_pola + "px"
//     dodawany_img.style.height = (klocek.length - 1) * rozmiar_pola + "px"
// }

// plansza_div.appendChild(dodawany_img)
// console.table(tablica)
//Pozdrawiam EA
function spadanie() {
    for (let i = 0; i < tablica.length; i++) {
        for (let j = 0; j < tablica[0].length; j++) {
            if (tablica[i][j] == 1) {
                tablica[i][j] = 0
            }
        }
    }
    for (let i = 0; i < klocek.length; i++) {
        for (let j = 0; j < klocek[i].length; j++) {
            if (klocek[i][j] == 1) {
                tablica[y + i][x + j] = klocek[i][j]
            }
        }
    }
    if (document.getElementById("rzyczniakchuj")) {
        plansza_div.removeChild(document.getElementById("rzyczniakchuj"))
    }

    let pion: number = 175 + 26 * y
    let poziom: number = 25 + 26 * x
    let dodawany_img: HTMLImageElement = document.createElement("img")
    dodawany_img.src = "./assets/kolor" + dodawany + ".png"
    dodawany_img.id = "rzyczniakchuj"
    dodawany_img.style.left = poziom + "px"
    dodawany_img.style.top = pion + "px"
    dodawany_img.style.position = "absolute"
    if (dodawany == 3) {
        dodawany_img.style.width = klocek.length * rozmiar_pola + "px"
        dodawany_img.style.height = 25 + "px"
    }
    else if (dodawany == 5) {
        dodawany_img.style.width = klocek.length * rozmiar_pola + "px"
        dodawany_img.style.height = klocek.length * rozmiar_pola + "px"
    }
    else {
        dodawany_img.style.width = klocek.length * rozmiar_pola + "px"
        dodawany_img.style.height = (klocek.length - 1) * rozmiar_pola + "px"
    }

    plansza_div.appendChild(dodawany_img)
    console.table(tablica)
}
let interwalek = setInterval(() => {

    spadanie()
    y++

}, 1000)

document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key == "s") {
        spadanie()
        y++
    } else if (e.key == "a") {
        x--
        spadanie()
    } else if (e.key == "d") {
        x++
        spadanie()
    }
})