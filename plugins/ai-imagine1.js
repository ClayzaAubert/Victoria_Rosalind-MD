import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Promptnya\nExample:\n.diffusion neko girl, cute face, upper body, white hair, look at viewer'
m.reply(wait)
let anu = `https://api.clayzaaubert.my.id/api/ai/stablediffusion?q=${text}&apikey=${global.clayza}`
conn.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)

}
handler.help = ['imagine1']
handler.tags = ['ai']
handler.command = /^(imagine1)$/i

handler.limit = true
handler.premium = true

export default handler