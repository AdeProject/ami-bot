let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
*TOOLS MANAGEMENT GROUP*	
		
${usedPrefix}demote : menurunkan jabatan admin
> ${usedPrefix}demote @user

${usedPrefix}kick : mengurangi beban grub
> ${usedPrefix}kick @user

${usedPrefix}promote : menaikan jabatan member
> ${usedPrefix}promote @user

${usedPrefix}add : untuk menambah beban grub
> ${usedPrefix}add 628xnxx

${usedPrefix}enable : mengaktifkan opsi
> ${usedPrefix}enable <opsi>

${usedPrefix}disable : menonaktifkan opsi
> ${usedPrefix}disable <opsi>

${usedPrefix}cekexpired : cek expired grub
> ${usedPrefix}cekexpired

${usedPrefix}infogrup : cek info grub
> ${usedPrefix}infogrup

${usedPrefix}grouplist : listgrub
> ${usedPrefix}grouplist

${usedPrefix}grouptime : atur jadwal buka/tutup grub
> ${usedPrefix}grouptime <open/close> <number>

${usedPrefix}group : buka/tutup grub
> ${usedPrefix}group open/close

${usedPrefix}link : dapatkan link grub
> ${usedPrefix}link

${usedPrefix}listadmin : cek daftar pejabat grub
> ${usedPrefix}listadmin

${usedPrefix}hidetag : tag all member tanpa @
> ${usedPrefix}hidetag <text>

${usedPrefix}readviewonce : lihat foto/video viewonce
> ${usedPrefix}readviewonce

${usedPrefix}revoke : reset link grub
> ${usedPrefix}revoke

${usedPrefix}setdeskgroup : ubah deskripsi grub
> ${usedPrefix}setdeskgroup <text>

${usedPrefix}setppgroup : ganti pp grub
> ${usedPrefix}setppgroup 

${usedPrefix}setwelcome : atur sambutan beban baru
> ${usedPrefix}setwelcome selamat datang todd

${usedPrefix}tagall : tag all member pakai @
> ${usedPrefix}tagall <text>

${usedPrefix}tagme : tag lu
>${usedPrefix}tagme

`,
		
	}
  )
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu0|help0)$/i

handler.exp = 3
0
module.exports = handler