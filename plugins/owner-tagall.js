import moment from 'moment-timezone';

let handler = async (m, { conn, text, participants }) => {
    let teks = `⋙ *PESAN DARI ADMIN GROUP* ⋘\n\n${text ? text : 'Nothing'}\n\n`;
  
    for (let mem of participants) {
        let jid = mem.jid || mem.id;
        teks += `@${jid.split('@')[0]}\n`;
    }
  
    teks += `___________________________________________`;
  
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.jid || a.id) });
  };

handler.help = ['o-tagall'];
handler.tags = ['owner'];
handler.command = ['o-tagall'];
handler.owner = true;
handler.group = true;
handler.register = true;

export default handler;
