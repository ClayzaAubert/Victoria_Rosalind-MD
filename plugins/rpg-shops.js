const Blimit = 50000
const potion = 5000
const Spotion = 3000
const Bdiamond = 500000
const Sdiamond = 250000
const Bcommon = 50000
const Scommon = 1500
const Buncommon = 90000
const Suncommon = 19000
const Bmythic = 500000
const Smythic = 100000
const Blegendary = 1000000
const Slegendary = 200000
const Btrash = 5
const Strash = 5
const Bwood = 150000
const Swood = 40000
const Biron = 250000
const Siron = 25000
const Bstring = 300000
const Sstring = 30000
const Bsword = 1000000
const Ssword = 500000
const Bumpan = 70000
const Bpancingan = 150000
const Spancingan = 30000
const Brock = 60000
const Srock = 10000
let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender
    const Kchat = `============================
example: .shop (buy/sell) trash 10  
    
*List Harga Beli Barang*

============================
_*Top Sales*_
㊮ Limit: ${Blimit} Eris.

============================
㊮ Diamond: ${Bdiamond} Eris.
㊮ Potion: ${potion} Eris.
㊮ trash: ${Btrash} Eris.
㊮ Armor: ${armor} Eris.
㊮ String: ${Bstring} Eris.
㊮ Iron: ${Biron} Eris.
㊮ Sword: ${Bsword} Eris.
㊮ rock: ${Brock} Eris.
㊮ wood: ${Bwood} Eris.
㊮ Pancingan: ${Bpancingan} Eris.
㊮ Umpan: ${Bumpan} Eris.
㊮ Mythic: ${Bmythic} Eris.
㊮ Common: ${Bcommon} Eris.
㊮ Uncommon: ${Buncommon} Eris.
㊮ Legendary: ${Blegendary} Eris.
============================
${readMore}
 *List Harga Jual Barang*

============================
㊮ Potion: ${Spotion} Eris.
㊮ Diamond: ${Sdiamond} Eris.
㊮ trash: ${Strash} Eris.
㊮ String: ${Sstring} Eris.
㊮ Iron: ${Siron} Eris.
㊮ Sword: ${Ssword} Eris.
㊮ rock: ${Srock} Eris.
㊮ wood: ${Swood} Eris.
㊮ Common: ${Scommon} Eris.
㊮ Uncommon: ${Suncommon} Eris.
㊮ Mythic: ${Smythic} Eris.
㊮ Legendary: ${Slegendary} Eris.
============================
*NOTE:* _Harga Shop dapat berubah2 sewaktu2 mengikuti keadaan_

`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const trash = global.db.data.users[m.sender].trash
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'limit':
                            if (global.db.data.users[m.sender].eris >= Blimit * count) {
                                global.db.data.users[m.sender].eris -= Blimit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.reply(m.chat, `Sukses Membeli ${count} limit Dengan Harga ${Blimit * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`,)
                        break
                    case 'potion':
                            if (global.db.data.users[m.sender].eris >= potion * count) {
                                global.db.data.users[m.sender].eris -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Sukses Membeli ${count} Potion Dengan Harga ${potion * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`,)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].eris >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].eris -= Bdiamond * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`, m)
                        
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].eris >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].eris -= Bcommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Common Dengan Harga ${Bcommon * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`, m)
                          
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].eris >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].eris -= Buncommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Dengan Harga ${Buncommon * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].eris >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].eris -= Bmythic * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Mythic Dengan Harga ${Bmythic * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].eris >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].eris -= Blegendary * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Legendary Dengan Harga ${Blegendary * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`, m)
                        
                        break
                    case 'trash':
                            if (global.db.data.users[m.sender].eris >= Btrash * count) {
                                global.db.data.users[m.sender].trash += count * 1
                                global.db.data.users[m.sender].eris -= Btrash * count
                                conn.reply(m.chat, `Sukses Membeli ${count} trash Dengan Harga ${Btrash * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                        break
                    case 'wood':
                            if (global.db.data.users[m.sender].eris >= Bwood * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].eris -= Bwood * count
                                conn.reply(m.chat, `Sukses Membeli ${count} wood Dengan Harga ${Bwood * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].eris >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].eris -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} eris`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].eris >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].eris -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} eris`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].eris >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].eris -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga ${Bsword * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} sword dengan harga ${Bsword * count} eris`.trim(), m)
                        
                        break 
                  case 'rock':
                            if (global.db.data.users[m.sender].eris >= Brock * count) {
                                global.db.data.users[m.sender].rock += count * 1
                                global.db.data.users[m.sender].eris -= Brock * count
                                conn.reply(m.chat, `Succes membeli ${count} rock dengan harga ${Brock * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} rock dengan harga ${Brock * count} eris`.trim(), m)
                        
                        break 
                    case 'umpan':
                            if (global.db.data.users[m.sender].eris >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].eris -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} eris`.trim(), m)
                        
                        break 
                    case 'pancingan':
                            if (global.db.data.users[m.sender].eris >= Bpancingan * count) {
                                global.db.data.users[m.sender].pancingan += count * 1
                                global.db.data.users[m.sender].eris -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga ${Bpancingan * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pancingan dengan harga ${Bpancingan * count} eris`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].eris > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].eris -= armor * 1
                                conn.reply(m.chat, `Succes membeli armor seharga ${armor} eris` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} eris`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].eris += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} eris`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].eris += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} eris`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].eris += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} eris`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].eris += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} eris`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].eris += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} eris`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'trash':
                        if (global.db.data.users[m.sender].trash >= count * 1) {
                            global.db.data.users[m.sender].trash -= count * 1
                            global.db.data.users[m.sender].eris += Strash * count
                            conn.reply(m.chat, `Succes menjual ${count} trash, dan anda mendapatkan ${Strash * count} eris`, m)
                        } else conn.reply(m.chat, `trash anda tidak cukup`, m)
                        break
                    case 'wood':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].wood -= count * 1
                            global.db.data.users[m.sender].eris += Swood * count
                            conn.reply(m.chat, `Succes menjual ${count} wood, dan anda mendapatkan ${Swood * count} eris`, m)
                        } else conn.reply(m.chat, `wood anda tidak cukup`, m)
                        break  
                    case 'pancingan':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].eris += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Spancingan * count} eris`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].eris += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Siron * count} eris`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].eris += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} eris`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].eris += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} sword, dan anda mendapatkan ${Ssword * count} eris`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'rock':
                        if (global.db.data.users[m.sender].rock >= count * 1) {
                            global.db.data.users[m.sender].rock -= count * 1
                            global.db.data.users[m.sender].eris += Srock * count
                            conn.reply(m.chat, `Succes menjual ${count} rock, dan anda mendapatkan ${Srock * count} eris`, m)
                        } else conn.reply(m.chat, `rock anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].eris += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} eris`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'limit':
                            if (global.db.data.users[m.sender].eris >= Blimit * count) {
                                global.db.data.users[m.sender].eris -= Blimit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.reply(m.chat, `Sukses Membeli ${count} limit Dengan Harga ${Blimit * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`,m)
                        break
                case 'potion':
                        if (global.db.data.users[m.sender].eris >= potion * count) {
                            global.db.data.users[m.sender].eris -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} eris\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} eris`,m)
                    
                    break
                case 'diamond':
                        if (global.db.data.users[m.sender].eris >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].eris -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} eris`, m)
                        } else conn.reply(m.chat, `eris anda tidak cukup`, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].eris >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].eris -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} eris`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} eris\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].eris >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].eris -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} eris`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} eris\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].eris >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].eris -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} eris`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} eris\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].eris >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].eris -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} eris`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} eris\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'trash':
                        if (global.db.data.users[m.sender].eris >= Btrash * count) {
                            global.db.data.users[m.sender].trash += count * 1
                            global.db.data.users[m.sender].eris -= Btrash * count
                            conn.reply(m.chat, `Succes membeli ${count} trash dengan harga ${Btrash * count} eris`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} trash dengan harga ${Btrash * count} eris`.trim(), m)
                    
                    break
                    case 'wood':
                            if (global.db.data.users[m.sender].eris >= Bwood * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].eris -= Bwood * count
                                conn.reply(m.chat, `Succes membeli ${count} wood dengan harga ${Bwood * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} wood dengan harga ${Bwood * count} eris`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].eris >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].eris -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} eris`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].eris >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].eris -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} eris`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].eris >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].eris -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga ${Bsword * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} sword dengan harga ${Bsword * count} eris`.trim(), m)
                        
                        break
                  case 'rock':
                            if (global.db.data.users[m.sender].eris >= Brock * count) {
                                global.db.data.users[m.sender].rock += count * 1
                                global.db.data.users[m.sender].eris -= Brock * count
                                conn.reply(m.chat, `Succes membeli ${count} rock dengan harga ${Brock * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} rock dengan harga ${Brock * count} eris`.trim(), m)
                        
                        break 
                 case 'umpan':
                            if (global.db.data.users[m.sender].eris >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].eris -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} eris`.trim(), m)
                        
                        break
                    case 'pancingan':
                            if (global.db.data.users[m.sender].eris >= Bpancingan * count) {
                                global.db.data.users[m.sender].pancingan += count * 1
                                global.db.data.users[m.sender].eris -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga ${Bpancingan * count} eris`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pancingan dengan harga ${Bpancingan * count} eris`.trim(), m)
                        
                        break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].eris > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].eris -= armor * 1
                            conn.reply(m.chat, `Succes membeli armor seharga ${armor} eris` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} eris`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].eris += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].eris += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].eris += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].eris += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].eris += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'trash':
                    if (global.db.data.users[m.sender].trash >= count * 1) {
                        global.db.data.users[m.sender].trash -= count * 1
                        global.db.data.users[m.sender].eris += Strash * count
                        conn.reply(m.chat, `Succes menjual ${count} trash, dan anda mendapatkan ${Strash * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `trash anda tidak cukup`.trim(), m)
                    break
                    case 'wood':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].wood -= count * 1
                            global.db.data.users[m.sender].eris += Swood * count
                            conn.reply(m.chat, `Succes menjual ${count} wood, dan anda mendapatkan ${Swood * count} eris`, m)
                        } else conn.reply(m.chat, `wood anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].eris += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Spancingan * count} eris`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].eris += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Siron * count} eris`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].eris += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} eris`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].eris += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} sword, dan anda mendapatkan ${Ssword * count} eris`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'rock':
                        if (global.db.data.users[m.sender].rock >= count * 1) {
                            global.db.data.users[m.sender].rock -= count * 1
                            global.db.data.users[m.sender].eris += Srock * count
                            conn.reply(m.chat, `Succes menjual ${count} rock, dan anda mendapatkan ${Srock * count} eris`, m)
                        } else conn.reply(m.chat, `rock anda tidak cukup`, m)
                        break

                    case 'diamond':
                       if (global.db.data.users[m.sender].diamond >= count * 1) {
                           global.db.data.users[m.sender].diamond -= count * 1
                           global.db.data.users[m.sender].eris += Sdiamond * count
                           conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} eris`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                       break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
    }
}

handler.help = ['shop']
handler.tags = ['rpg']
    
handler.command = /^(shop)$/i
handler.group = true
handler.register = true

export default handler

let more = String.fromCharCode(8206)
let readMore = more.repeat(4001)