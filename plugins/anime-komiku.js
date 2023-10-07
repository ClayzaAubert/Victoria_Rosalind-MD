import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Judulnya?`;
  let res = await fetch(`https://api.clayzaaubert.my.id/api/anime/komiku-search?q=${encodeURIComponent(text)}&apikey=${global.clayza}`);
  let json = await res.json();
  let data = json.data;
  if (!data || data.length === 0) throw 'Tidak ditemukan hasil untuk judul tersebut.';
  
  let result = data.map((v) => `*Title:* ${v.title}\n*Title_ID:* ${v.title_id}\n*Awal:* ${v.awal}\n*Terbaru:* ${v.terbaru}\n*Link:* ${v.url}\nDeskripsi: ${v.description}`).join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n');
  conn.sendFile(m.chat, data[0].thumbnail, '', result, m);
};
handler.help = ['komikusearch'];
handler.tags = ['anime'];
handler.command = /^(komikusearch)$/i;
handler.limit = true;

export default handler;
