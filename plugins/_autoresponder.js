import fs from 'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return

let regj = /(yatim)/i
    let isJadibot = regj.exec(m.text)
    let jadbot = [
'🤖',
'🤖',
'🤖'
]
let jadibot = jadbot[Math.floor(Math.random() * jadbot.length)]
    if (isJadibot && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${jadibot}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Pala Bapak Kau, Gausah Ngehina Anj`, m)
    }, 1000)
    }
    
let regs = /(aku sayang kamu)/i
    let isCintaKamu = regs.exec(m.text)
    let cinmu = [
'❤️',
'🥰',
'😍'
]
let cintakamuh = cinmu[Math.floor(Math.random() * cinmu.length)]
    if (isCintaKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${cintakamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${cintakamuh}`, m)
    }, 1000)
    }
    
    let regc = /(mau jadi pacar aku)/i
    let isSayangKamu = regc.exec(m.text)
    let saymu = [
'❤️',
'🥰',
'😍'
]
let sayangkamuh = saymu[Math.floor(Math.random() * saymu.length)]
    if (isSayangKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${sayangkamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Maaf Kak, Kamu Terlalu Baik Buat Aku`, m)
    }, 1000)
    }

let regh = /(hp kentang)/i
    let woybotak = regh.exec(m.text)
    let woy = [
'❤️',
'🥰',
'😍'
]
let kerjabagus = woy[Math.floor(Math.random() * woy.length)]
    if (woybotak && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${kerjabagus}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Emang Hp Ku Kentang Tapi Terbuat Dari Kentang Pilihan ${kerjabagus}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regsawit = /(Jancok)/i
    let sawit = regsawit.exec(m.text)
    let dalam = [
'😢',
'🤬',
'😡'
]
let pedalaman = dalam[Math.floor(Math.random() * dalam.length)]
    if (sawit && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${pedalaman}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Ndasmu ${pedalaman}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
let fajri = /(epic)/i
    let beban = fajri.exec(m.text)
    let jriban = [
'😜',
'😏',
'🤣'
]
let epicabadi = jriban[Math.floor(Math.random() * jriban.length)]
    if (beban && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${epicabadi}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Beban rank awokawok ${epicabadi}`, m)
    }, 1000)
    }
    
    let clayza = /(sc)/i
    let aubert= clayza.exec(m.text)
    let aveline = [
'😎',
'🤑',
'🤗'
]
let clayzaaubert = aveline[Math.floor(Math.random() * aveline.length)]
    if (aubert&& !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${clayzaaubert}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `===[ NOTE ]===
NAME BOT: Victoria Rosalind
VERSI: 4.2
OWNER: Clayza Aubert
WEB: https://clayzaaubert.my.id 

===[ LINK ]===
SC VICTORIA ROSALIND: https://www.youtube.com/c/ClayzaAubert

===[ TQTO ]===
Nurutomo
BochilGaming
ImYanXiao
ShirokamiRyzn
Xyroinee
Amelia Aubert (Story)
Clara Aubert (Support)
Clayza Aubert (Recode)

Script Victoria Rosalind Di Recode Oleh: *Clayza Aubert* ${clayzaaubert}`, m)
    }, 1000)
    }
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let xiaomi = /(xiaomi)/i
    let ampas = xiaomi.exec(m.text)
    let mipas = [
'😜',
'😏',
'🤣'
]
let xiaomiampas = mipas[Math.floor(Math.random() * mipas.length)]
    if (ampas && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${xiaomiampas}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Yang hpnya xiaomi, apalagi pake stock MemeUI mending buang aja kelaut hpnya ${xiaomiampas}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by ryzn - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

}

handler.limit = false
export default handler
