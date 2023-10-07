// Note Buat Kalian Yang Mau Hapus Namaku Silahkan
// Tapi Tolong Jangan Hapus Nama Nama Yang Di Atas Namaku
// Terima Kasih Telah Menggunakan Script Victoria


import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Tutorial Menu bot :
	
Silakan gunakan perintah yang kalian ingin sesuai dengan menu yang sudah tertera, contoh .tqto (titik itu adalah prefix, jika tidak ada prefix maka perintah tidak akan berjalan)

Limit kalian habis? kalian bisa membelinya di rpgmenu (.shop), dan tingal ikutin aja.. Limit di beli dengan Eris...
`;
	await conn.sendMessage(m.chat, { image: { url: global.thumb }, caption: tqto }, m)
}
handler.help = ['tutorial']
handler.tags = ['main']
handler.command = /^(tutorial|tutor)$/i;

export default handler;
