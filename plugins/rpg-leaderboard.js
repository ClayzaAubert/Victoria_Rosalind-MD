let handler = async (m, { conn, args, participants }) => {
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
      return {...value, jid: key}
    })
    let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
    let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let sortedEris = users.map(toNumber('eris')).sort(sort('eris'))
    let usersExp = sortedExp.map(enumGetKey)
    let usersLim = sortedLim.map(enumGetKey)
    let usersLevel = sortedLevel.map(enumGetKey)
    let usersEris = sortedEris.map(enumGetKey)
    console.log(participants)
    let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
    let text = `
  • *Limit Leaderboard Top ${len}* •
㊭ Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*
  
${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Limit*`).join`\n`}
  
  • *Level Leaderboard Top ${len}* •
㊭ Kamu: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*
  
${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}
  
  • *Eris Leaderboard Top ${len}* •
㊭ Kamu: *${usersEris.indexOf(m.sender) + 1}* dari *${usersEris.length}*
  
${sortedEris.slice(0, len).map(({ jid, eris }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Eris ${eris}*`).join`\n`}

  
  `.trim()
  let lbnya = 'https://files.cults3d.com/uploaders/21646250/illustration-file/4fcb5125-8c8b-40b1-ae64-62feea6cb2a2/ousamaall.png'
    conn.sendFile(m.chat, lbnya, '', text, m, {
      contextInfo: {
        mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersEris.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
      }
    })
  }
  handler.help = ['leaderboard']
  handler.tags = ['rpg']
  handler.command = /^(leaderboard|lb)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.register = true
  handler.group = true
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  handler.exp = 0
  
  export default handler
  
  function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
  }
  
  function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
    }
    else return a => a === undefined ? _default : a
  }
  
  function enumGetKey(a) {
    return a.jid
  }