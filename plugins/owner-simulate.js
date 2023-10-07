let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
  if (!event) {
    return await conn.reply(
      m.chat,
      `contoh:
${usedPrefix + command} welcome @user
${usedPrefix + command} bye @user
${usedPrefix + command} promote @user
${usedPrefix + command} demote @user`.trim(),
      m
    );
  }
  let mentions = text.replace(event, '').trimStart();
  let who = mentions ? conn.parseMention(mentions) : [];
  let part = who.length ? who : [m.sender];
  let act = false;

  // I assume you wanted to use "event" instead of "htjava" in the message
  m.reply(`*Simulating* ${event}...`);

  switch (event.toLowerCase()) {
    case 'add':
    case 'invite':
    case 'welcome':
      act = 'add';
      break;
    case 'bye':
    case 'kick':
    case 'leave':
    case 'remove':
      act = 'remove';
      break;
    case 'promote':
      act = 'promote';
      break;
    case 'demote':
      act = 'demote';
      break;
    default:
      throw new Error(`Unsupported event: ${event}`);
  }

  if (act) {
    return conn.participantsUpdate({
      id: m.chat,
      participants: part,
      action: act,
    });
  }
  // return conn.onDelete(m); // You can uncomment this line if needed
};

handler.help = ['simulate'];
handler.tags = ['owner'];
handler.command = /^simulate$/i;

export default handler;
