console.log('js began')
const random = (min = 0, max = 30) => { return Math.floor(Math.random() * (max - min) + min)}

function abc(){
    console.log('function began')
    const title = document.querySelector('h1')
    const text = document.querySelector('p')
    fetch("./euteamo.json")
        .then(response => {
            return response.json()
        })
        .then(jsondata => {
            // console.log(typeof jsondata)
            // console.log(jsondata.BG.length)

            const Rd_Number = random(0, jsondata.BG.length)
            console.log(Rd_Number)

            title.innerHTML = `Eu te amo #00${jsondata.BG[Rd_Number].id}`
            text.innerHTML = `"${jsondata.BG[Rd_Number].frase}"`
        })

    console.log('function ended')
}



console.log('js ended')