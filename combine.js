
let nbpt = require("./swap-protocol-both.nbpt.json")
let nll = require("./swap-protocol-both.nll.json")

let output = {
    names: nbpt.names,
    net: nll
}

let fs = require('fs')

fs.writeFileSync('./swap-protocol-both.net.json', JSON.stringify(output), {encoding: 'utf-8'})