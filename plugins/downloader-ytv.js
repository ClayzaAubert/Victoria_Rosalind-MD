import fetch from 'node-fetch';

const handler = async (m, { conn, text, command }) => {
  if (!text) throw 'Linknya Mana.??';
  m.reply('*Tunggu sebentar ya, sedang mengunduh...*');
  try {
    const url = `https://api.clayzaaubert.my.id/api/downloader/youtube-video?url=${text}&apikey=${global.clayza}`;
    const response = await fetch(url);
    const clayza = await response.json();
    if (clayza.status === 'Success') {
      const videoUrl = clayza.data.url;
      conn.sendFile(m.chat, videoUrl, 'ytvideo.mp4', '*Ini videonya kak*', m);
    } else {
      m.reply('*Gagal mengunduh video, silakan coba lagi nanti.*');
    }
  } catch (e) {
    m.reply('*Terjadi kesalahan saat mengunduh video.*');
    console.error(e);
  }
}

handler.help = ['ytmp4'];
handler.tags = ['downloader'];
handler.command = /^(ytmp4|youtubemp4|ytv)$/i;
handler.limit = true;

export default handler;
