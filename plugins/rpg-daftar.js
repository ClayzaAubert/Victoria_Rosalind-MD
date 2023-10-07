import { createHash } from 'crypto';
import fetch from 'node-fetch';
import { stories } from '../lib/story.js'

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;

let handler = async function (m, { text, usedPrefix, command }) {
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  let namae = await conn.getName(m.sender); // Menggunakan await karena conn.getName() adalah asinkron
  let user = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(m.sender, "image").catch((_) => "./src/avatar_contact.png");

  if (user.registered === true) throw `Kamu Sudah Terdaftar Di Database, Apa Kamu Ingin Mendaftar Ulang? Gunakan *${usedPrefix}unreg*`;
  if (!Reg.test(text)) throw `Gunakan perintah .daftar (nama). (umur) | Example: *${usedPrefix}daftar namakamu. 30* `;

  let [_, name, splitter, age] = text.match(Reg);

  if (!name) throw 'Nama Tidak Boleh Kosong';
  if (!age) throw 'Umur Tidak Boleh Kosong';

  age = parseInt(age);

  if (age > 40) throw 'WOI TUA (。-`ω´-)';
  if (age < 5) throw 'Halah dasar bocil';

  user.name = name.trim();
  user.age = age;
  user.regTime = +new Date();
  user.registered = true;

  let sn = createHash('md5').update(m.sender).digest('hex');
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;

  let cap = `
╭━━「 *Informasi* 」
│• *Nama:* ${namae}
│• *Umur:* ${age} Tahun
│• *Status:* Sukses
│• *Serial Nomor:* 
│• ${sn}
╰––––––––––––––––––––––

_*Destiny's Radiance: The mystery of eternity*_
${readMore}
${stories.pengenalantokoh}
`;
let pesan = `Sekarang Kamu sudah terdaftar di Database.`
let pesan2 = `Silakan Menikmati Pembukaan Cerita RPG.`
await conn.sendMessage(m.chat, {
	text: cap,
	contextInfo: {
	externalAdReply: {
	title: pesan,
	body: pesan2,
	thumbnailUrl: pp,
	mediaType: 1,
	renderLargerThumbnail: true
	}}})

};

handler.help = ['daftar', 'register'];
handler.tags = ['main'];
handler.command = /^(daftar|verify|reg(ister)?)$/i;

export default handler;
