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
let zmiennaOdnawiania: number = 0
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
let left_paska: number = 505



for (let i = 0; i < 7; i++) {
    let pasek: HTMLDivElement = document.createElement("div")
    pasek.style.width = "20px"
    pasek.style.height = "10px"
    pasek.style.top = "705px"
    pasek.style.left = left_paska + "px"
    pasek.style.position = "absolute"
    pasek.style.backgroundColor = "yellow"
    pasek.id = i + "_p"
    left_paska = left_paska + 25
    // pasek.style.margin = "5px"
    pasek.style.left = left_paska + "px"
    plansza_div.appendChild(pasek)
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

let zmienna: boolean = false
let prawo: boolean = false
let lewo: boolean = false
function spadanie(gdzie: string) {
    let sprawdza_czy_git: boolean = false
    if (gdzie == "dol") {
        sprawdza_czy_git = sprawdzanie_dol()
    }
    else if (gdzie == "lewo") {
        sprawdza_czy_git = sprawdzanie_lewo()
    }
    else if (gdzie == "prawo") {
        sprawdza_czy_git = sprawdzanie_prawo()
    }

    if (sprawdza_czy_git) {
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
        if (document.getElementById("klocuch")) {
            plansza_div.removeChild(document.getElementById("klocuch"))
        }

        let pion: number = 178 + 26 * y
        let poziom: number = 15 + 26 * x
        let dodawany_img: HTMLImageElement = document.createElement("img") as HTMLImageElement
        dodawany_img.src = "./assets/kolor" + dodawany + ".png"
        dodawany_img.id = "klocuch"
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
        // console.clear()
        console.table(tablica)
    }
    else {
        clearInterval(interwalek)
    }

}


let interwalek = setInterval(() => {
    for (let i = 0; i < klocek.length; i++) {             //przyszłe położenie klocka
        for (let j = 0; j < klocek[i].length; j++) {
            if (klocek[i][j] == 1) {
                // tablica[y + i][x + j] = klocek[i][j]
                if (tablica[y + i + 1][x + j] == 2 || tablica[y + i + 1][x + j] == 'x') {
                    zmienna = true
                    clearInterval(interwalek)
                }
            }
        }
    }

    for (let i = 0; i < klocek.length; i++) {
        for (let j = 0; j < klocek[i].length; j++) {
            if (klocek[i][j] == 1) {
                // tablica[y + i][x + j] = klocek[i][j]
                if (tablica[y + i][x + j + 1] == 2 || tablica[y + i][x + j + 1] == 'x') {
                    prawo = true
                }
                else if (tablica[y + i][x + j - 1] == 2 || tablica[y + i][x + j - 1] == 'x') {
                    lewo = true
                }
                else {
                    lewo = false
                    prawo = false
                }
            }
        }
    }
    spadanie("dol")
    if (zmienna == false) {
        spadanie("dol")

    }
    else {
        setTimeout(() => {
            console.log("trzeba losować")
            let klocuch = document.getElementById('klocuch') as HTMLImageElement
            klocuch.src = './assets/szary' + dodawany + '.png'
            losowanie_nexta()
            zmiennaOdnawiania = 1
        }, 1000)
    }
    y++

}, 1000)

function sprawdzanie_dol() {
    let sprawdzenie_czy_dobrze: number = 0
    for (let i = 0; i < klocek.length; i++) {
        for (let j = 0; j < klocek[i].length; j++) {
            if (klocek[i][j] == 1) {
                // tablica[y + i][x + j] = klocek[i][j]
                if (tablica[y + i][x + j] == 2) {
                    console.log('dzieje sie')
                    zmienna = true
                    sprawdzenie_czy_dobrze++

                }
                else if (tablica[y + i][x + j] == 'x') {
                    zmienna = true
                    sprawdzenie_czy_dobrze++

                }
            }
        }
    }

    return (sprawdzenie_czy_dobrze == 0)
}
function sprawdzanie_lewo() {
    let sprawdzenie_czy_dobrze: number = 0
    for (let i = 0; i < klocek.length; i++) {
        for (let j = 0; j < klocek[i].length; j++) {
            if (klocek[i][j] == 1) {
                // tablica[y + i][x + j] = klocek[i][j]
                if (tablica[y + i][x + j] == 2) {
                    console.log('dzieje sie')

                    sprawdzenie_czy_dobrze++

                }
                else if (tablica[y + i][x + j] == 'x') {

                    sprawdzenie_czy_dobrze++

                }
            }
        }
    }

    return (sprawdzenie_czy_dobrze == 0)
}
function sprawdzanie_prawo() {
    let sprawdzenie_czy_dobrze: number = 0
    for (let i = 0; i < klocek.length; i++) {
        for (let j = 0; j < klocek[i].length; j++) {
            if (klocek[i][j] == 1) {
                // tablica[y + i][x + j] = klocek[i][j]
                if (tablica[y + i][x + 1 + j] == 2) {
                    console.log('dzieje sie')

                    sprawdzenie_czy_dobrze++

                }
                else if (tablica[y + i][x + 1 + j] == 'x') {

                    sprawdzenie_czy_dobrze++

                }
            }
        }
    }

    return (sprawdzenie_czy_dobrze == 0)
}

document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key == "s") {
        if (!zmienna) {
            spadanie("dol")
            y++
            console.log(y)
        }
    } else if (e.key == "a") {
        if (!lewo) {
            spadanie("lewo")
            x--
        }


    } else if (e.key == "d") {
        if (!prawo) {
            spadanie("prawo")
            x++
            console.log()

        }

    }
})


