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

const questionsPool = [
    { text: '¡Muchas gracias!', points: 1, topics: [0, 1] },
    { text: 'Buenos días.', points: 1, topics: [0, 1] },
    { text: 'Buenas tardes.', points: 1, topics: [0, 1] },
    { text: 'Buenas noches.', points: 1, topics: [0, 1] },
    { text: '¿Qué es esto?', points: 1, topics: [0] },
    { text: 'Esto es una pizarra.', points: 1, topics: [0] },
    { text: 'Eso es un borrador.', points: 1, topics: [0] },
    { text: 'Esto es un libro de dinosaurios.', points: 1, topics: [0] },
    { text: '¿Tienes un bolígrafo azul?', points: 1, topics: [0] },
    { text: '¿Tienes un lápiz?', points: 1, topics: [0] },
    { text: 'El lapiz es pequeño.', points: 1, topics: [0] },
    { text: 'Eso es una puerta.', points: 1, topics: [0] },
    { text: 'La ventana está abierta.', points: 1, topics: [0] },
    { text: 'La ventana está cerrada.', points: 1, topics: [0] },
    { text: 'Eso es un rotulador negro.', points: 1, topics: [0] },
    { text: 'Eso es un diccionario de Español.', points: 1, topics: [0] },
    { text: 'La silla de madera está ahí', points: 1, topics: [0] },
    { text: 'El árbol es muy feo.', points: 1, topics: [0] },
    { text: 'La papelera es negra.', points: 1, topics: [0] },
    { text: 'No tengo carpeta.', points: 1, topics: [0] },
    { text: 'No tengo cuaderno.', points: 1, topics: [0] },
    { text: 'Mi cuaderno es de color naranja.', points: 1, topics: [0] },
    { text: 'Hola Juan, encantada de conocerte.', points: 1, topics: [0, 1] },
    { text: 'Hola Helena, encantado de conocerte.', points: 1, topics: [0, 1] },
    { text: 'La pelota es azul.', points: 1, topics: [0, 6] },
    { text: 'La pelota es amarilla.', points: 1, topics: [0, 6] },
    { text: 'La pelota es rosa.', points: 1, topics: [0, 6] },
    { text: 'El libro es rojo.', points: 1, topics: [0, 6] },
    { text: 'La ventana es grande.', points: 1, topics: [0, 5, 11, 12] },
    { text: 'La casa es pequeña.', points: 1, topics: [0, 5, 12] },
    { text: 'Gracias por tu ayuda.', points: 1, topics: [0, 1] },
    { text: 'Disculpa, ¿Sabés qué hora es?', points: 1, topics: [0, 1, 7] },
    { text: 'Siento llegar tarde.', points: 1, topics: [0, 1] },
    { text: 'Perdón, no entiendo.', points: 1, topics: [0, 1] },
    { text: 'Yo me llamo Pedro.', points: 1, topics: [0, 1, 2] },
    { text: 'Él se llama David.', points: 1, topics: [0, 1, 2] },
    { text: 'Ella se llama Cristina.', points: 1, topics: [0, 1, 2] },
    { text: 'El perro se llama Happy.', points: 1, topics: [0, 1, 2] },
    { text: 'El gato se llama Freddy.', points: 1, topics: [0, 1, 2] },
    { text: 'Tengo quince años.', points: 1, topics: [0] },
    { text: 'Tengo veintiseis años.', points: 1, topics: [0] },
    { text: 'Tengo catorce años.', points: 1, topics: [0] },
    { text: 'Tengo trece años.', points: 1, topics: [0] },
    { text: 'Tengo dieciseis años.', points: 1, topics: [0] },
    { text: 'Tengo dieciocho años.', points: 1, topics: [0] },
    { text: 'Tengo diecinueve años.', points: 1, topics: [0] },
    { text: 'Tengo diez años.', points: 1, topics: [0] },
    { text: 'Tengo treinta y un años.', points: 1, topics: [0] },
    { text: '¿Cuántos años tienes?', points: 1, topics: [0] },
    { text: 'Él tiene un piano.', points: 1, topics: [0] },
    { text: 'Ella es una chica china.', points: 1, topics: [0] },
    { text: 'Ella es una chica española.', points: 1, topics: [0] },
    { text: 'Ella es una chica inglesa.', points: 1, topics: [0] },
    { text: 'El chico de Inglaterra es inglés.', points: 1, topics: [0] },
    { text: 'El chico de España es español.', points: 1, topics: [0] },
    { text: 'El chico de China es chino.', points: 1, topics: [0] },
    { text: 'El chico de China es chino.', points: 1, topics: [0] },
    { text: 'No entiendo.', points: 1, topics: [0] },
    { text: 'Soy estudiante.', points: 1, topics: [0] },
    { text: 'Mi teléfono es el uno uno dos.', points: 1, topics: [0] },
    { text: 'Vivo en Granada.', points: 1, topics: [0] },
    { text: 'Granada es una ciudad pequeña.', points: 1, topics: [0] },
    { text: 'Aquí la comida es deliciosa.', points: 1, topics: [0] },
    { text: 'La profesora trabaja en la escuela.', points: 1, topics: [0] },
    { text: '¿A qué se dedica ella?', points: 1, topics: [0] },
    { text: 'La programadora es rica.', points: 1, topics: [0] },
    { text: 'El camarero es pobre.', points: 1, topics: [0] },
    { text: 'La cocinera es pobre.', points: 1, topics: [0] },
    { text: 'El peluquero es rico.', points: 1, topics: [0] },
    { text: 'La peluquera corta el pelo.', points: 1, topics: [0] },
    { text: 'El médica trabaja en el hospital.', points: 1, topics: [0] },
    { text: 'La fotógrafa hace fotos con su cámara.', points: 1, topics: [0] },
    { text: 'La policía trabaja en la comisaría.', points: 1, topics: [0] },
    { text: 'La bombera trabaja en la estación de bomberos.', points: 1, topics: [0] },
    { text: 'La cocinera trabaja en la cocina.', points: 1, topics: [0] },
    { text: 'La camarera trabaja en el bar o en el restaurante.', points: 1, topics: [0] },
    { text: 'Mi cumpleaños es el cinco de enero.', points: 1, topics: [0] },
    { text: 'Febrero es mi mes favorito.', points: 1, topics: [0] },
    { text: 'Hoy es veinte de marzo.', points: 1, topics: [0] },
    { text: 'Hoy es trece de abril.', points: 1, topics: [0] },
    { text: 'Hoy es veinticuatro de mayo.', points: 1, topics: [0] },
    { text: 'Hoy es siete de junio.', points: 1, topics: [0] },
    { text: 'Hoy es treinta de julio.', points: 1, topics: [0] },
    { text: 'Hoy es tres de agosto.', points: 1, topics: [0] },
    { text: 'Hoy es cuatro de septiembre.', points: 1, topics: [0] },
    { text: 'Hoy es diez de octubre.', points: 1, topics: [0] },
    { text: 'Hoy es diez de noviembre.', points: 1, topics: [0] },
    { text: 'Hoy es diez de diciembre.', points: 1, topics: [0] },
    { text: 'Mil novecientos noventa y cinco.', points: 1, topics: [0] },
    { text: 'Dos mil dieciseis.', points: 1, topics: [0] },
    { text: 'Mil novecientos ochenta y siete.', points: 1, topics: [0] },
    { text: 'Mi abuela es muy simpática.', points: 1, topics: [0] },
    { text: 'Mi abuelo es alto y moreno.', points: 1, topics: [0] },
    { text: 'Mi tio es delgado y castaño.', points: 1, topics: [0] },
    { text: 'Mi tia es delgada y castaña.', points: 1, topics: [0] },
    { text: 'Tu hija es muy guapa y simpática.', points: 1, topics: [0] },
    { text: 'Tu hijo es muy guapo y simpático.', points: 1, topics: [0] },
    { text: 'Su hermano es muy feo y antipático.', points: 1, topics: [0] },
    { text: 'Su hermana es muy fea y antipática.', points: 1, topics: [0] },
    { text: 'Mis primos son muy bajos y antipáticos.', points: 1, topics: [0] },
    { text: 'Tus primos son muy bajos y antipáticos.', points: 1, topics: [0] },
    { text: 'Sus primos son muy bajos y antipáticos.', points: 1, topics: [0] },
    { text: 'Ese gato está muy gordo.', points: 1, topics: [0] },
    { text: 'El perro lleva gafas.', points: 1, topics: [0] },
    { text: 'Dos mil treinta y cinco.', points: 1, topics: [0] },
    { text: 'Tres mil treinta y cinco.', points: 1, topics: [0] },
    { text: 'Las flores son amarillas.', points: 1, topics: [0] },
    { text: 'El perro es muy simpático.', points: 1, topics: [0] },
    { text: 'La chica se llama Catalina.', points: 1, topics: [0] },
    { text: 'Mi padre vive en Barcelona.', points: 1, topics: [0] },
    { text: 'Mi hermano es bastante antipático.', points: 1, topics: [0] },
    { text: 'La hermana de Peter es muy rica.', points: 1, topics: [0] },
    { text: 'David no puede comer helado.', points: 1, topics: [0] },
    { text: 'El profesor es calvo.', points: 1, topics: [0] },
    { text: 'A el gato le gusta comer chocolate.', points: 1, topics: [0] },
    { text: '¿Qué haces en el banco?', points: 1, topics: [0] },
    { text: '¿Qué come la tía?', points: 1, topics: [0] },
    { text: 'Nosotros hacemos los deberes.', points: 1, topics: [0] },
    { text: 'Vosotros pensais en el perro.', points: 1, topics: [0] },
    { text: 'La puerta es marrón', points: 1, topics: [0] },
    { text: 'Las mesas son naranjas.', points: 1, topics: [0] },
    { text: 'Está triste porque no puede comer.', points: 1, topics: [0] },
    { text: 'Está contento porque tiene un piano.', points: 1, topics: [0] },
    { text: 'Mi casa tiene tres pisos.', points: 1, topics: [0] },
    { text: '¿Puedes repetir?', points: 1, topics: [0] },
    { text: '¿Puedes hablar más despacio por favor?', points: 1, topics: [0] },
    { text: 'Él va al hospital.', points: 1, topics: [0] },
    { text: 'Mi nueva casa está en una calle ancha.', points: 1, topics: [0] },
    { text: 'Ella parece una chica muy simpática.', points: 1, topics: [0] },
    { text: '¿Qué significa eso?', points: 1, topics: [0] },
    { text: 'Es la una en punto.', points: 1, topics: [0] },
    { text: 'Es la una y media.', points: 1, topics: [0] },
    { text: 'Es la una y cuarto.', points: 1, topics: [0] },
    { text: 'Son las dos y cuarto.', points: 1, topics: [0] },
    { text: 'Son las cuatro y media.', points: 1, topics: [0] },
    { text: 'Son las cinco y media.', points: 1, topics: [0] },
    { text: 'Es la una menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las dos menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las tres menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las cuatro menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las cinco menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las seis menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las siete menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las siete y cinco.', points: 1, topics: [0] },
    { text: 'Son las siete y diez.', points: 1, topics: [0] },
    { text: 'Son las siete y veinte.', points: 1, topics: [0] },
    { text: 'Son las siete y veintitrés.', points: 1, topics: [0] },
    { text: 'Son las siete menos veinticinco.', points: 1, topics: [0] },
    { text: 'Son las ocho menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las nueve menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las diez menos cuarto.', points: 1, topics: [0] },
    { text: 'Son las once en punto.', points: 1, topics: [0] },
    { text: 'Son las doce en punto.', points: 1, topics: [0] },
    { text: 'Encantado de conocerte.', points: 1, topics: [0] },
    { text: '¿A qué te dedicas?', points: 1, topics: [0] },
    { text: '¿De dónde eres?', points: 1, topics: [0] },
    { text: '¿Cómo se escribe eso?', points: 1, topics: [0] },
    { text: 'La calle tiene muchos árboles.', points: 1, topics: [0] },
    { text: 'Los árboles tienen las hojas verdes.', points: 1, topics: [0] },
    { text: '¿Qué quieres decir?', points: 1, topics: [0] },
    { text: '¿Qué te gusta hacer en tu tiempo libre?', points: 1, topics: [0] },
    { text: 'En mi tiempo libre juego al baloncesto.', points: 1, topics: [0] },
    { text: 'En mi tiempo libre leo.', points: 1, topics: [0] },
    { text: 'En mi tiempo libre hago deporte.', points: 1, topics: [0] },
    { text: 'En mi tiempo libre estudio inglés.', points: 1, topics: [0] },
    { text: 'Está triste porque no puede comer.', points: 1, topics: [0] },
    { text: 'Juan no puede comer más libros.', points: 1, topics: [0] },
    { text: 'Juan no puede ir a la heladería.', points: 1, topics: [0] },
    { text: 'David no puede jugar al fútbol.', points: 1, topics: [0] },
    { text: 'Para llegar a la comisaría tienes que ir recto.', points: 1, topics: [0] },
    { text: 'Para llegar al banco tienes que llegar al parque.', points: 1, topics: [0] },
    { text: 'Sevilla es una ciudad muy bonita.', points: 1, topics: [0] },
    { text: 'Barcelona es una ciudad bastante interesante.', points: 1, topics: [0] },
    { text: 'Valencia tiene setecientos noventa y un mil habitantes.', points: 1, topics: [0] },
    { text: 'Levántate de la silla.', points: 1, topics: [0] },
    { text: 'Siéntate en el suelo.', points: 1, topics: [0] },
    { text: 'Mira a el techo.', points: 1, topics: [0] },
    { text: 'Coge el teléfono móvil.', points: 1, topics: [0] },
    { text: 'Escribe en la pizarra.', points: 1, topics: [0] },
    { text: 'Camina hacia la escuela.', points: 1, topics: [0] },
    { text: 'Toca la mesa que está al lado de la pared.', points: 1, topics: [0] },
    { text: 'No toques la mesa.', points: 1, topics: [0] },
    { text: 'El perro salta tres veces.', points: 1, topics: [0] },
    { text: 'Mira a la pizarra.', points: 1, topics: [0] },
    { text: 'La persona salta una vez.', points: 1, topics: [0] },
    { text: 'Las personas aplauden dos veces.', points: 1, topics: [0] },
    { text: 'El hombre da cuatro pasos hacia delante.', points: 1, topics: [0] },
    { text: 'El niño pulsa el botón rojo.', points: 1, topics: [0] },
    { text: 'La niña pulsa el botón verde.', points: 1, topics: [0] },
    { text: 'El chico está aburrido.', points: 1, topics: [0] },
    { text: 'Cuenta hasta cien.', points: 1, topics: [0] },
    { text: 'Yo no soy una chica rica.', points: 1, topics: [0] },
    { text: 'Tú eres un chico muy pobre.', points: 1, topics: [0] },
    { text: '¿Quién es rico?', points: 1, topics: [0] },
    { text: '¿Ella es una chica guapa o fea?', points: 1, topics: [0] },
    { text: '¿Ella es una chica simpática o antipática?', points: 1, topics: [0] },
    { text: '¿Cuantas casas hay en está ciudad?', points: 1, topics: [0] },
    { text: 'No me gusta hacer los deberes.', points: 1, topics: [0] },
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
    const questions = Array.from(questionsPool)

    questionsDiv.innerHTML = ''
    count = 1

    for (i = 0; i < numberOfQuestions; i++) {
        const number = getRandomNumber(questions)
        const question = questions[number]

        try{
            question.text.split(' ').forEach(word => {
                console.log(word)
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

var counter = 0
var stopLoop = false
function getRandomNumber(pool) {
    let number = Math.floor(Math.random() * (pool.length - 1))

    return number
}

