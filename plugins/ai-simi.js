import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://api.clayzaaubert.my.id/api/ai/simi?kata=${text}&apikey=${global.clayza}`)
  let res = await api.json()
  m.reply(res.message)
}
handler.command = ['simi']
handler.tags = ['ai']
handler.help = ['simi']
handler.limit = true;

export default handler
