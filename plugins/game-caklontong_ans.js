import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    let benarnya = 'https://telegra.ph/file/ab725c3de31e39bf3a08a.jpg'
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*calo/i.test(m.quoted.text) || /.*(calo|bantuan)/i.test(m.text))
        return !0
    this.caklontong = this.caklontong ? this.caklontong : {}
    if (!(id in this.caklontong))
        return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.caklontong[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.caklontong[id][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.caklontong[id][2]
            await this.sendFile(m.chat, benarnya, 'benar.jpg', `*Benar!* +${this.caklontong[id][2]} XP\n${json.deskripsi}`, m)
            clearTimeout(this.caklontong[id][3])
            delete this.caklontong[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            m.reply(`*Salah!*`)
    }
    return !0
}
export const exp = 0
