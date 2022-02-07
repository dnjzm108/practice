require('dotenv').config()
const crypto = require('crypto')


function test(pw){
    let header = {"test":"jwt","arl":"SHA256"}
    let exp =  new Date().getTime()+((60*60*2)*1000)
    let payload ={
        pw,
        exp
    }

    const encodingHeader = Buffer.from(JSON.stringify(header))
                                  .toString('base64')
                                  .replace("==","")
                                  .replace("=",'')

    const encodingPayload = Buffer.from(JSON.stringify(payload))
                                   .toString('base64')
                                   .replace("==",'')
                                   .replace("=",'')
    const signature = crypto.createHmac('sha256',Buffer.from(process.env.test))
                             .update(encodingHeader+"."+encodingPayload)
                             .digest('base64')
    console.log(signature);
}


test()