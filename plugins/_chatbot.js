import cheerio from 'cheerio';
import fetch from 'node-fetch';

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.chatbot) {
    try {
  let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg=" + encodeURIComponent(m.text))
  let res = await api.json()
  m.reply(res.cnt)
  } catch (e) {
  m.reply(eror)
    }
}}


async function getHaoKey() {
    try {
        const url = `https://yeyu1024.xyz/chat/haohula.json?r=${Math.random()}`;
        const response = await fetch(url);
        const data = await response.json();
        let array = data.haohula.token
        const randomItem = array[Math.floor(Math.random() * array.length)];
        return randomItem;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return null;
    }
}

async function wetabChat(query) {
    try {
        const ops = {
            prompt: query
        };

        const response = await fetch("https://wetabchat.haohuola.com/api/chat/conversation", {
            method: "POST",
            headers: {
                "I-App": "hitab",
                "I-Branch": "zh",
                "I-Lang": "id-ID",
                "I-Platform": "chrome",
                "I-Version": "1.0.43",
                "Content-Type": "application/json;charset=UTF-8",
                "Authorization": `Bearer ${await getHaoKey()}`,
                "Referer": "https://wetabchat.haohuola.com/api/chat/conversation",
                "origin": "chrome-extension://aikflfpejipbpjdlfabpgclhblkpaafo",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
            },
            body: JSON.stringify(ops)
        });

        // Mengembalikan respons yang diperoleh
        return await response.text();
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return null;
    }
}