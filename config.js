require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐈𝐧𝐯𝐢𝐜𝐒𝐭𝐨𝐫𝐞"
global.dana = "0881024614950"
global.qris = "https://b.top4top.io/p_3199egvlc0.jpg"


// GLOBAL SETTING
global.owner = "6283824429730"
global.namabot = "𝐈𝐧𝐯𝐢𝐜𝐓𝐳𝐲𝐍𝐞𝐰 𝐂𝐫𝐚𝐬𝐡𝐞𝐫☠️"
global.nomorbot = "6283824429730"
global.namaCreator = "𝗫𝗸𝘆𝘆 𝗕𝗿𝗲𝘄🐉"
global.linkyt = "https://youtube.com/@FreyanaDev"
global.autoJoin = false
global.antilink = false
global.versisc = '𝐕𝟏.𝟒'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTA'
global.capikey = 'PLTC'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/aclikrrd.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VaotUNFCXC3Ac7zQ9Y34'
global.packname = "𝐈𝐧𝐯𝐢𝐜𝐓𝐳𝐲 𝐕𝟏.𝟒 𝐍𝐞𝐰🐉"
global.author = "𝐈𝐧𝐯𝐢𝐜𝐓𝐳𝐲 𝐕𝟏.𝟒 𝐍𝐞𝐰🐉"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})