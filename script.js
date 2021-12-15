const questionsPool = [
    
    {text:'¡Muchas gracias!', points:1, level: 0},
    {text:'La pelota es azul.', points:1, level: 0},
    {text:'La pelota es amarilla.', points:1, level: 0},
    {text:'La pelota es rosa.', points:1, level: 0},
    {text:'El libro es rojo.', points:1, level: 0},
    {text:'La ventana es grande.', points:1, level: 0},
    {text:'La casa es pequeña.', points:1, level: 0},
    {text:'Gracias por tu ayuda.', points:1, level: 0},
    {text:'Disculpa, ¿Sabés qué hora es?', points:1, level: 0},
    {text:'Siento llegar tarde.', points:1, level: 0},
    {text:'Perdón, no entiendo.', points:1, level: 0},
    {text:'Yo me llamo Pedro.', points:1, level: 0},
    {text:'Él se llama David.', points:1, level: 0},
    {text:'Ella se llama Cristina.', points:1, level: 0},
    {text:'El perro se llama Happy.', points:1, level: 0},
    {text:'El gato se llama Freddy.', points:1, level: 0},
    {text:'Tengo quince años.', points:1, level: 0},
    {text:'Tengo veintiseis años.', points:1, level: 0},
    {text:'Tengo catorce años.', points:1, level: 0},
    {text:'Tengo trece años.', points:1, level: 0},
    {text:'Tengo dieciseis años.', points:1, level: 0},
    {text:'Tengo dieciocho años.', points:1, level: 0},
    {text:'Tengo diecinueve años.', points:1, level: 0},
    {text:'Tengo diez años.', points:1, level: 0},
    {text:'Tengo treinta y un años.', points:1, level: 0},
    {text:'¿Cuántos años tienes?', points:1, level: 0},
    {text:'Él tiene un piano.', points:1, level: 0},
    {text:'Ella es una chica china.', points:1, level: 0},
    {text:'Ella es una chica española.', points:1, level: 0},
    {text:'Ella es una chica inglesa.', points:1, level: 0},
    {text:'El chico de Inglaterra es inglés.', points:1, level: 0},
    {text:'El chico de España es español.', points:1, level: 0},
    {text:'El chico de China es chino.', points:1, level: 0},
    {text:'El chico de China es chino.', points:1, level: 0},
    {text:'No entiendo.', points:1, level: 0},
    {text:'Soy estudiante.', points:1, level: 0},
    {text:'Mi teléfono es el uno uno dos.', points:1, level: 0},
    {text:'Vivo en Granada.', points:1, level: 0},
    {text:'Granada es una ciudad pequeña.', points:1, level: 0},
    {text:'Aquí la comida es deliciosa.', points:1, level: 2},
    {text:'Las flores son amarillas.', points:1, level: 2},
    {text:'El perro es muy simpático.', points:1, level: 2},
    {text:'La chica se llama Catalina.', points:1, level: 2},
    {text:'Mi padre vive en Barcelona.', points:1, level: 2},
    {text:'Mi hermano es bastante antipático.', points:1, level: 2},
    {text:'La hermana de Peter es muy rica.', points:1, level: 2},
    {text:'David no puede comer helado.', points:1, level: 2},
    {text:'A el gato le gusta comer chocolate.', points:1, level: 2},
    {text:'¿Qué haces en el banco?', points:1, level: 2},
    {text:'¿Qué come la tía?', points:1, level: 2},
    {text:'Nosotros hacemos los deberes.', points:1, level: 2},
    {text:'Vosotros pensais en el perro.', points:1, level: 2},
    {text:'La puerta es marrón', points:1, level: 0},
    {text:'Las mesas son naranjas.', points:1, level: 2},
    {text:'Está triste porque no puede comer', points:1, level: 2},
    {text:'Está contento porque tiene un piano.', points:1, level: 2},
    {text:'Mi casa tiene tres pisos.', points:1, level: 2},
    {text:'¿Puedes repetir?', points:1, level: 2},
    {text:'¿Puedes hablar más despacio por favor?', points:1, level: 2},
    {text:'Él va al hospital.', points:1, level: 1},
    {text:'Mi nueva casa está en una calle ancha.', points:1, level: 3},
    {text:'Ella parece una chica muy simpática.', points:1, level: 1},
    {text:'¿Qué significa eso?', points:1, level: 1},
    {text:'Es la una en punto.', points:1, level: 1},
    {text:'Es la una y media.', points:1, level: 1},
    {text:'Es la una y cuarto.', points:1, level: 1},
    {text:'Son las dos y cuarto.', points:1, level: 1},
    {text:'Son las cuatro y media.', points:1, level: 1},
    {text:'Son las cinco y media.', points:1, level: 1},
    {text:'Es la una menos cuarto.', points:1, level: 1},
    {text:'Son las dos menos cuarto.', points:1, level: 1},
    {text:'Son las tres menos cuarto.', points:1, level: 1},
    {text:'Son las cuatro menos cuarto.', points:1, level: 1},
    {text:'Son las cinco menos cuarto.', points:1, level: 1},
    {text:'Son las seis menos cuarto.', points:1, level: 1},
    {text:'Son las siete menos cuarto.', points:1, level: 1},
    {text:'Son las siete y cinco.', points:1, level: 1},
    {text:'Son las siete y diez', points:1, level: 1},
    {text:'Son las siete y veinte.', points:1, level: 1},
    {text:'Son las siete y veintitrés.', points:1, level: 1},
    {text:'Son las siete menos veinticinco.', points:1, level: 1},
    {text:'Son las ocho menos cuarto.', points:1, level: 1},
    {text:'Son las nueve menos cuarto.', points:1, level: 1},
    {text:'Son las diez menos cuarto.', points:1, level: 1},
    {text:'Son las once en punto.', points:1, level: 1},
    {text:'Son las doce en punto.', points:1, level: 1},
    {text:'Encantado de conocerte.', points:1, level: 1},
    {text:'¿A qué te dedicas?', points:1, level: 1},
    {text:'¿De dónde eres?', points:1, level: 1},
    {text:'¿Cómo se escribe eso?', points:1, level: 1},
    {text:'La calle tiene muchos árboles.', points:1, level: 3},
    {text:'¿Qué quieres decir?', points:1, level: 2},
    {text:'¿Qué te gusta hacer en tu tiempo libre?', points:1, level: 2},
    {text:'En mi tiempo libre juego al baloncesto.', points:1, level: 2},
    {text:'En mi tiempo libre leo.', points:1, level: 2},
    {text:'En mi tiempo libre hago deporte.', points:1, level: 2},
    {text:'En mi tiempo libre estudio inglés.', points:1, level: 2},
    {text:'Está triste porque no puede comer.', points:1, level: 3},
    {text:'Juan no puede comer más libros.', points:1, level: 3},
    {text:'Juan no puede ir a la heladería.', points:1, level: 3},
    {text:'David no puede jugar al fútbol.', points:1, level: 3},
    {text:'Para llegar a la comisaría tienes que ir recto', points:1, level: 3},
    {text:'Para llegar al banco tienes que llegar al parque', points:1, level: 3},
    {text:'Sevilla es una ciudad muy bonita', points:1, level: 3},
    {text:'Barcelona es una ciudad bastante interesante', points:1, level: 3},
    {text:'Valencia tiene setecientos noventa y un mil habitantes', points:1, level: 3},
]


const questionsDiv = document.getElementById('questions')
var count = 1

function createNewEvaluation(difficulty){

    questionsDiv.innerHTML = ''
    const allQuestions = questionsPool.filter(element => (element.level <= difficulty ))
    count = 1
    
    for(i=0;i<12;i++){
        const number = getRandomNumber(allQuestions)
        const question = allQuestions[number]
        addQuestion(question.text,question.points)
    
        allQuestions.splice(number,1)
    }
    
    print()

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

function getRandomNumber(pool){
    return Math.floor(Math.random() * pool.length)
}


function sumbitQuestionsToDB(){
    const form = document.createElement('form')
    form.action = path
    form.method = method

    
}