const xpperlimit = 100000
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^exptoeris/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].eris += count
    conn.reply(m.chat, `Sukses Menukarkan Exp Sebesar ${count} Exp`, m)
  } else conn.reply(m.chat, `Exp Kamu Tidak Mencukupi Untuk Ditukar Sebesar ${count}`, m)
}
handler.help = ['exptoeris <jumlah> (100k exp)']
handler.tags = ['rpg']
handler.command = /^exptoeris([0-9]+)|exptoeris|exptoerisall$/i
handler.register = true

export default handler
