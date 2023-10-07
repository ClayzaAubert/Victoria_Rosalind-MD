import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  try {
  let res = await fetch(`https://api.clayzaaubert.my.id/api/anime/otakudesu-latest?apikey=${global.clayza}`)
  let json = await res.json()
  res = json.data.map((v) => `*Title:* ${v.title}\n*Hari:* ${v.day}\n*Tanggal:* ${v.date}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
  } catch (error) {
    // Jika terjadi kesalahan lainnya
    conn.reply(m.chat, 'Limit Harian Sudah tercapai', m);
    console.log(error);
  }
}

handler.help = ['otakudesulatest']
handler.tags = ['anime']
handler.command = /^(otakudesulatest)$/i
handler.limit = true
export default handler
