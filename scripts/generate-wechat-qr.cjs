const QRCode = require('qrcode')
const fs = require('fs')
const path = require('path')

const out = path.join(__dirname, '..', 'public', 'assets', 'wechat-qr.png')
fs.mkdirSync(path.dirname(out), { recursive: true })

QRCode.toFile(out, '+86 133 0532 4192', {
  width: 512,
  margin: 2,
  errorCorrectionLevel: 'M',
  color: { dark: '#111111', light: '#ffffff' },
})
  .then(() => console.log('written', out))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })