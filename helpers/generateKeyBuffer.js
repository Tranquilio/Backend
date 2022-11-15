const generateKeyBuffer = (key64) => {
    const privateKeyBuffer = Buffer.from(key64, 'base64')
    return privateKeyBuffer
}

exports.generateKeyBuffer = generateKeyBuffer;
