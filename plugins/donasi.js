let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let pay = 'https://telegra.ph/file/cf107c0832a1de96efd57.jpg'
let sewa = `
╭──「 *SEWA* 」
┊• *1 Minggu:* 20K
┊• *1 Bulan:* 50K
┊• *2 Bulan:* 100K
┊
┠──「 *PREMIUM* 」
┊• *1 Minggu:* 15K
┊• *1 Bulan:* 50K
╰────────────๑
┌─「 *Donasi & Payment* 」
│ • *Ovo:* [${global.povo}]
│ • *Dana:* [${global.pdana}]
❏──────────────๑
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: sewa, m})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi$/i

export default handler
