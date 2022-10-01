function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

const themes = {
    astrology: ['sun', 'moon', 'mercury','venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'],
    luck: ['terrible', 'bad', 'right', 'good', 'great'],
    jokes: ['trust no one', 'go out and eat', 'not read this', 'play more']
  }

  let msgArray = [];

  for(let prop in themes) {
    let optionIdx = generateRandomNumber(themes[prop].length)
  
    switch(prop) {
      case 'astrology':
        msgArray.push(`Your asrology sign is a "${themes[prop][optionIdx]}".`)
        break
      case 'luck':
        msgArray.push(`Your luck is: "${themes[prop][optionIdx]}".`)
        break
      case 'jokes':
        msgArray.push(`You should: "${themes[prop][optionIdx]}".`) 
        break
      default:
        msgArray.push('error!!!')
        break
    }
  }

  function formatMsg() {
    const msgFormatted = msgArray.join(' ')
    console.log(msgFormatted)
  }
  
  formatMsg(msgArray);