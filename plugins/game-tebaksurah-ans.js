import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hsur/i.test(m.quoted.text) || /.*hsur/i.test(m.text))
        return !0
    this.tebaksurah = this.tebaksurah ? this.tebaksurah : {}
    if (!(id in this.tebaksurah))
        return m.reply('Soal Itu Telah Berakhir')
    if (m.quoted.id == this.tebaksurah[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaksurah[id][3])
            delete this.tebaksurah[id]
            return m.reply('*Yah Menyerah :( !*')
        }
        let json = JSON.parse(JSON.stringify(this.tebaksurah[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.surah.englishName.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaksurah[id][2]
            m.reply(`*Benar!*\n+${this.tebaksurah[id][2]} XP`)
            clearTimeout(this.tebaksurah[id][3])
            delete this.tebaksurah[id]
        } else if (similarity(m.text.toLowerCase(), json.surah.englishName.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            m.reply('Salah')
    }
    return !0
}
export const exp = 0

const buttontebaksurah = [
    ['Main Lagi', '/tebaksurah']
]