import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/Bot.opus')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m)
}
handler.customPrefix = /^(hallo|halo|woy|hello|alo|allo)$/i
handler.command = new RegExp

export default handler