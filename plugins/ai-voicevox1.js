import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, command , text }) => {
	if (!text) throw `Texnya Mana Kak?`
	let reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja' + '&dt=t&q=' + text)
	let res = await reis.json()
	conn.sendFile(m.chat, `https://api.clayzaaubert.my.id/api/others/voicevox1?q=${res[0][0][0]}&apikey=${global.clayza}`, "victoria.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.help = ['voicevox1', 'victoria']
handler.tags = ['ai']
handler.command = /^(voicevox1|victoria)$/i
handler.limit = true
handler.premium = true
export default handler
