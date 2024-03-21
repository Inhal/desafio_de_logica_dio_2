let calculoComOElo = saldo(65,32)

function saldo(vitorias = 0, derrotas = 0){
    let calculo = vitorias-derrotas
    let calculoEelo =[calculo]

        switch (true) {
          case calculo < 10:
            calculoEelo.push('ferro');
            break;
          case calculo >= 11 && calculo <= 20:
            calculoEelo.push('bronze');
            break;
          case calculo >= 21 && calculo <= 50:
            calculoEelo.push('prata');
            break;
            case calculo >= 51 && calculo <= 80:
            calculoEelo.push('ouro');
            break;
            case calculo >= 81 && calculo <= 90:
            calculoEelo.push('diamante');
            break;
            case calculo >= 91 && calculo <= 100:
            calculoEelo.push('lendario');
            break;
            default:
            calculoEelo.push('imortal');
        }
        return calculoEelo
}

console.log(`O heroi tem saldo de ${calculoComOElo[0]} e esta no nivel de ${calculoComOElo[1]}`);






