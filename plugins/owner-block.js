let handler = async (m, { text, conn, usedPrefix, command }) => {
	let why = `*Contoh:*\n${usedPrefix + command} @${m.sender.split("@")[0]}`
	let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
	if (!who) conn.reply(m.chat, why, m, { mentions: [m.sender] })
	let res = [];
	console.log(command)
	switch (command) {
		case "blok":
		case "block":
			if (who) await conn.updateBlockStatus(who, "block").then(() => {
				res.push(who);
			})
			else conn.reply(m.chat, why, m, { mentions: [m.sender] })
		break
        case "unblok":
        case "unblock":
        	if (who) await conn.updateBlockStatus(who, "unblock").then(() => {
				res.push(who);
			})
			else conn.reply(m.chat, why, m, { mentions: [m.sender] })
        break
	}
	if (res[0]) conn.reply(m.chat, `\n   Sukses ${command} ${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}`, m, { mentions: res })
}
handler.help = ["block", "unblock"]
handler.tags = ["owner"]
handler.command = /^(block|unblock)$/i
handler.owner = true

export default handler



/*

Jangan dihapus

Buatan FokusDotId (Fokus ID)
https://github.com/fokusdotid

*/