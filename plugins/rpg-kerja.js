let handler = async (m, { conn, command, args, usedPrefix }) => {
     let type = (args[0] || '').toLowerCase()
     let users = global.db.data.users[m.sender]
     let time = global.db.data.users[m.sender].lastkerja + 72000000
     //let __timers = (new Date - global.db.data.users[m.sender].lastkerja)
     // let _timers = (0 - __timers)
     // let timers = clockString(_timers) 
     //JANGAN DI OTAK ATIK
     //job
     let pembayar = ['Ksatria Cabul', 'bangsawan Korup', 'Pedagang Budak', 'Bangsawan Cabul' ]
     let pembunuhbayarannn = pembayar[Math.floor(Math.random() * pembayar.length)]
     let mentanbat = ['Dreamleaf', 'Dragonvine', 'Kaila Leaf', 'Shadowroot', 'Starblossom', 'Frostleaf', 'Moonbloom', 'Sirenia Herb', 'Calestial Herb']
     let mencaritanamanobattt = mentanbat[Math.floor(Math.random() * mentanbat.length)]
     let pengbar = ['Bahan Makanan', 'Persenjataan', 'Bahan Obat Obatan', 'Buku']
     let pengantarbaranggg = pengbar[Math.floor(Math.random() * pengbar.length)]
     let pane = ['wortel', 'Kubis', 'stowbery', 'anggur', 'gandum', 'jeruk', 'pisang', 'apel', 'melon']
     let panen = pane[Math.floor(Math.random() * pane.length)]
     let penmak = ['Burger', 'Steak', 'Ramen', 'Sate Ayam', 'Babi Pangang', 'Ikan Bakar', 'Crapes', 'Fruit Soup']
     let penjualmakanannn = penmak[Math.floor(Math.random() * penmak.length)]
     let pelat = ['Menjadi Pelatih Sihir', 'Menjadi Pelatih Pedang', 'Menjadi Pelatih Pemanah', 'Mengajari Murid Akademi Sihir', 'Mengajari Murid Akademi Ksatria' ]
     let pelatihhh = pelat[Math.floor(Math.random() * pelat.length)]

     ///Alasan di pecat
     let PB = ['Kamu Gagal Membunuh target', 'Kamu Tertangkap Penjaga', 'Kamu Lebih lemah dari target']
     let Apembunuhbayaran = PB[Math.floor(Math.random() * PB.length)]
     let MTO = ['Gagal Menemukan Obat', 'Di Serang Monster', 'Mati Di Dalam Hutan', 'Terkena Tanaman Beracun']
     let Amencaritanamanobat = MTO[Math.floor(Math.random() * MTO.length)]
     let PGB = ['Kamu di rampok', 'kamu di Serang Monster']
     let Apengantarbarang = PGB[Math.floor(Math.random() * PGB.length)]
     let PTN = ['Gagal Panen', 'Ladang Kamu terbakar', 'Gudang Kamu terbakar']
     let Apetani = PTN[Math.floor(Math.random() * PTN.length)]
     let PLT = ['Kamu Mencuri', 'Kamu cabul terhadap murid sendiri']
     let Apelatih = PLT[Math.floor(Math.random() * PLT.length)]
     //Uang
     let coinpb = Math.floor(Math.random() * 50) + 100000
     let coinmto = Math.floor(Math.random() * 40) + 40000
     let coinpgb = Math.floor(Math.random() * 50) + 60000
     let coinptn = Math.floor(Math.random() * 42) + 90000
     let coinpm = Math.floor(Math.random() * 30) + 40000
     let coinplt = Math.floor(Math.random() * 30) + 70000
     //ANJAY
     let _1pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatPB = (_1pecat * 1)
     let ppecatPB = `Kamu Gagal Karena ${Apembunuhbayaran}`

     let _2pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatMTO = (_2pecat * 1)
     let ppecatMTO = `Kamu Gagal Menemukan Obat Karena ${Amencaritanamanobat}`

     let _3pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatPGB = (_3pecat * 1)
     let ppecatPGB = `Kamu Gagal Karena ${Apengantarbarang}`

     let _4pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatPTN = (_4pecat * 1)
     let ppecatPTN = `Kamu Gagal Karena ${Apetani}`

     let _5pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatPLT = (_5pecat * 1)
     let ppecatPLT = `Kamu Dipecat Karena ${Apelatih}`

     //GAK RAPIH G GANTENG
     let kerjaanya = `*List Kerjaan*
• PembunuhBayaran
• MencariTanaman Obat
• PengatarBarang
• Petani 
• Penjual Makanan 
• Pelatih

Contoh: *.kerja ojek*
`
     if (/kerjadulu|kerja|work/i.test(command)) {
          switch (type) {
               case 'pembunuhbayaran':
                    if (global.db.data.users[m.sender].pembunuhbayaran == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw `Kamu Sudah Bekerja\nSaatnya Istirahat Selama ${clockString(time - new Date())}`
                    global.db.data.users[m.sender].eris += coinpb
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Kamu Berhasil Membunuh *${pembunuhbayarannn}*\nDan Mendapatkan Eris Senilai *${coinpb}*`)
                    if (pecatPB > 1) {
                         global.db.data.users[m.sender].pembunuhbayaran -= pecatPB * 1
                         m.reply(ppecatPB)
                    }
                    break
               case 'mencaritanamanobat':
                    if (global.db.data.users[m.sender].mencaritanamanobat == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw `Kamu Sudah Bekerja,Saatnya Istirahat Selama\n${clockString(time - new Date())}`
                    global.db.data.users[m.sender].eris += coinmto
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Kamu Menemukan Tanahamn Obat *${mencaritanamanobattt}* dan Menjualnya\nDan Mendapatkan Eris Senilai *${coinmto}*`)
                    if (pecatMTO > 1) {
                         global.db.data.users[m.sender].mencaritanamanobat -= pecatMTO * 1
                         m.reply(ppecatMTO)
                    }
                    break
               case 'pengantarbarang':
                    if (global.db.data.users[m.sender].pengantarbarang == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw `Kamu Sudah Bekerja,Saatnya Istirahat Selama\n${clockString(time - new Date())}`
                    global.db.data.users[m.sender].eris += coinpgb
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Kamu Mengantar *${pengantarbaranggg}*\nDan Mendapatkan Eris Senilai *${coinpgb}*`)
                    if (pecatPGB > 1) {
                         global.db.data.users[m.sender].pengantarbarang -= pecatPGB * 1
                         m.reply(ppecatPGB)
                    }
                    break
               case 'petani':
                    if (global.db.data.users[m.sender].petani == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw `Kamu Sudah Bekerja,Saatnya Istirahat Selama\n${clockString(time - new Date())}`
                    global.db.data.users[m.sender].eris += coinptn
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`${panen} Sudah Panen Dan Menjualnya\nHasil Menjual Mendapatkan Eris Senilai *${coinptn}*`)
                    if (pecatPTN > 1) {
                         global.db.data.users[m.sender].petani -= pecatPTN * 1
                         m.reply(ppecatPTN)
                    }
                    break
               case 'penjualmakanan':
                    if (global.db.data.users[m.sender].penjualmakanan == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw `Kamu Sudah blBekerja,Saatnya Istirahat Selama\n${clockString(time - new Date())}`
                    global.db.data.users[m.sender].cointembaga += coinpm
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Kamu Baru Saja Membuat Makanan *${penjualmakanannn}* Untuk Pelanggan\nDan Mendapatkan Coin Tembaga Senilai *${coinpm}*`)
                    break
               case 'pelatih':
                    if (global.db.data.users[m.sender].pelatih == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw `Kamu Sudah Bekerja,Saatnya Istirahat Selama\n${clockString(time - new Date())}`
                    global.db.data.users[m.sender].eris += coinplt
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Kamu Baru Saja Selesai ${pelatihhh}\nDan Mendapatkan Eris Senilai *${coinplt}*`)
                    if (pecatPLT > 1) {
                         global.db.data.users[m.sender].pelatih -= pecatPLT * 1
                         m.reply(ppecatPLT)
                    }
                    break
               default:
                    return conn.reply(m.chat, kerjaanya, m)
          }
     }

}
///AKSJDDJ
handler.help = ['kerja']
handler.tags = ['rpg']
handler.command = /^kerja$/i
handler.register = true

export default handler
//JANGAN DIUBAH YA YG DIBAWAH
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
     let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
     let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
     let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
     let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
     return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}