let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
*GAMING MENUU*

${usedPrefix}asahotak : untuk asah otak biar tajem
> ${usedPrefix}asahotak

${usedPrefix}caklonte : bikin lu jadi setress
> ${usedPrefix}caklontong

${usedPrefix}delttt : menyelesaikan hubungan tictactoe dgn dia
> ${usedPrefix}delttt

${usedPrefix}dungeon : lawan monsterr
> ${usedPrefix}dungeon [nama room]

${usedPrefix}family100 : punya keluarga 100
> ${usedPrefix}family100

${usedPrefix}fighting : gelud 
> ${usedPrefix}fighting

${usedPrefix}hunter : berburu loli untuk di ek sex kusi
> ${usedPrefix}hunter

${usedPrefix}pancing : mancing emosi
> ${usedPrefix}pancing <type>

${usedPrefix}judi : jadi kang maen
> ${usedPrefix}judi <jumlah taruhan>

${usedPrefix}lengkapikalimat : tebak kalimat
> ${usedPrefix}lengkapikalimat

${usedPrefix}math : olimpiade MTK
> ${usedPrefix}math <mode>

${usedPrefix}siapakahaku : tebak tebakan
> ${usedPrefix}siapaaku

${usedPrefix}suit : suit suitan
> ${usedPrefix}suit <batu/gunting/kertas>

${usedPrefix}suitpvp : suit sama teman
> ${usedPrefix}suitpvp @tag 

${usedPrefix}susunkata : menyusun kata
> ${usedPrefix}susunkata

${usedPrefix}tebakanime : hanya wibu yg bisa nebak
> ${usedPrefix}tebakanime 

${usedPrefix}tebakbendera : tebak benderea
> ${usedPrefix}tebakbendera

${usedPrefix}tebakgambar : tebak gambar 4no
> ${usedPrefix}tebakgambar

${usedPrefix}tebakgame : tebak game
> ${usedPrefix}tebakgame

${usedPrefix}tebakkata : tebak kataa
> ${usedPrefix}tebakkata

${usedPrefix}tebakkimia : hanya X MIPA yag tau
> ${usedPrefix}tebakkimia

${usedPrefix}tebaklagu : yang suka nyandi di wc pasti tau
> ${usedPrefix}tebaklagu

${usedPrefix}tebaklirik : tebak lirik jedag jedug
> ${usedPrefix}tebaklirik

${usedPrefix}tekateki : teka teki tidak pake silang
${usedPrefix}tekateki

${usedPrefix}tictactoe : tik tak tu
> ${usedPrefix}tictactoe [custom room name]

${usedPrefix}ttt : tik tak tu
> ${usedPrefix}ttt [custom room name]
`,
	}
	)
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu2|help2)$/i

handler.exp = 3

module.exports = handler