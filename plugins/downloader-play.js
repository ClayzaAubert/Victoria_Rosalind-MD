import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Judulnya?`
  m.reply(wait)
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw 'Tidak Ditemukan'
  let { title, thumbnail, timestamp, views, ago, url } = vid

  let captvid = `╭──── 〘 YOUTUBE INFO 〙
┇ Judul: ${title}
┇ Durasi: ${timestamp}
┇ Views: ${views}
┇ Upload: ${ago}
┇ Link: ${url}
╰────────◈`
  conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid }, m)

  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });
  const sampah = os.tmpdir();
  const writableStream = fs.createWriteStream(`${sampah}/${title}.mp3`);

  await streamPipeline(audioStream, writableStream);

  let sendmusik = {
    audio: {
      url: `${sampah}/${title}.mp3`
    },
    mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: wm,
        sourceUrl: url,
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  }

  return conn.sendMessage(m.chat, sendmusik, { quoted: m })
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^(play)$/i

handler.exp = 0
handler.limit = true
handler.register = false

export default handler