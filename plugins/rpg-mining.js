const cooldown = 10800000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastmining))
    if (user.health < 80) return m.reply(`
Kesehatanmu Kurang Dari 80%, Gunakan Perintah *${usedPrefix}buy potion <quantity>*,
Dan Perintah *${usedPrefix}heal <quantity>* Untuk Membeli Dan Menggunakan Potion
`.trim())
    if (user.pickaxe == 0) return m.reply('Mau Nambang Nggak Punya Pickaxe, Bikin Dulu Dengan Cara Ketik .craft pickaxe')
    if (new Date - user.lastmining <= cooldown) return m.reply(`
Kamu Sudah Menambang, Tunggu *🕐${timers.toTimeString()}* Lagi
`.trim())
    const rewards = reward(user)
    let text = 'Kamu Menambang Dan Sekarang Kelelahan'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\nTapi Kamu Mendapatkan'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastmining= new Date * 1
}
handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^(mining)$/i

handler.cooldown = cooldown
handler.register = true
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 1000,
            trash: 101,
            string: 25,
            rock: 30,
            coal: 10,
            iron: 25,
            diamond: 2,
            emerald: 1,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 40 - user.cat * 4,
            pickaxedurability: 10
        }
    }
    return rewards
}