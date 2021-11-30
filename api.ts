
const VALID_PIN = '1234';

export const validateInput = (pinToCheck: string): Promise<string> => new Promise((resolve, reject) => setTimeout(() => {
  if(pinToCheck === VALID_PIN) {
    resolve('Pin is valid')
  } else {
    reject('Invalid pin')
  }
}, 2500)) 