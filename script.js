const questionsPool = [
    {text:'Write your name inside an HTML paragraph?', points:1},
    {text:'Write your name inside an HTML Heading 1?', points:1},
    {text:'What function can we use to display data in the console?', points:1},
    {text:'What method can we use to pop up an alert in the browser?', points:1},
    {text:'What function can we use to access an HTML element in javascript?', points:1},
    {text:'What display function it should be only use for testing?', points:1},
    {text:'What method or function can we use to print the content of the current window?', points:1},
    {text:'How many ways do we have to declare a variable in Javascript?', points:1},
    {text:'How do we create a variable called "a" that stores the value 123?', points:1},
    {text:'How do we create a variable called "word" that stores the value "hello"?', points:1}
]

const exercisePool = [
    {text:'Write your name inside an HTML paragraph?', points:1},
]

const questionsDiv = document.getElementById('questions')

var count = 1

for(i=0;i<9;i++){
    const question = questionsPool.pop(getRandomNumber(questionsPool))
    addQuestion(question.text,question.points)
}

{
    const question = exercisePool.pop(getRandomNumber(exercisePool))
    addQuestion(question.text,question.points)    
}

function addQuestion(textQuestion, pointsQuestion){
    const question = document.createElement('div')
    question.setAttribute('id',`question${count}`)
    question.classList.add('question')

    const points = document.createElement('span')
    points.setAttribute('id',`points${count}`)
    points.classList.add('points')
    
    const pointsDivLine = document.createElement('div')
    pointsDivLine.textContent = '___'
    const pointsDivPoints = document.createElement('div')
    pointsDivPoints.textContent = pointsQuestion
    pointsDivPoints.style.paddingLeft = '0.5rem'

    points.appendChild(pointsDivLine)
    points.appendChild(pointsDivPoints)
    
    const number = document.createElement('div')
    number.setAttribute('id',`number${count}`)
    number.classList.add('number')
    number.style.paddingInline = '0.5rem'
    number.textContent = `${count}.`
    
    const text = document.createElement('div')
    text.setAttribute('id',`text${count}`)
    text.classList.add('text')
    text.textContent = textQuestion

    question.appendChild(points)
    question.appendChild(number)
    question.appendChild(text)

    questionsDiv.appendChild(question)
    question.style.display = 'flex'
    question.style.marginTop = '0.5rem'
    question.style.marginBottom = '2rem'
    question.style.gap = '5px'

    count++    
}


function getRandomNumber(pool){
    return Math.floor(Math.random() * pool.length)
}