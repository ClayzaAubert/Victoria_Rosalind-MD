import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let name = await conn.getName(who);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'Kirim/Reply Gambar Dengan Caption .jadianime'

  m.reply('Tunggu Sebentar...');
  let media = await q.download();
  let url = await uploadImage(media);

  let response = await fetch(`https://api.clayzaaubert.my.id/api/others/toanime?url=${url}&apikey=${global.clayza}`);
  let hasil = await response.buffer();

  await conn.sendFile(m.chat, hasil, 'anime.jpg', 'Nih Kak, Maaf Kalau Hasilnya Tidak Sesuai Keinginan', m);
};

handler.help = ['jadianime'];
handler.tags = ['ai'];
handler.command = /^(jadianime)$/i;
handler.limit = true
handler.premium = true

export default handler;
