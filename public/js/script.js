const topics = [
    'Any Topic', // 0
    'Basic expresions', // 1
    'Personal information', // 2
    'Physical description', // 3
    'Family', // 4
    'House objects', // 5
    'colours', // 6
    'time.', // 7
    'months', // 8
    'Physical description', // 9
    'Imperative', // 10
    'Classroom Objects', // 11
    'Adjectives for Objects' //12
]


const questionsDiv = document.getElementById('questions')
var count = 1
let testWords

function createAndPrint() {
    createNewEvaluation()
    printTest()
}

function createNewEvaluation() {
    const numberOfQuestions = document.getElementById('numberofquestions').value
    const level = document.getElementById('level').value
    const title = document.getElementById('title')
    title.textContent = `Regular Check: Level ${level}`

    var questions = Array.from(questionsPool.filter(question => question.level <= level))
   

    questionsDiv.innerHTML = ''
    count = 1

    for (i = 0; i < numberOfQuestions; i++) {
        const number = getRandomNumber(questions)
        const question = questions[number]

        delQuestionsWithWordsAlreadyInTest(question)

        addQuestion(question.text, question.points)

        questions.splice(number, 1)
    }
}

function addQuestion(textQuestion, pointsQuestion) {
    const question = document.createElement('div')
    question.setAttribute('id', `question${count}`)
    question.classList.add('question')

    const points = document.createElement('span')
    points.setAttribute('id', `points${count}`)
    points.classList.add('points')

    const pointsDivLine = document.createElement('div')
    pointsDivLine.textContent = '___'
    const pointsDivPoints = document.createElement('div')
    pointsDivPoints.textContent = pointsQuestion
    pointsDivPoints.style.paddingLeft = '0.5rem'

    points.appendChild(pointsDivLine)
    points.appendChild(pointsDivPoints)

    const number = document.createElement('div')
    number.setAttribute('id', `number${count}`)
    number.classList.add('number')
    number.style.paddingInline = '0.5rem'
    number.textContent = `${count}.`

    const text = document.createElement('div')
    text.setAttribute('id', `text${count}`)
    text.setAttribute('contenteditable',true)
    text.classList.add('text')
    text.classList.add('clickable')
    text.textContent = textQuestion

    //  question.appendChild(points)
    question.appendChild(number)
    question.appendChild(text)

    questionsDiv.appendChild(question)
    question.style.display = 'flex'
    question.style.marginTop = '0.5rem'
    question.style.marginBottom = '2rem'
    question.style.gap = '5px'

    count++
}

var counter = 0
var stopLoop = false
function getRandomNumber(pool) {
    let number = Math.floor(Math.random() * (pool.length - 1))

    return number
}

function delQuestionsWithWordsAlreadyInTest(question){
    try{
        question.text.split(' ').forEach(word => {
            for(let index = 0; index < questions.length; index++){
                const q = questions[index].text
                let deleteQuestion = false
                q.split(' ').forEach(questionWord => {
                    if (questionWord == word) {
                        // console.log(questionWord, word)
                        deleteQuestion = true
                    }
                })

                if(deleteQuestion) {
                    questions.splice(index, 1)
                } 
            }
        })
    }
    catch{
        alert(`Only ${count - 1} questions to show`)
    }
}