console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split("=")[1] //slipt ele sera ao encontrar o caractere =
const idade = args[1].split("=")[1]
console.log(`O nome dele é ${nome} e tem a idade de ${idade} anos`)