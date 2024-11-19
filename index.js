require("./database/global");

const func = require("./database/place");
const readline = require("readline");
const usePairingCode = true;

const allowedNumbers = ['62881024614950', '12496175106']; // Add allowed numbers here

const question = (text) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
};

async function startSesi() {
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
  const { state, saveCreds } = await useMultiFileAuthState(`./session`);
  const { version } = await fetchLatestBaileysVersion();

  console.log(chalk.bgMagenta.blue.bold(' █ █▄░█ █░█ █ █▀ ▀█▀ █░█ █▀\n█ █░▀█ ▀▄▀ █ █▄ ░█░ █▄█ ▄█'));
  console.log(chalk.blue.bold('-------------------------------------------------------'));
  console.log(chalk.green.italic('\nCreate By: Xkyy Dev\nTelegram: XkyyDevinvic\nSubscribe Myy Youtube : @FreyanaDev'));
  console.log(chalk.blue.bold('------------------------------------------------------'));
  console.log(chalk.bgMagenta.italic('Buy Panel and adp pm 62857277639350'))

  const connectionOptions = {
    version,
    keepAliveIntervalMs: 30000,
    printQRInTerminal: !usePairingCode,
    logger: pino({ level: "fatal" }),
    auth: state,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
  };

  const Izz = func.makeWASocket(connectionOptions);
  
  if (usePairingCode && !Izz.authState.creds.registered) {
    const phoneNumber = await question(chalk.red('\nEnter Your Number\nNumber: '));
    
    // Check if the entered phone number is in the allowed numbers
    if (!allowedNumbers.includes(phoneNumber.trim())) {
      console.log(chalk.red('Access Denied: This number is not authorized.'));
      process.exit();
    }

    const code = await Izz.requestPairingCode(phoneNumber.trim());
    console.log(chalk.blue(`Your Pairing Code: ${code}`));
  }

  store.bind(Izz.ev);

  Izz.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Izz.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Izz.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
Izz.sendMessage(`62857277639350@s.whatsapp.net`, { text: `\`Menyambung\`
  *𝗜𝗠 𝗕𝗔𝗖𝗞 𝗕𝗔𝗡𝗚 𝗫𝗞𝗬𝗬 🤩*`})
if (autoJoin) {
Izz.groupAcceptInvite(codeInvite)
}
}
})

  Izz.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Izz.readMessages([m.key])
if (!Izz.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(Izz, m, store)
require("./𝐈𝐧𝐯𝐢𝐜𝐓𝐳𝐲")(Izz, m, store)
} catch (err) {
console.log(err)
}
})

  Izz.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await Izz.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Izz.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await Izz.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i.ibb.co/s2KvYYf/20230524-060103.png'
}
let nameUser = await Izz.getName(num)
let membr = metadata.participants.length
if (anu.action == 'add') {
await welcome(`${nameUser}`, `${metadata.subject}`, `${ppgroup}`, `${membr}`, `${ppuser}`, `https://i.ibb.co/LgWsTJC/1685442424826.jpg`)
Izz.sendMessage(anu.id, { image: fs.readFileSync(`./all/tmp/welcome1.png`), mentions: [num], caption: `✧━━━━━━[ *WELCOME* ]━━━━━━✧

┏––––––━━━━━━━━•
│⫹⫺ YT : ${nameUser}
┣━━━━━━━━┅┅┅
│( 👋 Hallo @${num.split('@')[0]} ⁩)
├[ *INTRO* ]—
│ *Nama:* 
│ *Umur:* 
│ *Gender:*
┗––––––━━┅┅┅

––––––┅┅ *DESCRIPTION* ┅┅––––––
${metadata.desc}` })
} else if (anu.action == 'remove') {
await goodbye(`${nameUser}`, `${metadata.subject}`, `${ppgroup}`, `${membr}`, `${ppuser}`, `https://i.ibb.co/LgWsTJC/1685442424826.jpg`)
Izz.sendMessage(anu.id, { image: fs.readFileSync(`./all/tmp/goodbye1.jpg`), mentions: [num], caption: `✧━━━━━━[ *GOOD BYE* ]━━━━━━✧
Sayonara *@${num.split('@')[0]}* 👋

*BALIK LAGI BAWA GORENGAN YAK*'` })
}
}
} catch (err) {
console.log(err)
}
})

  Izz.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = Izz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

  Izz.public = true;

  Izz.ev.on('creds.update', saveCreds);
  return Izz;
}

startSesi();

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});