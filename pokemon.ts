import promptSync from 'prompt-sync';
const prompt = promptSync()
let playerLife: number = 50;
let cpuLife: number = 50;
let attackArray: string[] = ["charge", "soin", "aqua-jet", "draco-rage"];
let round: number = 1

function choiceAttak(attackArray: string) {
    for (let i = 0; i < attackArray.length; i++) {
        console.log(attackArray[i]);
    }
    let choice: string = prompt("choissiez votre attaque ?")
}

function updateLife(numberPV: number) {
    if (round % 2 == 0) {
        playerLife = playerLife + numberPV
    } else {
        cpuLife = cpuLife + numberPV
    }
}

function updateMyLife(nmb: number) {
    if (round % 2 == 0) {
        cpuLife = cpuLife + nmb
    } else {
        playerLife = playerLife + nmb
    }
}

function checkAttackSucess(min: number, max: number) {
    let sucess = false
    if (random(min, max) == max) {
        sucess = true;
    }
    return sucess
}

function game() {
    while (cpuLife > 0 && playerLife > 0) {

        if (cpulife < 1) {
            console.log("gagné");

        } else if (playerLife < 1) {
            console.log("perdu");

        }
    }
    function random(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    function attack(attack: string) {
        switch (attack) {

            case "charge":
                console.log("attaque charge");
                if (checkAttackSucess(0, 1) == true) {
                    updateLife(-10)
                    console.log("tu perds 10 pv");
                } else {
                    console.log("echec");
                }
                break;

            case "soin":
                console.log("utilise soin");
                if (checkAttackSucess(0, 1) == true) {
                    updateMyLife(10)
                    console.log("tu gagnes 10 pv");
                } else {
                    console.log("echec");
                }
                break;

            case "aqua-jet":
                console.log("attaque aqua-jet");
                if (checkAttackSucess(0, 1) == true) {
                    updateLife(-30)
                    console.log("tu perds 30 pv");
                } else {
                    console.log("echec");
                }
                break;

            case "draco-rage":
                console.log("attaque draco-rage");
                if (checkAttackSucess(0, 1) == true) {
                    updateLife(-50)
                    console.log("tu perds 50 pv");
                } else {
                    console.log("echec");
                }
                break;
                
            default:
                console.log("passe ton tour");
                break;
        }
        return attack
    }
