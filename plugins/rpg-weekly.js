const eris = 50000
const mythic = 2
const common = 10

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastweekly + 604800000
  if (new Date - global.db.data.users[m.sender].lastweekly < 604800000) throw `Kamu Sudah Mengambilnya Minggu Ini\nTunggu Selama ${msToTime(time - new Date())} Lagi`
        global.db.data.users[m.sender].eris += isPrems ? eris : eris
        global.db.data.users[m.sender].mythic += isPrems ? mythic : mythic
        global.db.data.users[m.sender].common += isPrems ? common : common
        conn.reply(m.chat, `Ini Hadiah Mingguan Kamu:\n\n+${isPrems ? eris : eris} Eris\n+${isPrems ? mythic : mythic} Mythic Box\n+${isPrems ? common : common} Common Box`, m)
        global.db.data.users[m.sender].lastweekly = new Date * 1
    }
handler.help = ['mingguan']
handler.tags = ['rpg']
handler.command = /^(mingguan)$/i

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