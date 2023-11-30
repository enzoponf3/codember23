let code = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
let initialVal = 0
let res = ''

code.split('').forEach(e => {
    switch (e) {
        case '#':
            initialVal = initialVal + 1
            break
        case '@':
            initialVal = initialVal - 1
            break
        case '*':
            initialVal = initialVal * initialVal
            break
        case '&':
            res = res.concat(initialVal)
            break
    }
})

res