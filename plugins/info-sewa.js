import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/b1e431f99ebd4f91e1953.png'
let info = `
╭━━━━「 *SEWA* 」
┊• *1 Minggu:* 20K
┊• *1 Bulan:* 50K
┊• *2 Bulan:* 100K
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊• *1 Minggu:* 15K
┊• *1 Bulan:* 50K
╰═┅═━––––––๑

*PAYMENT:*
• *Ovo:* [${povo}]
• *Dana:* [${pdana}]
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: info }, m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main', 'info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
