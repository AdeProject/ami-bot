let handler = async m => m.reply(`
╭─「 Donasi 」
│ Dana,gopay,ovo  [082127399948]
│ Pulsa [082127399948]
╰────
untuk pembayaran Via qris silakan hubungi owner
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler