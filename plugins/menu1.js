let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	et gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
*RGP MENU

${usedPrefix}daily : absen rpg harian
> ${usedPrefix}daily

${usedPrefix}gethadiah : untuk dapatkan exp,limit,money gratis
> ${usedPrefix}gethadiah <kode>

${usedPrefix}hadiah : gatau, coba aja
> ${usedPrefix}hadiah

${usedPrefix}monthly :  absen bulanan
> ${usedPrefix}monthly

${usedPrefix}weekly (:  absen mingguan
> ${usedPrefix}weekly

${usedPrefix}adventure : gatau, coba aja
> ${usedPrefix}adventure

${usedPrefix}pull : tarik duit dari BRI
> ${usedPrefix}pull <jumlah>

${usedPrefix}pullall : tarik semua duit dari BRI
> ${usedPrefix}pullall

${usedPrefix}atm : masukkan uang ke BRI
> ${usedPrefix}atm <jumlah>

${usedPrefix}atmall : masukkan semua duit ke BRI
> ${usedPrefix}atmall

${usedPrefix}berbisnis : Berbisnis dengan teman
> ${usedPrefix}berbisnis @teman1@teman2@teman3

${usedPrefix}berkebon : jadi kang kebon
> ${usedPrefix}berkebon

${usedPrefix}feed : memberi makan hewan peliharaan
> ${usedPrefix}feed <pet type>

${usedPrefix}open : buka harta kartun
> ${usedPrefix}open <crate>

${usedPrefix}heal : hiling
> ${usedPrefix}heal

${usedPrefix}inv : cek asset apa aja yg nte punya
> ${usedPrefix}inv

${usedPrefix}kolam : gatau, coba aja
> ${usedPrefix}kolam 

${usedPrefix}leaderboard : cek peringkat user di gc lu
> ${usedPrefix}lb < jumlah user >

${usedPrefix}membunuh : jadi pembunuh bayaran
> ${usedPrefix}membunuh @target

${usedPrefix}meracik : membuat sesuatu tapi bukan anak
> ${usedPrefix}meracik < type > 

${usedPrefix}merampok : jadi maling dadakan
> ${usedPrefix}merampok @target

${usedPrefix}mulung : jadi kang mulung kawokawo
> ${usedPrefix}mulung

${usedPrefix}nambang : jadi penambang emas
> ${usedPrefix}nambang

${usedPrefix}nebang : jadi kang sembelih pohon
> ${usedPrefix}nebang

${usedPrefix}ramuan : jadi profesor dadakan
> ${usedPrefix}ramuan < pet type >

${usedPrefix}shop : foya foya / cari duit
> ${usedPrefix}shope <buy/sell> <query>

${usedPrefix}shopfish : belanja alat tempur mancing
> ${usedPrefix}shopfish <buy/sell> <query>
 
${usedPrefix}transfer : transfer ke teman/pacar/mantan/lonte
> ${usedPrefix}transfer <jenis> < jumlah > < tag >

*`,
	}
	)
}


handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu1|help1)$/i

handler.exp = 3

module.exports = handler