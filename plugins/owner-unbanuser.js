let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa Yg Mau Di Unban??'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].banned = false
    users[who].warning = 0
    conn.reply(m.chat, 'Done!', m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.rowner = true

export default handler
