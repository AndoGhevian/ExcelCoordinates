const YRegex = /^([A-Z][A-Z]*)$/
const XRegex = /^([1-9][0-9]*)$/
const YXRegex = /^([A-Z][A-Z]*)([1-9][0-9]*)$/


function YXToNumPair(YX) {
    if (typeof YX !== 'string') return [null, null]

    const match = YX.match(YXRegex)
    if (!match) return [null, null]

    return [YToNum(match[1]), XToNum(match[2])]
}

function YToNum(Y) {
    if (typeof Y !== 'string') return null
    if (!YRegex.test(Y)) return null

    Y = Y.split('').reverse().join('')

    let raws = 0
    for (let charIndex = 0; charIndex <= Y.length - 1; charIndex++) {
        const char = Y[charIndex]

        const code = char.codePointAt(0) - 64
        const rawsOfPosition = code * Math.pow(26, charIndex)

        raws += rawsOfPosition
    }
    return raws - 1
}

function XToNum(X) {
    if (typeof X !== 'string') return null
    if (!XRegex.test(X)) return null

    return X - 1
}

function numToY(num) {
    if (typeof num !== 'number') return null
    if (Math.floor(num) !== num) return null

    if (num >= 0) {
        let Y = ''
        let raws = num + 1

        while (raws !== 0) {
            const remainder = raws % 26
            raws -= remainder
            raws = remainder === 0 ? ((raws / 26) - 1) : (raws / 26)

            const code = 64 + (remainder === 0 ? 26 : remainder)
            Y += String.fromCodePoint(code)
        }
        return Y.split('').reverse().join('')
    }

    return null
}

function numToX(num) {
    if (typeof num !== 'number') return null
    if (Math.floor(num) !== num) return null
    
    if (num >= 0) return num + 1 + ''

    return null
}

module.exports = {
    YXToNumPair,
    YToNum,
    XToNum,
    numToY,
    numToX,
    regex: {
        YRegex,
        XRegex,
        YXRegex,
    }
}