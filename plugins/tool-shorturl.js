import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, 'Linknya mana?', m);
  }

  try {
    const apiUrl = `https://api.clayzaaubert.my.id/api/others/shortlink?url=${encodeURIComponent(args[0])}&apikey=${global.clayza}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to shorten URL');
    }
    
    const data = await response.json();

    if (data.code === 200) {
      const shortLink = data.data;
      conn.reply(m.chat, `Short link: ${shortLink}`, m);
    } else {
      throw new Error('Failed to shorten URL');
    }
  } catch (error) {
    console.error(error.message);
    conn.reply(m.chat, 'Failed to shorten the URL.', m);
  }
};

handler.help = ['short <url>'];
handler.tags = ['internet'];
handler.command = /^short(url)?$/i;
handler.limit = true;

export default handler;
