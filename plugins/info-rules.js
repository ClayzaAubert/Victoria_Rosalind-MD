import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `Peraturan Penggunaan Bot :
- Dilarang Spam
- Dilarang Menelpon Bot
- Dilarang Mengirim Virus Ke Bot

Catatan :
Semua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa
Ada Campur Tangan Owner, 
Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn 
Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau
Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/59c62e1b03815e2b74fe2.jpg' }, caption: rules }, m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules|rule)$/i;

export default handler;
