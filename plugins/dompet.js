let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    let mani = global.db.data.users[who].money
    let pplerr = `Sisa duit lu Rp${mani}`
    m.reply(`${mani ? pplerr : 'Sisa duit lu Rp0 Yahaha miskinnnn, ngepet yuk bang biar jadi soeltan :V' }`)
}
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.command = /^(dompet|duit)$/i
module.exports = handler