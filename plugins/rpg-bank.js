let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *BANK PLAYER* 」
│ *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ *Eris :* ${user.eris} 💲
│ *Bank :* ${user.bank} 💲 / ${user.fullatm} 💲
└────────────────────────────────────────────···
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://i.postimg.cc/9fp2Xd1N/20230612-104657.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = true
export default handler
