import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.clayzaaubert.my.id/api/ai/v1/chatgpt?q=${text}&apikey=${global.clayza}`)
    let clayza = await res.json()
   m.reply(clayza.data)
}
handler.help = ['gpt']
handler.tags = ['ai']
handler.command = /^(gpt)$/i
handler.limit = true
handler.premium = true

export default handler