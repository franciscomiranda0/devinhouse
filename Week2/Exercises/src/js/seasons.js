let currentDate = new Date()
const seasonMap = new Map()
    .set('OUTONO', 'https://i1.wp.com/img.fciencias.com/uploads/2017/09/outono_wallpaper_fciencias_00003.jpg')
    .set('INVERNO', 'https://media.gqitalia.it/photos/5dee560a5c24a50008373dc0/16:9/w_1920,c_limit/GettyImages-1149789980.jpg')
    .set('PRIMAVERA', 'https://th.bing.com/th/id/OIP.od4UXAebnACC-aTEICXBwgHaEK?pid=Api&rs=1')
    .set('VERAO', 'https://www.notibras.com/site/wp-content/uploads/2019/12/ver%C3%A3o-sol.jpg')

document.body.onload = () => getCurrentSeason()

const getCurrentSeason = () => {
    let currentSeason = ''
    switch (currentDate.getMonth()) {
        case 0:
        case 1:
        case 2:
            currentDate.getDate() > 20 ?
                currentSeason = 'VERAO' :
                currentSeason = 'OUTONO'
            break
        case 3:
        case 4:
        case 5:
            currentDate.getDate() > 20 ?
                currentSeason = 'OUTONO' :
                currentSeason = 'INVERNO'
            break
        case 6:
        case 7:
        case 8:
            currentDate.getDate() > 22 ?
                currentSeason = 'INVERNO' :
                currentSeason = 'PRIMAVERA'
            break
        case 9:
        case 10:
        case 11:
            currentDate.getDate() > 21 ?
                currentSeason = 'PRIMAVERA' :
                currentSeason = 'VERAO'
    }
    setSeasonDisplay(currentSeason)
}

const setSeasonDisplay = (currentSeason) => {
    document.querySelector('h1').innerText = currentSeason
    document.querySelector('img').src = seasonMap.get(currentSeason)
}