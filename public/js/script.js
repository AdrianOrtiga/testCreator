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
    const level = getLevel()
    const title = document.getElementById('title')
    title.textContent = `Regular Check: Level ${level}`

    let questionsInTest = []
    let wordsInTest = []
    var questions = Array.from(questionsPool.filter(question => question.level <= level))


    questionsDiv.innerHTML = ''
    count = 1

    let fuse = 0
    while (questionsInTest.length < numberOfQuestions) {
        const number = getRandomNumber(questions)
        const question = questions[number]

        delQuestionsWithWordsAlreadyInTest(question, questions)

        if (question != undefined) {
            if (question.text == '') continue

            question.text.split(' ').forEach(word => wordsInTest.push(word))

            addQuestion(question.text, question.points)
            questionsInTest.push(question.text)

            questions.splice(number, 1)
        }
        else {
            questions = Array.from(questionsPool.filter(question => question.level <= level + 1))
        }

        fuse++
        if (fuse > 1000) break
    }

    console.log(wordsInTest)
    wordsInTest = [...new Set(wordsInTest)]
    console.log(wordsInTest)
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
    text.setAttribute('contenteditable', true)
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

function delQuestionsWithWordsAlreadyInTest(question, questions) {
    let currentQuestion = question != undefined ? question.text : ''
    currentQuestion = currentQuestion.replace('.', '')
    currentQuestion = currentQuestion.replace(',', '')
    currentQuestion = currentQuestion.replace('?', '')
    currentQuestion = currentQuestion.replace('¿', '')
    currentQuestion = currentQuestion.replace('!', '')
    currentQuestion = currentQuestion.replace('¡', '')
    currentQuestion = currentQuestion.toLowerCase()

    try {
        currentQuestion.split(' ').forEach(word => {
            for (let index = 0; index < questions.length; index++) {
                let q = questions[index].text
                q = q.replace('.', '')
                q = q.replace(',', '')
                q = q.replace('?', '')
                q = q.replace('¿', '')
                q = q.replace('!', '')
                q = q.replace('¡', '')
                q = q.toLowerCase()

                let deleteQuestion = false
                q.split(' ').forEach(questionWord => {
                    if (questionWord == word) {
                        deleteQuestion = true
                    }
                })

                if (deleteQuestion) {
                    questions.splice(index, 1)
                }
            }
        })
    }
    catch {
        alert(`Only ${count - 1} questions to show`)
    }
}

function countDifferentWords(level = Infinity) {
    let words = []

    let questions = questionsPool.filter(question => question.level <= level)

    for (let index = 0; index < questions.length; index++) {
        let q = questions[index].text
        q = q.replace('.', '')
        q = q.replace(',', '')
        q = q.replace('?', '')
        q = q.replace('¿', '')
        q = q.replace('!', '')
        q = q.replace('¡', '')
        q = q.toLowerCase()

        q.split(' ').forEach(questionWord => {
            words.push(questionWord)
        })
    }
    words = [...new Set(words)]

    return words
}

function getLevel() {

    const studentSelected = document.getElementById('student').value
    const testName = document.getElementById('testName')
    const testClass = document.getElementById('testClass')

    if (studentSelected != '') {
        let student = students.find(student => student.fullName == studentSelected)

        testName.textContent = `Name: ${student.fullName}`
        testClass.textContent = `Class: ${student.HR}`

        return parseInt(student.Level)
    }

    testName.textContent = `Name: `
    testClass.textContent = `Class: `


    let level = document.getElementById('level').value
    if (level > MAX_LEVEL) return MAX_LEVEL

    return level
}