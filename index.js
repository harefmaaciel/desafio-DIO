let nome = 'Maximo'
let experienciaXP = 10002
console.log(nome + ', SEJA BEM VINDO AO GAME')
console.log('PARABÉNS POR CHEGAR ATÉ!!')

if (experienciaXP <= 1000) {
    console.log('Sua pontuação é ' + experienciaXP + ' XP, nivel FERRO' )
}else if (experienciaXP >= 1001 && experienciaXP <= 2000) {
    console.log('Sua pontuação é ' + experienciaXP + ' XP, nivel BRONZE' )
}else if (experienciaXP > 2000 && experienciaXP <= 5000){
    console.log('Sua pontuação é ' + experienciaXP + ' XP, nivel PRATA' )
}else if (experienciaXP >= 6001 && experienciaXP <= 7000) {
    console.log('Sua pontuação é ' + experienciaXP + ' XP, nivel OURO' )
}else if (experienciaXP >= 7001 && experienciaXP <= 8000) {
    console.log('Sua pontuação é ' + experienciaXP + ' XP, nivel PLATINA' )
}else if (experienciaXP >= 8001 && experienciaXP <= 9000) {
    console.log('Sua pontuação é ' + experienciaXP + ' XP, nivel ASCENDENETE' )
}else if (experienciaXP >=9001 && experienciaXP <= 10000) {
    console.log('CONTINUI ASSIM PRA CHEGAR AO TOPO')
    console.log('Sua pontuação é ' + experienciaXP + ' XP, nivel IMORTAL' )
} else {
    console.log('VOCE MITOU')
    console.log('Sua pontuação é ' + experienciaXP + ' XP, nivel RADIANTE' )
}