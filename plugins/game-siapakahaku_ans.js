import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    let benarnya = 'https://telegra.ph/file/ab725c3de31e39bf3a08a.jpg'
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(who|hint)/i.test(m.quoted.text) || /.*(who|hint)/i.test(m.text)) return !0
    this.siapakahaku = this.siapakahaku ? this.siapakahaku : {}
    if (!(id in this.siapakahaku)) return conn.sendreply(m.chat, 'Soal itu telah berakhir', m)
    if (m.quoted.id == this.siapakahaku[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.siapakahaku[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].
                exp += this.siapakahaku[id][2]
            conn.sendFile(m.chat, benarnya, 'benar.jpg', `*Benar!*\n+${this.siapakahaku[id][2]} XP`, m)
            clearTimeout(this.siapakahaku[id][3])
            delete this.siapakahaku[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

export default handler
