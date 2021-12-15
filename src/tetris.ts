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

let punkty = 0
let linie = 0

let score: HTMLDivElement = document.createElement("div")
score.id = "wynik"
score.style.position = "absolute"
score.style.width = 140 + 'px'
score.style.height = 30 + 'px'
score.style.left = 180 + "px"
score.style.top = 32 + "px"
score.style.textAlign = "right"
score.style.fontSize = "30px"
score.style.color = "white"
score.innerHTML = "0"
plansza_div.appendChild(score)

let lines: HTMLDivElement = document.createElement("div")
lines.id = "linie"
lines.style.position = "absolute"
lines.style.width = 140 + 'px'
lines.style.height = 30 + 'px'
lines.style.left = 180 + "px"
lines.style.top = 88 + "px"
lines.style.textAlign = "right"
lines.style.fontSize = "30px"
lines.style.color = "white"
lines.innerHTML = "0"
plansza_div.appendChild(lines)

let level: HTMLDivElement = document.createElement("div")
level.id = "level"
level.style.position = "absolute"
level.style.width = 140 + 'px'
level.style.height = 30 + 'px'
level.style.left = 180 + "px"
level.style.top = 144 + "px"
level.style.textAlign = "right"
level.style.fontSize = "30px"
level.style.color = "white"
level.innerHTML = "0"
plansza_div.appendChild(level)

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

wszystko_z_klockiem()

