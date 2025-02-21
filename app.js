// SECTION state 
const heros = [
  {
    name: 'barracuda',
    hp: 100,
    gold: 0,
    level: 1,
    attackPower: 15,
  },
  {
    name: 'unicorn',
    hp: 100,
    gold: 0,
    level: 1,
    attackPower: 15,
  }

]

const boss = {
  name: 'greg',
  hp: 200,
  level: 1
}

// !SECTION

// SECTION logic

function levelUpBarracuda() {

  const barracuda = heros[0]
  if (barracuda.gold >= 20) {
    barracuda.level++
  }

  drawLevelBarracuda()
  console.log(barracuda.level);

}

function levelUpUnicorn() {

  const unicorn = heros[1]
  if (unicorn.gold >= 20) {
    unicorn.level++

  }
  drawLevelUnicorn()
  console.log(unicorn.level);

}

function attackGreg() {
  let totalAttackPower = 0

  heros.forEach(hero => {
    if (hero.hp == 0) return
    totalAttackPower += hero.attackPower
  })
  boss.hp -= totalAttackPower

  if (boss.hp < 1) {
    boss.hp = 200
    for (let i = 0; i < heros.length; i++) {
      const hero = heros[i];
      hero.gold += 20
    }

  }

  console.log(totalAttackPower)

  drawGregsHp()
}



// !SECTION

// SECTION Draw

function drawLevelBarracuda() {
  const barracuda = heros[0]
  const barracudaLevelElm = document.getElementById("barracudaLevel")
  barracudaLevelElm.innerText = `LVL; ${barracuda.level}`
}

function drawLevelUnicorn() {
  const unicorn = heros[1]
  const unicornLevelElm = document.getElementById("unicornLevel")
  unicornLevelElm.innerText = `LVL; ${unicorn.level}`
}

function drawGregsHp() {
  const gregsHpElem = document.getElementById('gregsHealth')
  gregsHpElem.innerText = `HP: ${boss.hp}`
}

// !SECTION

// SECTION page load
drawLevelBarracuda()
drawLevelUnicorn()
drawGregsHp()
// !SECTION