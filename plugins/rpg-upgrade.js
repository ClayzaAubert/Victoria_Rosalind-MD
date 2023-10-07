let handler = async (m, { conn, command, args, usedPrefix }) => {
    try {
        let user = global.db.data.users[m.sender]
        let wood = user.wood * 1
        let rock = user.rock * 1
        let string = user.string * 1
        let eris = user.eris * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let type = (args[0] || '').toLowerCase()
        let prefix = usedPrefix

        const buttons1 = [
            { buttonId: `${prefix}craft fishingrod`, buttonText: { displayText: `Craft ${rpg.emoticon('fishingrod')}FishingRod` }, type: 1 },
            { buttonId: `${prefix}craft pickaxe`, buttonText: { displayText: `Craft ${rpg.emoticon('pickaxe')}Pickaxe` }, type: 1 },
            { buttonId: `${prefix}craft sword`, buttonText: { displayText: `Craft ${rpg.emoticon('sword')}Sword` }, type: 1 },
        ]
        let lmao1 = `Gunakan Format *${usedPrefix}${command} [type]*
contoh *${usedPrefix}${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
`.trim()
        const buttonMessage1 = {
            text: lmao1,
            footer: wm,
            headerType: 1

        }
        switch (type) {
            case 'fishingrod':
                if (fishingrod == 0) {
                    const buttons = [
                        { buttonId: usedPrefix + `craft fishingrod`, buttonText: { displayText: `Craft ${rpg.emoticon('fishingrod')}FishingRod` }, type: 1 },
                    ]
                    let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${usedPrefix}craft fishingrod*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (fishingrod > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`, wm, 'inventory', usedPrefix + 'inv', m)
                let _wood = fishingrod * 25
                let _string = fishingrod * 15
                let _eris = fishingrod * 10000
                if (wood < _wood || string < _string || eris < _eris) return conn.sendButton(m.chat, `Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.eris < _eris ? `\n${rpg.emoticon('eris')}Uang Kamu Kurang *${_eris - eris}*` : ''}`, wm, 'inventory', usedPrefix + 'inv', m)
                user.fishingrod += 1
                user.wood -= _wood * 1
                user.string -= _string * 1
                user.eris -= _eris * 1
                user.fishingroddurability = 0
                user.fishingroddurability += fishingrod * 50
                conn.send2Button(m.chat, `Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`, wm, 'menu', usedPrefix + 'menu', 'inventory', usedPrefix + 'inv', m)
                break
            case 'pickaxe':
                if (pickaxe == 0) {
                    const buttons = [
                        { buttonId: usedPrefix + `craft pickaxe`, buttonText: { displayText: `Craft ${rpg.emoticon('pickaxe')}Pickaxe` }, type: 1 },
                    ]
                    let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${usedPrefix}craft Pickaxe*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,

                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (pickaxe > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`, wm, 'inventory', usedPrefix + 'inv', m)
                let __rock = pickaxe * 25
                let __wood = pickaxe * 15
                let __eris = pickaxe * 15000
                if (rock < __rock || wood < __wood || eris < __eris) return conn.sendButton(m.chat, `
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${eris < __eris ? `\n${rpg.emoticon('eris')}Uang kamu kurang *${__eris - eris}*` : ''}`, wm, 'cek inventory', usedPrefix + 'inv', m)
                user.pickaxe += 1
                user.wood -= __wood * 1
                user.rock -= __rock * 1
                user.eris -= __eris * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                conn.sendButton(m.chat, `Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`, wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'sword':
                if (sword == 0) {
                    const buttons = [
                        { buttonId: usedPrefix + `craft sword`, buttonText: { displayText: `Craft ${rpg.emoticon('sword')}sword` }, type: 1 },
                    ]
                    let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${usedPrefix}craft sword*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,

                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (sword > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`, wm, 'inventory', usedPrefix + 'inv', m)
                let _iron = sword * 25
                let ___wood = sword * 15
                let ___eris = sword * 10000
                if (iron < _iron || wood < ___wood || eris < ___eris) return conn.sendButton(m.chat, `
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${eris < ___eris ? `\n${rpg.emoticon('eris')}Uang kamu kurang *${___eris - eris}*` : ''}`, wm, 'inventory', usedPrefix + 'inv', m)
                user.sword += 1
                user.iron -= _iron * 1
                user.wood -= ___wood * 1
                user.eris -= ___eris * 1
                user.sworddurability = 0
                user.sworddurability += sword * 50
                conn.sendButton(m.chat, `Succes mengupgrade *${rpg.emoticon('sword')}Sword*`, wm, 'inventory', usedPrefix + 'inv', m)
                break
            default:
                return conn.sendMessage(m.chat, buttonMessage1, { quoted: m })
        }
    } catch (e) {
        console.log(e)
        throw eror
    }
}
handler.help = ['upgrade']
handler.tags = ['rpg']
handler.command = /^(up(grade)?)$/i
handler.register = true

handler.fail = null

export default handler