function wszystko_z_klockiem() {
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
    let transform = 'rotate(0deg)'

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
            if (document.getElementById("klocuch nowy")) {
                plansza_div.removeChild(document.getElementById("klocuch nowy"))
            }

            let pion: number = 178 + 26 * y
            let poziom: number = 15 + 26 * x
            let dodawany_img: HTMLImageElement = document.createElement("img") as HTMLImageElement
            dodawany_img.src = "./assets/kolor" + dodawany + ".png"
            dodawany_img.id = "klocuch nowy"
            dodawany_img.style.left = poziom + "px"
            dodawany_img.style.top = pion + "px"
            dodawany_img.style.position = "absolute"
            dodawany_img.style.transform = transform
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
        } else if (gdzie == "lewo") {
            x++
        } else if (gdzie == "prawo") {
            x--
        } else if (gdzie == "dol") {
            clearInterval(interwalek)

            spadlo()

        }
        console.clear()
        console.table(tablica)

    }

    let interwalek = setInterval(() => {
        spadanie("dol")
        y++

    }, 1000)

    function sprawdzanie_dol() {
        let sprawdzenie_czy_dobrze: number = 0
        for (let i = 0; i < klocek.length; i++) {
            for (let j = 0; j < klocek[i].length; j++) {
                if (klocek[i][j] == 1) {
                    // tablica[y + i][x + j] = klocek[i][j]
                    if (tablica[y + i][x + j] == 2) {
                        // console.log('dzieje sie')
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
                    if (tablica[y + i][x - 1 + j] == 2) {
                        // console.log('dzieje sie')

                        sprawdzenie_czy_dobrze++

                    }
                    else if (tablica[y + i][x - 1 + j] == 'x') {

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
                        // console.log('dzieje sie')

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

    document.addEventListener("keydown", klawitura, false)

    function klawitura(e: KeyboardEvent) {
        if (e.key == "s") {
            if (!zmienna) {
                spadanie("dol")
                y++
                // console.log(y)
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
                // console.log()

            }
        } else if (e.key == "ArrowLeft") {
            let oldSymbol = klocek
            if (klocek.length == 4) {
                if (klocek[1][0] == 0) {
                    klocek = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]]
                    transform = 'rotate(0eg)'
                } else {
                    klocek = [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
                    transform = 'rotate(90eg)'

                }
                let img = document.getElementById("klocuch nowy")
                console.log(transform)
                img.style.transform = transform


            } else if (dodawany == 1 || dodawany == 2 || dodawany == 6) {
                klocek = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
                if (oldSymbol[0][0] == 1)
                    klocek[0][2] = 1
                if (oldSymbol[0][2] == 1)
                    klocek[2][2] = 1
                if (oldSymbol[2][2] == 1)
                    klocek[2][0] = 1
                if (oldSymbol[2][0] == 1)
                    klocek[0][0] = 1

                if (oldSymbol[0][1] == 1)
                    klocek[1][2] = 1
                if (oldSymbol[1][2] == 1)
                    klocek[2][1] = 1
                if (oldSymbol[2][1] == 1)
                    klocek[1][0] = 1
                if (oldSymbol[1][0] == 1)
                    klocek[0][1] = 1
            }
            else if (dodawany == 4) {
                if (klocek[0][1] == 1 && klocek[1][2] == 1) {
                    klocek = [
                        [1, 1, 0],
                        [1, 0, 0],
                        [1, 0, 0],
                    ]
                } else if (klocek[0][1] == 1 && klocek[1][0] == 1) {
                    klocek = [
                        [0, 0, 0],
                        [1, 0, 0],
                        [1, 1, 1],
                    ]
                } else if (klocek[1][0] == 1 && klocek[2][1] == 1) {
                    klocek = [
                        [0, 0, 1],
                        [0, 0, 1],
                        [0, 1, 1],
                    ]
                } else {
                    klocek = [
                        [1, 1, 1],
                        [0, 0, 1],
                        [0, 0, 0],
                    ]
                }
            } else if (dodawany == 7) {
                if (klocek[0][1] == 1 && klocek[1][0] == 1) {
                    klocek = [
                        [1, 0, 0],
                        [1, 0, 0],
                        [1, 1, 0],
                    ]
                } else if (klocek[1][0] == 1 && klocek[2][1] == 1) {
                    klocek = [
                        [0, 0, 0],
                        [0, 0, 1],
                        [1, 1, 1],
                    ]
                } else if (klocek[1][2] == 1 && klocek[2][1] == 1) {
                    klocek = [
                        [0, 1, 1],
                        [0, 0, 1],
                        [0, 0, 1],
                    ]
                } else {
                    klocek = [
                        [1, 1, 1],
                        [1, 0, 0],
                        [0, 0, 0],
                    ]
                }
            }
            let sprawdza_czy_git: boolean = false
            sprawdza_czy_git = sprawdzanie_dol()

            if (!sprawdza_czy_git) {
                klocek = oldSymbol
            } else {
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
            }

        } else if (e.key == "ArrowRight") {
            let oldSymbol = klocek

            if (klocek.length == 4) {
                if (klocek[1][0] == 0) {
                    klocek = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]]
                    transform = 'rotate(0eg)'
                } else {
                    klocek = [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
                    transform = 'rotate(90eg)'

                }
                let img = document.getElementById("klocuch nowy")
                console.log(transform)
                img.style.transform = transform


            } else if (dodawany == 1 || dodawany == 2 || dodawany == 6) {
                klocek = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
                if (oldSymbol[0][0] == 1)
                    klocek[2][0] = 1
                if (oldSymbol[0][2] == 1)
                    klocek[0][0] = 1
                if (oldSymbol[2][2] == 1)
                    klocek[0][2] = 1
                if (oldSymbol[2][0] == 1)
                    klocek[2][2] = 1

                if (oldSymbol[0][1] == 1)
                    klocek[1][0] = 1
                if (oldSymbol[1][2] == 1)
                    klocek[0][1] = 1
                if (oldSymbol[2][1] == 1)
                    klocek[1][2] = 1
                if (oldSymbol[1][0] == 1)
                    klocek[2][1] = 1

            }
            else if (dodawany == 4) {
                if (klocek[0][1] == 1 && klocek[1][2] == 1) {
                    klocek = [
                        [0, 0, 1],
                        [0, 0, 1],
                        [0, 1, 1],
                    ]

                } else if (klocek[0][1] == 1 && klocek[1][0] == 1) {
                    klocek = [
                        [0, 0, 0],
                        [1, 0, 0],
                        [1, 1, 1],
                    ]

                } else if (klocek[1][0] == 1 && klocek[2][1] == 1) {
                    klocek = [
                        [1, 1, 0],
                        [1, 0, 0],
                        [1, 0, 0],
                    ]
                } else {
                    klocek = [
                        [1, 1, 1],
                        [0, 0, 1],
                        [0, 0, 0],
                    ]
                }
            } else if (dodawany == 7) {
                if (klocek[0][1] == 1 && klocek[1][0] == 1) {
                    klocek = [
                        [0, 1, 1],
                        [0, 0, 1],
                        [0, 0, 1],
                    ]
                } else if (klocek[1][0] == 1 && klocek[2][1] == 1) {

                    klocek = [
                        [0, 0, 0],
                        [0, 0, 1],
                        [1, 1, 1],
                    ]
                } else if (klocek[1][2] == 1 && klocek[2][1] == 1) {
                    klocek = [
                        [1, 0, 0],
                        [1, 0, 0],
                        [1, 1, 0],
                    ]
                } else {
                    klocek = [
                        [1, 1, 1],
                        [1, 0, 0],
                        [0, 0, 0],
                    ]
                }
            }
            let sprawdza_czy_git: boolean = false
            sprawdza_czy_git = sprawdzanie_dol()

            if (!sprawdza_czy_git) {
                klocek = oldSymbol
            } else {
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
            }
        }
        console.clear()
        console.table(tablica)
    }
    function spadlo() {
        for (let i = 0; i < klocek.length; i++) {
            for (let j = 0; j < klocek[i].length; j++) {
                if (klocek[i][j] == 1) {
                    tablica[y + i - 1][x + j] = 2
                }
            }


        }
        punkty += y




        console.log("spaslooo")
        document.removeEventListener("keydown", klawitura, false)
        setTimeout(() => {
            // console.log("trzeba losować")
            // let klocuch = document.getElementById('klocuch') as HTMLImageElement
            // klocuch.src = './assets/szary' + dodawany + '.png'
            losowanie_nexta()
            zmiennaOdnawiania = 1

            sprawdzaj_czy_zbito()
            // wszystko_z_klockiem()

        }, 1000)

        let klocuch = document.getElementById("klocuch nowy")
        klocuch.id = "klocuch"
        klocuch.className = "klocuch"
    }

    function sprawdzaj_czy_zbito() {
        let ile_lini = 0
        for (let i = 1; i < 23; i++) {
            if (tablica[i][1] == 2)
                if (tablica[i][2] == 2)
                    if (tablica[i][3] == 2)
                        if (tablica[i][4] == 2)
                            if (tablica[i][5] == 2)
                                if (tablica[i][6] == 2)
                                    if (tablica[i][7] == 2)
                                        if (tablica[i][8] == 2)
                                            if (tablica[i][9] == 2)
                                                if (tablica[i][10] == 2) {
                                                    ile_lini++
                                                    linie++
                                                }
            if (ile_lini > 0) {
                zbito(ile_lini, i)

            }
        }

        wszystko_z_klockiem()
        let wynik_img = document.getElementById("wynik")
        wynik_img.innerHTML = punkty.toString()
    }
    function zbito(ile_lini: number, ktora_linia: number) {
        alert("zbito " + ile_lini)
        for (let i = 1; i < 12; i++) {
            tablica[ktora_linia][i] = 0
        }
        if (ile_lini == 1) {
            punkty += 100
        } else if (ile_lini == 2) {
            punkty += 400
        } else if (ile_lini == 3) {
            punkty += 900
        } else if (ile_lini == 4) {
            punkty += 2500
        }

        let wynik_img = document.getElementById("wynik")
        wynik_img.innerHTML = punkty.toString()

        let linie_img = document.getElementById("linie")
        linie_img.innerHTML = linie.toString()
    }
}