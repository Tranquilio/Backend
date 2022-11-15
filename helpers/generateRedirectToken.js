const jwt = require('jsonwebtoken');
const { generateKeyPairSync } = require('crypto')

const SECRET_PASSPHRASE = 'SECRET'

const generateKeyPair = () => {
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: SECRET_PASSPHRASE,
      },
    })
    const privateKey64 = Buffer.from(privateKey).toString('base64')
    const publicKey64 = Buffer.from(publicKey).toString('base64')
  
    const privateKeyBuffer = Buffer.from(privateKey64, 'base64')
    const publicKeyBuffer = Buffer.from(publicKey64, 'base64')

    return {
      publicKeyBuffer,
      privateKeyBuffer,
      privateKey64,
      publicKey64,
    }
}
  
const generateRedirectToken = (privateKeyBuffer, email) => {
    const payload = {
      redirectType: 'login',
      email
    }
  
    return jwt.sign(
      payload,
      { key: privateKeyBuffer, passphrase: SECRET_PASSPHRASE },
      { algorithm: 'RS512', expiresIn: '1h' },
    )
  }

exports.generateRedirectToken = generateRedirectToken;
exports.generateKeyPair = generateKeyPair;
