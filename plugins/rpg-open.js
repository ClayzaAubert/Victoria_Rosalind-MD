const rewards = {
    common: {
        eris: 35000,
        exp: 201,
        trash: 11,
        potion: [0, 1, 0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    uncommon: {
        eris: 65000,
        exp: 401,
        trash: 31,
        potion: [0, 1, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0, 0],
        rock: [0, 1, 0, 0, 0, 0],
        string: [0, 1, 0, 0, 0, 0]
    },
    mythic: {
        eris: 95000,
        exp: 551,
        trash: 61,
        potion: [0, 1, 0, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0],
        rock: [0, 1, 0, 0, 0],
        string: [0, 1, 0, 0, 0]
    },
    legendary: {
        eris: 150000,
        exp: 601,
        trash: 101,
        potion: [0, 1, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0],
        rock: [0, 1, 0, 0],
        string: [0, 1, 0, 0]
    },
    superior: {
        eris: 300000,
        exp: 700,
        trash: 150,
        potion: [0, 1, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        superior: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0],
        rock: [0, 1, 0, 0],
        string: [0, 1, 0, 0]
    },
    // pet: {
    //     petFood: [0, 1, 0, 0, 0],
    //     anjing: [],
    // }
}
let handler = async (m, { command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let listCrate = Object.fromEntries(Object.entries(rewards).filter(([v]) => v && v in user))
    let info = `
Pake Format *${usedPrefix}${command} [crate] [count]*
Contoh: *${usedPrefix}${command} common 10*

Crate List: 
${Object.keys(listCrate).map((v) => `
${rpg.emoticon(v)}${v}
`.trim()).join('\n')}
`.trim()
    let type = (args[0] || '').toLowerCase()
    let count = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!(type in listCrate)) return m.reply(info)
    if (user[type] < count) return m.reply(`
Crates* Nggak Ada, Kamu Hanya Punya ${user[type]} *${type} Crate*
Ketik *${usedPrefix}buy ${type} ${count - user[type]}* Untuk Membeli
`.trim())
    // TODO: add pet crate
    // if (type !== 'pet')
    let crateReward = {}
    for (let i = 0; i < count; i++)
        for (let [reward, value] of Object.entries(listCrate[type]))
            if (reward in user) {
                const total = value.getRandom()
                if (total) {
                    user[reward] += total * 1
                    crateReward[reward] = (crateReward[reward] || 0) + (total * 1)
                }
            }
    user[type] -= count * 1
    m.reply(`
Kamu Membuka Sebanyak *${count}* ${type} Crate Dan Mendapatkan
${Object.keys(crateReward).filter(v => v && crateReward[v] && !/legendary|pet|mythic|diamond|emerald/i.test(v)).map(reward => `
*${reward}:* ${crateReward[reward]}
`.trim()).join('\n')}
`.trim())
    let diamond = crateReward.diamond, mythic = crateReward.mythic, pet = crateReward.pet, legendary = crateReward.legendary, emerald = crateReward.emerald
    if (mythic || diamond) m.reply(`
Selamat Kamu Mendapatkan ${diamond ? `*${diamond} Diamond*` : ''}${diamond && mythic ? 'Dan ' : ''}${mythic ? `*${mythic}* Mythic` : ''}
`.trim())
    if (pet || legendary || emerald) m.reply(`
Selamat Kamu Mendapatkan ${pet ? `*${pet}* Pet` : ''}${pet && legendary && emerald ? ', ' : (pet && legendary || legendary && emerald || emerald && pet) ? 'Dan ' : ''}${legendary ? `*${legendary}* Legendary` : ''}${pet && legendary && emerald ? 'Dan ' : ''}${emerald ? `*${emerald}* Emerald` : ''}
`.trim())
}
handler.help = ['open', 'gacha']
handler.tags = ['rpg']
handler.command = /^(open|buka|gacha)$/i
handler.register = true

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}