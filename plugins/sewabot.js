let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())
  let nama = conn.getName(m.sender)
  let aine = '6282127399948@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / 30 Hari
Rp. 15.000 Dana
Rp. 15.000 Pulsa

2. Premium / 30 Hari
Rp. 10.000 Dana
Rp. 10.000 Pulsa

3. Premium + Grup / 30 Hari
Rp. 20.000 Dana
Rp. 20.000 Pulsa

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'4082900335168443'}]}],
  headerImage: { productId: '4082900335168443',
  jpegThumbnail: baper },
  businessOwnerJid: `6285171720050@s.whatsapp.net`
  },
  footerText: 'https://ademas.my.id',
  }},{})
 // conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  m.reply(`UPGRADE PLAN PRICE LIST
  
PREMIUM USER:
Rp10.000 = 1Bulan
Rp20.000 = 65Hari

SULTAN USER:
Rp100.000 = 1Bulan

BENEFIT:
PREMIUM USER:
-> Invite bot ke grub sepuasnya
-> Akses fitur premium
-> Mendapatkan 1Jt Money dari owner

SULTAN USER:
-> Invite bot ke grub sepuasnya
-> Akses fitur premium
-> Ban/Unban user
-> Bisa request money ke owner
  `)
//  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
conn.delay(3)
conn.sendMessage(m.chat, { text: `Chat @6282127399948 Jika ${nama} ingin upgrade plan`, mentions: ['6282127399948@s.whatsapp.net'] })
}
handler.help = ['sewa'],
handler.tags = ['main']
handler.command = /^(sewa|premium|buyprem)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
