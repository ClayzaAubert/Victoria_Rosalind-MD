const eris = 110000
const exp = 4000
const diamond = 3

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastmonthly + 2592000000
  if (new Date - global.db.data.users[m.sender].lastmonthly < 2592000000) throw `Kamu Sudah Mengambilnya Bulan Ini\nTunggu Selama ${msToTime(time - new Date())} Lagi`
        global.db.data.users[m.sender].eris += isPrems ? eris : eris
        global.db.data.users[m.sender].exp += isPrems ? exp : exp
        global.db.data.users[m.sender].diamond += isPrems ? diamond : diamond
        conn.reply(m.chat, `Ini Hadiah Bulanan Kamu:\n\n+${isPrems ? eris: eris} Eris\n+${isPrems ? exp : exp} EXP\n+${isPrems ? diamond : diamond} Diamond`, m)
        global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
handler.help = ['bulanan']
handler.tags = ['rpg']
handler.command = /^(bulanan)$/i
handler.register = true

handler.fail = null

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

  monthly  = (monthly < 10) ? "0" + monthly : monthly
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return monthly + " Hari " +  hours + " Jam " + minutes + " Menit"
}