let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (db.data.chats[m.chat].expired < 1) throw `Group Ini Tidak DiSet Sewa !`
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    
    conn.reply(m.chat, `Sewa Akan Berakhir Selama
${msToDate(global.db.data.chats[who].expired - now)} Lagi`, m)
}
handler.help = ['ceksewa']
handler.tags = ['group']
handler.command = /^((cek)?sewa)$/i
handler.group = true

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari\n" + hours + " Jam\n" + minutes + " Menit";
    // +minutes+":"+sec;
}
