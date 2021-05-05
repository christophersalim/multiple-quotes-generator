let gymQuote = ['The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion. - Arnold Schwarzenegger', 'If you think lifting is dangerous, try being weak. Being weak is dangerous. - Bret Contreras', 'All progress takes place outside the comfort zone. - Michael John Bobak', 'Instead of giving up turn your struggle into power.', 'Love yourself enough to live healthy lifestyle.', 'Making excuses burns zero calories per hour.'];
let heartbreakQuote = ['The heart will break, but broken live on. - Lord Byron', 'It is strange how often a heart must be broken before the years can make it wise. - Sara Teasdale', 'Sometimes good things fall apart so better things can fall together. - Marilyn Monroe', 'Hearts will never be practical until they are made unbreakable. - Tin Man', 'I’d rather have a broken arm than a broken heart. - Christie Brinkley', 'It’s hard asking someone with a broken heart to fall in love again. - Eric Kripke'];
let learningQuote = ['Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi', 'Tell me and I forget, teach me and I may remember, involve me and I learn. - Benjamin Franklin', 'Develop a passion for learning. If you do, you will never cease to grow. - Anthony J. D\'Angelo', 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible. - Richard Feynman', 'That is what learning is. You suddenly understand something you’ve understood all your life, but in a new way. - Doris Lessing', 'The beautiful thing about learning is nobody can take it away from you. - B.B. King'];

const messageObject = {
    gymQuote: gymQuote,
    heartbreakQuote: heartbreakQuote,
    learningQuote: learningQuote
}

const getRandomQuote = arrQuote => {
    let randomIndex = Math.floor(Math.random() * arrQuote.length);
    return arrQuote[randomIndex];
}

const pickOneMessage = object => {
    messageArray = []
    for (let key in object) {
        let keyValue = object[key];
        let randomKeyValue = getRandomQuote(keyValue);
        messageArray.push(randomKeyValue);
    }
    return messageArray;
}

let personName = 'Christopher';

const generateMessage = (object, name) => {
    let messageArray = pickOneMessage(object);
    console.log(`Hi, ${name}! Welcome to inspirational quote program! These are your quotes of the day: \n
Gym Quotes: ${messageArray[0]} \n
Heartbreak Quotes: ${messageArray[1]} \n
Learning Quotes: ${messageArray[2]} \n
Have a good day and stay healthy!`)
}

generateMessage(messageObject, personName);