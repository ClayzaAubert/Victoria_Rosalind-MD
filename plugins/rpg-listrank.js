import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `List Rank RPG :
❏〡 Novice
❏〡 initiate
❏〡 Acolyte
❏〡 Sentinel
❏〡 Vanguard
❏〡 Elite
❏〡 Champion
❏〡 Ascendant
❏〡 Vanquisher
❏〡 Grandmaster
❏〡 Archon
❏〡 Warlord
❏〡 Paragon
❏〡 Mythic
❏〡 Templar
❏〡 Demigod
❏〡 Celestial
❏〡 Immortal
❏〡 Divine
❏〡 Sovereign
❏〡 Primodial
❏〡 Cosmic
❏〡 Eternity
❏〡 Ascendancy
❏〡 Worldbreaker
❏〡 Apocalype
❏〡 Omniscient  
❏〡 Transcendent
❏〡 Astralancer
❏〡 Voidwalker  
❏〡 Dawnbreaker
❏〡 Luminary
❏〡 Immaterialis
`;
let pesan1 = `Inilah tingkatan Rank di RPG Games`
conn.sendMessage(m.chat, {
	text: tqto,
	contextInfo: {
	externalAdReply: {
	title: global.namebot,
	body: pesan1,
	thumbnailUrl: global.thumb,
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
  
}
handler.help = ['listrank']
handler.tags = ['main']
handler.command = /^(listrank)$/i;

export default handler;

