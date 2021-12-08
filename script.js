const questionsPool = [
    {text:'What does HTML stand for?', points:1},
    {text:'What is the HTML element for inserting a line break?', points:1},
    {text:'What element do we use to link the CSS file to our HTML document', points:1},
    {text:'What element do we use to link the JS file to our HTML document', points:1},
    {text:'Write your name inside an HTML paragraph?', points:1},
    {text:'Write your name inside an HTML Heading 1?', points:1},
    {text:'What function can we use to display data in the console?', points:1},
    {text:'What method can we use to pop up an alert in the browser?', points:1},
    {text:'What function can we use to access an HTML element in javascript?', points:1},
    {text:'What display function it should be only use for testing?', points:1},
    {text:'What method or function can we use to print the content of the current window?', points:1},
    {text:'How many ways do we have to declare a variable in Javascript?', points:1},
    {text:'How do we create a variable called "a" that stores the value 123?', points:1},
    {text:'How do we create a variable called "word" that stores the value "hello"?', points:1},
]

const exercisePool = [
    {text:'I have the follow element "<div class="important-text"></div>". Write the css to change the background color of this element.', points:10},
    {text:'I want to change de color of the text of all the tag buttons to white. Write the css to change all the buttons text to white.', points:10},
]

const questionsDiv = document.getElementById('questions')

var count = 1

for(i=0;i<10;i++){
    const number = getRandomNumber(questionsPool)
    const question = questionsPool[number]
    addQuestion(question.text,question.points)

    questionsPool.splice(number,1)
}

{
    const question = exercisePool.pop(getRandomNumber(exercisePool))
    addQuestion(question.text,question.points)    
}

print()

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
    question.style.marginBottom = '1.8rem'
    question.style.gap = '5px'

    count++    
}

function getRandomNumber(pool){
    return Math.floor(Math.random() * pool.length)
}