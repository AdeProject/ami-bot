let handler = async (m, { conn, args, isPrems }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
   // m.reply(`${global.db.data.users[who].limit} Limit Left ಥ_ಥ`)
if (isPrems) return m.reply(`*SULTANN*\n*Limit:* ${global.db.data.users[who].limit}`)
    m.reply(`*USER GRATISANN*\n*Limit:* ${global.db.data.users[who].limit}`)
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler