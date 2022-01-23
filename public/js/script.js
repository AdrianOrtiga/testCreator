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
    { text: 'Hola, ¿Cómo estás?', level: 1, topics: [0, 1] },
    { text: '¡Muchas gracias!', level: 1,topics: [0, 1] },
    { text: 'Buenos días.', level: 1, topics: [0, 1] },
    { text: 'Buenas tardes.', level: 1, topics: [0, 1] },
    { text: 'Buenas noches.', level: 1, topics: [0, 1] },
    { text: '¿Cómo te llamas?', level: 1, topics: [0, 1] },
    { text: '¿Cuál es tu nombre?', level: 1, topics: [0, 1] },
    { text: '¿Cuál es tu correo electrónico?', level: 1, topics: [0, 1] },
    { text: '¿Cuál es tu número de telefono?', level: 1, topics: [0, 1] },
    { text: '¿Cuantos años tienes?', level: 1, topics: [0, 1] },
    { text: 'Tengo quince años.', level: 1, topics: [0] },
    { text: '¿Qué es esto?', level: 1, topics: [0] },
    { text: '¿De dónde eres?', level: 1, topics: [0] },
    { text: '¿Cuál es tu dirección?', level: 1, topics: [0] },
    { text: '¿Dónde vives?', level: 1, topics: [0] },
    { text: 'Hola Juan, encantada de conocerte.', level: 1, topics: [0, 1] },
    { text: 'Hola Helena, encantado de conocerte.', level: 1, topics: [0, 1] },
    { text: 'Esto es una pizarra.', level: 1, topics: [0] },
    { text: 'Eso es un borrador.', level: 1, topics: [0] },
    { text: 'Esto es un libro de dinosaurios.', level: 1, topics: [0] },
    { text: '¿Tienes un bolígrafo azul?', level: 1, topics: [0] },
    { text: '¿Tienes un lápiz?', level: 1, topics: [0] },
    { text: 'El lápiz es pequeño.', level: 1, topics: [0] },
    { text: 'Eso es una puerta.', level: 1, topics: [0] },
    { text: 'La ventana está abierta.', level: 1, topics: [0] },
    { text: 'La ventana está cerrada.', level: 1, topics: [0] },
    { text: 'Eso es un rotulador negro.', level: 2, topics: [0] },
    { text: 'Eso es un diccionario de Español.', level: 2, topics: [0] },
    { text: 'La silla de madera está ahí', level: 2, topics: [0] },
    { text: 'El árbol es muy feo.', level: 2, topics: [0] },
    { text: 'La papelera es negra.', level: 2, topics: [0] },
    { text: 'No tengo carpeta.', level: 2, topics: [0] },
    { text: 'No tengo cuaderno.', level: 2, topics: [0] },
    { text: 'Mi cuaderno es de color naranja.', level: 2, topics: [0] },
    { text: 'La pelota es azul.', level: 2, topics: [0, 6] },
    { text: 'La pelota es amarilla.', level: 2, topics: [0, 6] },
    { text: 'La pelota es rosa.', level: 2, topics: [0, 6] },
    { text: 'El libro es rojo.', level: 2, topics: [0, 6] },
    { text: 'La ventana es grande.', level: 2, topics: [0, 5, 11, 12] },
    { text: 'La casa es pequeña.', level: 2, topics: [0, 5, 12] },
    { text: 'Gracias por tu ayuda.', level: 2, topics: [0, 1] },
    { text: 'Disculpa, ¿Sabés qué hora es?', level: 2, topics: [0, 1, 7] },
    { text: 'Siento llegar tarde.', level: 2, topics: [0, 1] },
    { text: 'Perdón, no entiendo.', level: 2, topics: [0, 1] },
    { text: 'Yo me llamo Pedro.', level: 2, topics: [0, 1, 2] },
    { text: 'Él se llama David.', level: 2, topics: [0, 1, 2] },
    { text: 'Ella se llama Cristina.', level: 2, topics: [0, 1, 2] },
    { text: 'El perro se llama Happy.', level: 2, topics: [0, 1, 2] },
    { text: 'El gato se llama Freddy.', level: 2, topics: [0, 1, 2] },
    { text: 'Tengo veintiseis años.', level: 2, topics: [0] },
    { text: 'Tengo catorce años.', level: 2, topics: [0] },
    { text: 'Tengo trece años.', level: 3, topics: [0] },
    { text: 'Tengo dieciseis años.', level: 3, topics: [0] },
    { text: 'Tengo dieciocho años.', level: 3, topics: [0] },
    { text: 'Tengo diecinueve años.', level: 3, topics: [0] },
    { text: 'Tengo diez años.', level: 3, topics: [0] },
    { text: 'Tengo treinta y un años.', level: 3, topics: [0] },
    { text: '¿Cuántos años tienes?', level: 3, topics: [0] },
    { text: 'Él tiene un piano.', level: 3, topics: [0] },
    { text: 'Ella es una chica china.', level: 3, topics: [0] },
    { text: 'Ella es una chica española.', level: 3, topics: [0] },
    { text: 'Ella es una chica inglesa.', level: 3, topics: [0] },
    { text: 'El chico de Inglaterra es inglés.', level: 3, topics: [0] },
    { text: 'El chico de España es español.', level: 3, topics: [0] },
    { text: 'El chico de China es chino.', level: 3, topics: [0] },
    { text: 'El chico de China es chino.', level: 3, topics: [0] },
    { text: 'No entiendo.', level: 3, topics: [0] },
    { text: 'Soy estudiante.', level: 3, topics: [0] },
    { text: 'Mi teléfono es el uno uno dos.', level: 3, topics: [0] },
    { text: 'Vivo en Granada.', level: 3, topics: [0] },
    { text: 'Pedro tiene los ojos negros.', level: 3, topics: [0] },
    { text: 'Marta tiene los ojos azules.', level: 3, topics: [0] },
    { text: 'Marta tiene el pelo largo.', level: 3, topics: [0] },
    { text: 'Maria tiene el pelo corto.', level: 3, topics: [0] },
    { text: 'Jesús tiene el pelo rizado.', level: 3, topics: [0] },
    { text: 'Jesús tiene el pelo rubio.', level: 3, topics: [0] },
    { text: 'Penelope tiene los ojos verdes.', level: 4, topics: [0] },
    { text: 'Juan tiene los ojos marrones.', level: 4, topics: [0] },
    { text: 'Granada es una ciudad pequeña.', level: 4, topics: [0] },
    { text: 'Aquí la comida es deliciosa.', level: 4, topics: [0] },
    { text: 'La profesora trabaja en la escuela.', level: 4, topics: [0] },
    { text: '¿A qué se dedica ella?', level: 4, topics: [0] },
    { text: 'La programadora es rica.', level: 4, topics: [0] },
    { text: 'El camarero es pobre.', level: 4, topics: [0] },
    { text: 'La cocinera es pobre.', level: 4, topics: [0] },
    { text: 'El peluquero es rico.', level: 4, topics: [0] },
    { text: 'La peluquera corta el pelo.', level: 4, topics: [0] },
    { text: 'El médico trabaja en el hospital.', level: 4, topics: [0] },
    { text: 'La fotógrafa hace fotos con su cámara.', level: 4, topics: [0] },
    { text: 'La policía trabaja en la comisaría.', level: 4, topics: [0] },
    { text: 'La bombera trabaja en la estación de bomberos.', level: 4, topics: [0] },
    { text: 'La cocinera trabaja en la cocina.', level: 4, topics: [0] },
    { text: 'La camarera trabaja en el bar o en el restaurante.', level: 4, topics: [0] },
    { text: 'Mi cumpleaños es el cinco de enero.', level: 4, topics: [0] },
    { text: 'Febrero es mi mes favorito.', level: 4, topics: [0] },
    { text: 'Hoy es veinte de marzo.', level: 4, topics: [0] },
    { text: 'Hoy es trece de abril.', level: 4, topics: [0] },
    { text: 'Hoy es veinticuatro de mayo.', level: 4, topics: [0] },
    { text: 'Hoy es siete de junio.', level: 4, topics: [0] },
    { text: 'Hoy es treinta de julio.', level: 4, topics: [0] },
    { text: 'Hoy es tres de agosto.', level: 4, topics: [0] },
    { text: 'Hoy es cuatro de septiembre.', level: 5, topics: [0] },
    { text: 'Hoy es diez de octubre.', level: 5, topics: [0] },
    { text: 'Hoy es diez de noviembre.', level: 5, topics: [0] },
    { text: 'Hoy es diez de diciembre.', level: 5, topics: [0] },
    { text: 'Tengo mil novecientos noventa y cinco neveras.', level: 5, topics: [0] },
    { text: 'Tienes dos mil dieciseis libros.', level: 5, topics: [0] },
    { text: 'Tiene mil novecientos ochenta y siete mesas.', level: 5, topics: [0] },
    { text: 'Tenemos ciento una silla.', level: 5, topics: [0] },
    { text: 'Teneis dos cientos veintitres perros.', level: 5, topics: [0] },
    { text: 'Tienen tres cientos veintitres gatos.', level: 5, topics: [0] },
    { text: 'Mi abuela es muy simpática.', level: 5, topics: [0] },
    { text: 'Mi abuelo es alto y moreno.', level: 5, topics: [0] },
    { text: 'Mi tio es delgado y castaño.', level: 5, topics: [0] },
    { text: 'Mi tia es delgada y castaña.', level: 5, topics: [0] },
    { text: 'Tu hija es muy guapa y simpática.', level: 5, topics: [0] },
    { text: 'Tu hijo es muy guapo y simpático.', level: 5, topics: [0] },
    { text: 'Su hermano es muy feo y antipático.', level: 5, topics: [0] },
    { text: 'Su hermana es muy fea y antipática.', level: 5, topics: [0] },
    { text: 'Mis primos son muy bajos y antipáticos.', level: 5, topics: [0] },
    { text: 'Tus primos son muy bajos y antipáticos.', level: 5, topics: [0] },
    { text: 'Sus primos son muy bajos y antipáticos.', level: 5, topics: [0] },
    { text: 'Ese gato está muy gordo.', level: 5, topics: [0] },
    { text: 'El perro lleva gafas.', level: 5, topics: [0] },
    { text: 'Tengo dos mil treinta y cinco amigos.', level: 5, topics: [0] },
    { text: 'Hay tres mil treinta y cinco perros.', level: 6, topics: [0] },
    { text: 'Las flores son amarillas.', level: 6, topics: [0] },
    { text: 'El perro es muy simpático.', level: 6, topics: [0] },
    { text: 'La chica se llama Catalina.', level: 6, topics: [0] },
    { text: 'Mi padre vive en Barcelona.', level: 6, topics: [0] },
    { text: 'Tu madre vive en Valencia.', level: 6, topics: [0] },
    { text: 'Su tío hace deporte los fines de semana.', level: 6, topics: [0] },
    { text: 'Nuestro primo juega al tenis.', level: 6, topics: [0] },
    { text: 'Nuestra prima sabe jugar al tenis.', level: 6, topics: [0] },
    { text: 'Mi hermano es bastante antipático.', level: 6, topics: [0] },
    { text: 'Tu hermana tiene el pelo liso.', level: 6, topics: [0] },
    { text: 'Su hijo lleva una camiseta verde.', level: 6, topics: [0] },
    { text: 'Mis padres tienen el pelo canoso.', level: 6, topics: [0] },
    { text: 'Tus tíos tienen la nariz grande.', level: 6, topics: [0] },
    { text: 'Sus primos son pelirojos.', level: 6, topics: [0] },
    { text: 'Allen lleva gafas.', level: 6, topics: [0] },
    { text: 'Soy alto y joven.', level: 6, topics: [0] },
    { text: 'Tú eres estupido y viejo.', level: 6, topics: [0] },
    { text: 'Tengo el pelo corto y moreno.', level: 6, topics: [0] },
    { text: 'Somos un poco gordos.', level: 6, topics: [0] },
    { text: 'Yo soy policia y trabajo en la comisaria.', level: 6, topics: [0] },
    { text: 'Yo soy policia y llevo pantalones azules.', level: 6, topics: [0] },
    { text: 'Soy morena tengo el pelo liso y largo.', level: 6, topics: [0] },
    { text: 'La hermana de Peter es muy rica.', level: 6, topics: [0] },
    { text: 'David no puede comer helado.', level: 6, topics: [0] },
    { text: 'El profesor es calvo.', level: 7, topics: [0] },
    { text: 'A el gato le gusta comer chocolate.', level: 7, topics: [0] },
    { text: '¿Qué haces en el banco?', level: 7, topics: [0] },
    { text: '¿Qué come la tía?', level: 7, topics: [0] },
    { text: 'Nosotros hacemos los deberes.', level: 7, topics: [0] },
    { text: 'Vosotros pensais en el perro.', level: 7, topics: [0] },
    { text: 'La puerta es marrón', level: 7, topics: [0] },
    { text: 'Las mesas son naranjas.', level: 7, topics: [0] },
    { text: 'Está triste porque no puede comer.', level: 7, topics: [0] },
    { text: 'Está contento porque tiene un piano.', level: 7, topics: [0] },
    { text: 'Mi casa tiene tres pisos.', level: 7, topics: [0] },
    { text: '¿Puedes repetir?', level: 7, topics: [0] },
    { text: '¿Puedes hablar más despacio por favor?', level: 7, topics: [0] },
    { text: 'Él va al hospital.', level: 7, topics: [0] },
    { text: 'Mi nueva casa está en una calle ancha.', level: 7, topics: [0] },
    { text: 'Ella parece una chica muy simpática.', level: 7, topics: [0] },
    { text: '¿Qué significa eso?', level: 7, topics: [0] },
    { text: 'Es la una en punto.', level: 7, topics: [0] },
    { text: 'Es la una y media.', level: 7, topics: [0] },
    { text: 'Es la una y cuarto.', level: 7, topics: [0] },
    { text: 'Son las dos y cuarto.', level: 7, topics: [0] },
    { text: 'Son las cuatro y media.', level: 7, topics: [0] },
    { text: 'Son las cinco y media.', level: 7, topics: [0] },
    { text: 'Es la una menos cuarto.', level: 7, topics: [0] },
    { text: 'Son las dos menos cuarto.', level: 7, topics: [0] },
    { text: 'Son las tres menos cuarto.', level: 8, topics: [0] },
    { text: 'Son las cuatro menos cuarto.', level: 8, topics: [0] },
    { text: 'Son las cinco menos cuarto.', level: 8, topics: [0] },
    { text: 'Son las seis menos cuarto.', level: 8, topics: [0] },
    { text: 'Son las siete menos cuarto.', level: 8, topics: [0] },
    { text: 'Son las siete y cinco.', level: 8, topics: [0] },
    { text: 'Son las siete y diez.', level: 8, topics: [0] },
    { text: 'Son las siete y veinte.', level: 8, topics: [0] },
    { text: 'Son las siete y veintitrés.', level: 8, topics: [0] },
    { text: 'Son las siete menos veinticinco.', level: 8, topics: [0] },
    { text: 'Son las ocho menos cuarto.', level: 8, topics: [0] },
    { text: 'Son las nueve menos cuarto.', level: 8, topics: [0] },
    { text: 'Son las diez menos cuarto.', level: 8, topics: [0] },
    { text: 'Son las once en punto.', level: 8, topics: [0] },
    { text: 'Son las doce en punto.', level: 8, topics: [0] },
    { text: 'Encantado de conocerte.', level: 8, topics: [0] },
    { text: '¿A qué te dedicas?', level: 8, topics: [0] },
    { text: '¿De dónde eres?', level: 8, topics: [0] },
    { text: '¿Dónde vives?', level: 8, topics: [0] },
    { text: '¿Cómo se escribe eso?', level: 8, topics: [0] },
    { text: 'La calle tiene muchos árboles.', level: 8, topics: [0] },
    { text: 'Los árboles tienen las hojas verdes.', level: 8, topics: [0] },
    { text: '¿Qué quieres decir?', level: 8, topics: [0] },
    { text: '¿Qué te gusta hacer en tu tiempo libre?', level: 8, topics: [0] },
    { text: 'En mi tiempo libre juego al baloncesto.', level: 8, topics: [0] },
    { text: 'En mi tiempo libre leo.', level: 9, topics: [0] },
    { text: 'En mi tiempo libre hago deporte.', level: 9, topics: [0] },
    { text: 'En mi tiempo libre estudio inglés.', level: 9, topics: [0] },
    { text: 'Está triste porque no puede comer.', level: 9, topics: [0] },
    { text: 'Juan no puede comer más libros.', level: 9, topics: [0] },
    { text: 'Juan no puede ir a la heladería.', level: 9, topics: [0] },
    { text: 'David no puede jugar al fútbol.', level: 9, topics: [0] },
    { text: 'Para llegar a la comisaría tienes que ir recto.', level: 9, topics: [0] },
    { text: 'Para llegar al banco tienes que llegar al parque.', level: 9, topics: [0] },
    { text: 'Sevilla es una ciudad muy bonita.', level: 9, topics: [0] },
    { text: 'Barcelona es una ciudad bastante interesante.', level: 9, topics: [0] },
    { text: 'Valencia tiene setecientos noventa y un mil habitantes.', level: 9, topics: [0] },
    { text: 'Valencia tiene muchos turistas en verano y primavera.', level: 9, topics: [0] },
    { text: 'En verano hace mucho calor.', level: 9, topics: [0] },
    { text: 'En primavera hace buen tiempo.', level: 9, topics: [0] },
    { text: 'En otoño hace un poco de frio.', level: 9, topics: [0] },
    { text: 'En invierno hace mucho frio.', level: 9, topics: [0] },
    { text: 'Helena tiene bastante calor.', level: 9, topics: [0] },
    { text: 'Yo tengo bastante frio.', level: 9, topics: [0] },
    { text: '¿Tienes frio?.', level: 9, topics: [0] },
    { text: '¿Tienes calor?.', level: 9, topics: [0] },
    { text: 'Madrid es una ciudad de España.', level: 9, topics: [0] },
    { text: 'Levántate de la silla.', level: 9, topics: [0] },
    { text: 'Siéntate en el suelo.', level: 9, topics: [0] },
    { text: 'Mira a el techo.', level: 9, topics: [0] },
    { text: 'Coge el teléfono móvil.', level: 10, topics: [0] },
    { text: 'Escribe en la pizarra.', level: 10, topics: [0] },
    { text: 'Camina hacia la escuela.', level: 10, topics: [0] },
    { text: 'Toca la mesa que está al lado de la pared.', level: 10, topics: [0] },
    { text: 'No toques la mesa.', level: 10, topics: [0] },
    { text: 'El perro salta tres veces.', level: 10, topics: [0] },
    { text: 'Mira a la pizarra.', level: 10, topics: [0] },
    { text: 'La persona salta una vez.', level: 10, topics: [0] },
    { text: 'Las personas aplauden dos veces.', level: 10, topics: [0] },
    { text: 'El hombre da cuatro pasos hacia delante.', level: 10, topics: [0] },
    { text: 'El niño pulsa el botón rojo.', level: 10, topics: [0] },
    { text: 'La niña pulsa el botón verde.', level: 10, topics: [0] },
    { text: 'El chico está aburrido.', level: 10, topics: [0] },
    { text: 'Cuenta hasta cien.', level: 10, topics: [0] },
    { text: 'Yo no soy una chica rica.', level: 10, topics: [0] },
    { text: 'Tú eres un chico muy pobre.', level: 10, topics: [0] },
    { text: '¿Quién es rico?', level: 10, topics: [0] },
    { text: 'Ella es alta, joven, guapa, delgada y morena.', level: 10, topics: [0] },
    { text: 'Él es alto, joven, feo, delgado y moreno.', level: 10, topics: [0] },
    { text: '¿Ella es una chica guapa o fea?', level: 10, topics: [0] },
    { text: '¿Ella es una chica simpática o antipática?', level: 10, topics: [0] },
    { text: '¿Cuantas casas hay en está ciudad?', level: 10, topics: [0] },
    { text: 'No me gusta hacer los deberes.', level: 10, topics: [0] },
    { text: 'Helena va al supermercado para comprar agua.', level: 10, topics: [0] },
    { text: 'Yo voy a la tienda de ropa para comprar un abrigo.', level: 10, topics: [0] },
    { text: 'Hay nubes casi todos los días.', level: 11, topics: [0] },
    { text: 'La chica rubia lleva un collar y unos penditentes.', level: 11, topics: [0] },
    { text: 'El hombre moreno lleva barba.', level: 11, topics: [0] },
    { text: 'Yo llevo gafas porque no puedo ver bien.', level: 11, topics: [0] },
    { text: 'Yo pienso que el bigote me queda bien.', level: 11, topics: [0] },
    { text: 'Tengo que lavar la ropa en la lavadora.', level: 11, topics: [0] },
    { text: 'Esos pantalones de color marrón son muy feos.', level: 11, topics: [0] },
    { text: 'La mujer tiene los labios pintados.', level: 11, topics: [0] },
    { text: 'El hombre tiene un lunar en la pierna.', level: 11, topics: [0] },
    { text: 'Tú tienes los ojos muy grandes.', level: 11, topics: [0] },
    { text: 'No me gusta llevar perilla.', level: 11, topics: [0] },
    { text: 'Él es mi hermano mayor.', level: 11, topics: [0] },
    { text: '¿No tienes hermano pequeño?.', level: 11, topics: [0] },
    { text: 'No tengo hermanos, soy hijo único.', level: 11, topics: [0] },
    { text: 'No tengo hermanos, soy hija único.', level: 11, topics: [0] },
    { text: '¿Cómo es él?', level: 11, topics: [0] },
    { text: '¿Cómo es tú madre?.', level: 11, topics: [0] },
    { text: 'Mi amigo es deportista, hace mucho deporte.', level: 11, topics: [0] },
    { text: 'Tienes que hablar con la secretaria.', level: 11, topics: [0] },
    { text: 'Las cebras tienen rayas blancas y negras.', level: 11, topics: [0] },
    { text: 'La nieve es blanca.', level: 11, topics: [0] },
    { text: 'El blanco es el color de la leche.', level: 11, topics: [0] },
    { text: 'La mujer mayor es amable con el niño.', level: 11, topics: [0] },
    { text: '¿Quién es generoso? ', level: 11, topics: [0] },
    { text: 'Eres muy tacaño, nunca compras nada.', level: 11, topics: [0] },
    { text: 'Este mono es inteligente, puede leer libros.', level: 12, topics: [0] },
    { text: 'Mi amiga es muy timida, no habla mucho.', level: 12, topics: [0] },
    { text: 'Mis amigos piensan que yo soy alegre.', level: 12, topics: [0] },
    { text: '¿Tú eres introvertido o extrovertido?', level: 12, topics: [0] },
    { text: 'Siempre piensas lo peor, eres muy pesimista.', level: 12, topics: [0] },
    { text: 'Pienso que estás siendo muy optimista.', level: 12, topics: [0] },
    { text: 'Nunca quiero hacer los deberes, soy muy vago', level: 12, topics: [0] },
    { text: 'Vosotros sois muy trabajadores. ¡Muy bien!', level: 12, topics: [0] },
    { text: 'Las personas son muy impacientes.', level: 12, topics: [0] },
    { text: 'Yo canto los fines de semana.', level: 12, topics: [0] },
    { text: 'En verano muchas personas viajan a otros paises.', level: 12, topics: [0] },
    { text: 'Ella baila todos los días a las cinco de la tarde.', level: 12, topics: [0] },
    { text: 'Me gusta ir de compras con mis amigas.', level: 12, topics: [0] },
    { text: 'Cuando viajo hago fotos.', level: 12, topics: [0] },
    { text: '¿Cocinas todos los días o vas a restaurantes de vez en cuando?', level: 12, topics: [0] },
    { text: 'Salgo a pasear casi siempre por las mañanas', level: 12, topics: [0] },
    { text: 'Mis primos pasean a su perro todos los días.', level: 12, topics: [0] },
    { text: 'Suelo quedar con mis amigos los fines de semana.', level: 12, topics: [0] },
    { text: '¿Cuando quedas con tu novio?', level: 12, topics: [0] },
    { text: 'Me gusta la música coreana.', level: 12, topics: [0] },
    { text: '¿Os gusta la fiesta?', level: 12, topics: [0] },
    { text: 'La cama esta en el dormitorio.', level: 12, topics: [0] },
    { text: 'Me gusta ver la tele por las tardes.', level: 12, topics: [0] },
    { text: 'En la estantería hay muchos libros.', level: 12, topics: [0] },
    { text: 'La ropa esta dentro del armario.', level: 12, topics: [0] },
    { text: 'La ducha esta en el baño.', level: 13, topics: [0] },
    { text: 'Mi habitación es muy pequeña solo tengo una cama.', level: 13, topics: [0] },
    { text: 'Ella no cocina, solo calienta la comida en el microondas.', level: 13, topics: [0] },
    { text: '¿Por qué la fruta está fuera de la nevera.', level: 13, topics: [0] },
    { text: 'El gato está sobre la mesa.', level: 13, topics: [0] },
    { text: 'El gato está debajo de la cama.', level: 13, topics: [0] },
    { text: 'El gato y el perro están en la bañera.', level: 13, topics: [0] },
    { text: 'La niña se lava las manos en el lavabo.', level: 13, topics: [0] },
    { text: 'El mueble está entre la ventana y la puerta.', level: 13, topics: [0] },
    { text: 'Estoy entre la espada y la pared.', level: 13, topics: [0] },
    { text: 'La comisaría esta a la izquierda de mi casa.', level: 13, topics: [0] },
    { text: 'La farmacia esta a la derecha de la comisaría.', level: 13, topics: [0] },
    { text: 'El chico de Francia esta al lado de la chica inglesa.', level: 13, topics: [0] },
    { text: 'La pelota de tenis esta dentro de la caja.', level: 13, topics: [0] },
    { text: 'La pelota azul esta fuera de la casa.', level: 13, topics: [0] },
    { text: 'Valencia está cerca de Barcelona.', level: 13, topics: [0] },
    { text: 'Shanghai está lejos de España.', level: 13, topics: [0] },
    { text: 'El profesor está delante de la pizarra.', level: 13, topics: [0] },
    { text: 'El perro está detras de la puerta amarilla.', level: 13, topics: [0] },
    { text: '¿Cuantas pelotas hay en la caja?', level: 13, topics: [0] },
    { text: '¿Dondé está la pelota de fútbol?', level: 13, topics: [0] },
    { text: 'Hay tres pelotas en la cocina.', level: 13, topics: [0] },
    { text: 'Hay sangre roja encima de la mesa.', level: 13, topics: [0] },
    { text: 'La niña lleva un vestido naranja.', level: 13, topics: [0] },
    { text: 'Hoy vamos a aprender los colores.', level: 13, topics: [0] },
    { text: '¿Sabes tocar la guitarra?', level: 14, topics: [0] },
    { text: 'El guitarrista no sabe tocar el piano', level: 14, topics: [0] },
    { text: '¿Quién sabe tocar la guitarra?', level: 14, topics: [0] },
    { text: '¿Conoces alguna ciudad de España?', level: 14, topics: [0] },
    { text: '¿Conoces alguna persona de Japón?', level: 14, topics: [0] },
    { text: 'Yo conozco a personas de Inglaterra.', level: 14, topics: [0] },
    { text: 'Ella sabe bailar hip-hop muy bien.', level: 14, topics: [0] },
    { text: '¿Quién sabe bailar?', level: 14, topics: [0] },
    { text: '¿Pedro sabe cómo jugar al tenis?', level: 14, topics: [0] },
    { text: '¿Quién sabe tocar un instrumento musical?', level: 14, topics: [0] },
    { text: '¿Qué instrumento musical sabes tocar?', level: 14, topics: [0] },
    { text: 'La ciudad donde vive Juan tiene una librería.', level: 14, topics: [0] },
    { text: 'Juan va allí todos los días a comprar libros.', level: 14, topics: [0] },
    { text: 'Juan tiene un libro, pero a él no le gusta leer.', level: 14, topics: [0] },
    { text: 'Juan compra una pizza porque le gusta mucho.', level: 14, topics: [0] },
    { text: 'Un día, Maria come mucha comida y enferma.', level: 14, topics: [0] },
    { text: 'En el hospital Sherman habla con la enfermera.', level: 14, topics: [0] },
    { text: 'La enfermera no tiene ojos ni boca.', level: 14, topics: [0] },
    { text: 'La doctora está triste porque no tiene boca.', level: 14, topics: [0] },
    { text: 'Juan quiere que la enfermera esté contenta.', level: 14, topics: [0] },
    { text: 'Antonio va al parque y ve a un gato en un árbol.', level: 14, topics: [0] },
    { text: 'El gato tiene un pez en la boca', level: 14, topics: [0] },
    { text: 'Por eso está contento.', level: 14, topics: [0] },
    { text: 'El gato no puede bajar del árbol.', level: 14, topics: [0] },
    { text: 'Jay tiene que llamar a los bomberos.', level: 14, topics: [0] },
    { text: 'Los bomberos de la ciudad son pobres y no tienen agua.', level: 15, topics: [0] },
    { text: 'El hombre va ahí para hablar con ellos.', level: 15, topics: [0] },
    { text: 'Los bomberos quieren el dinero de Jone.', level: 15, topics: [0] },
    { text: 'Juan está triste porque no tiene dinero.', level: 15, topics: [0] },
    { text: '¿Por qué no vas a la clase de Español?', level: 15, topics: [0] },
    { text: 'Ana va a la farmacia a comprar medicina.', level: 15, topics: [0] },
    { text: 'Ana tamo medicina y se siente mejor.', level: 15, topics: [0] },
    { text: 'Juan va a la comisaría para hablar con la policia.', level: 15, topics: [0] },
    { text: 'Evan tiene que ir al banco.', level: 15, topics: [0] },
    { text: 'Elisha va al banco, pero en el banco no hay nadie.', level: 15, topics: [0] },
    { text: 'Marta está aburrida y va al cine a ver una película.', level: 15, topics: [0] },
    { text: 'La enfermera no puede hablar por que no tiene boca.', level: 15, topics: [0] },
    { text: 'Él está triste por que piensa que ella no le ama.', level: 15, topics: [0] },
    { text: 'Estoy triste, por eso quiero comer helado de fresa.', level: 15, topics: [0] },
    { text: 'En la heladería el helado de fresa es gratis.', level: 15, topics: [0] },
    { text: 'En la tienda de ropa hay muchos vestidos bonitos.', level: 15, topics: [0] },
    { text: 'Quiero comprar el vestido rojo, y la falda verde.', level: 15, topics: [0] },
    { text: '¿Quieres el sombrero negro o el azul oscuro?', level: 15, topics: [0] },
    { text: 'Para llegar al parque tienes que girar a la derecha.', level: 15, topics: [0] },
    { text: 'Para llegar a la librería tienes que dar la vuelta en el semáforo.', level: 15, topics: [0] },
    { text: 'Para salir del banco tienes que bajar esas escaleras.', level: 15, topics: [0] },
    { text: 'Hoy vamos a hablar de Sevilla.', level: 15, topics: [0] },
    { text: 'Sevilla está al sur de España.', level: 15, topics: [0] },
    { text: 'Sevilla está muy lejos de Shanghái y cerca de Madrid.', level: 15, topics: [0] },
    { text: 'Sevilla es la cuarta ciudad más grande de España.', level: 15, topics: [0] },
    { text: 'Sevilla es una ciudad muy bonita y divertida.', level: 16, topics: [0] },
    { text: '¿Cómo es Sevilla?', level: 16, topics: [0] },
    { text: 'Sevilla tiene un millón dos cientos sesenta y dos mil habitantes. ', level: 16, topics: [0] },
    { text: '¿Qué tiene Sevilla?', level: 16, topics: [0] },
    { text: 'En Sevilla hay muchos edificios antiguos.', level: 16, topics: [0] },
    { text: 'En Valencia hace sol casi todo el año.', level: 16, topics: [0] },
    { text: 'En verano en Valencia a menudo hace mucha calor.', level: 16, topics: [0] },
    { text: 'Hoy es quince de Julio.', level: 16, topics: [0] },
    { text: 'Helena tiene calor y Yo tengo frio.', level: 16, topics: [0] },
    { text: 'Hoy en el supermercado no hay agua.', level: 16, topics: [0] },
    { text: 'Helena tiene mucha calor y no tiene agua.', level: 16, topics: [0] },
    { text: 'Helena va a moscú porque le gusta el frio.', level: 16, topics: [0] },
    { text: 'Moscú es una ciudad de Rusia', level: 16, topics: [0] },
    { text: 'El invierno en Moscú es muy largo.', level: 16, topics: [0] },
    { text: 'En ese país hay nubes casi todos los días.', level: 16, topics: [0] },
    { text: 'En ese país está nublado casi todos los días.', level: 16, topics: [0] },
    { text: 'En Moscú Helena conoce a Juan.', level: 16, topics: [0] },
    { text: 'En Moscú hace frio.', level: 16, topics: [0] },
    { text: 'Juan lleva una camiseta azul de manga corta.', level: 16, topics: [0] },
    { text: 'Por eso Juan tiene mucho frio.', level: 16, topics: [0] },
    { text: 'Juan va a la tienda de ropa para comprar un abrigo.', level: 16, topics: [0] },
    { text: 'En la tienda de ropa no hay abrigos baratos.', level: 16, topics: [0] },
    { text: 'En Zaragoza la comida no es cara.', level: 16, topics: [0] },
    { text: 'En Barcelona los restaurantes son muy caros.', level: 16, topics: [0] },
    { text: 'En Brasil a veces hay tormenta.', level: 16, topics: [0] },
    { text: '¿Tienes paraguas? Mi paraguas está en casa.', level: 17, topics: [0] },
    { text: 'Juan entra en la estaión de bomberos.', level: 17, topics: [0] },
    { text: 'Juan no ve a nadie dentro de la estación de bomberos.', level: 17, topics: [0] },
    { text: 'Juan mira la sangre que hay en la mesa.', level: 17, topics: [0] },
    { text: 'Juan escucha un ruido detrás de él.', level: 17, topics: [0] },
    { text: 'Yo escucho un ruido detrás de mi', level: 17, topics: [0] },
    { text: 'Tu eschuchas un ruido detrás de ti', level: 17, topics: [0] },
    { text: 'El zombi quiere comer personas.', level: 17, topics: [0] },
    { text: 'Juan tiene mucho miedo.', level: 17, topics: [0]  },
    { text: 'El zombi se va a dormir.', level: 17, topics: [0] },
    { text: 'Juan sale de la estación de bomberos.', level: 17, topics: [0] },
    { text: 'Yo salgo de la comisaria.', level: 17, topics: [0] },
    { text: 'Fuera de la estación de bomberos no llueve.', level: 17, topics: [0] },
    { text: 'Hoy está nevado.', level: 17, topics: [0] },
    { text: '¿Qué hora es?', level: 17, topics: [0] },
    { text: '¿Qué tiempo hace hoy?', level: 17, topics: [0] },
    { text: '¿Qué día es hoy?', level: 17, topics: [0] },
    { text: '¿Me puedes decir la fecha de hoy?', level: 17, topics: [0] },
    { text: 'Yo nado en la piscina del gimnasio', level: 17, topics: [0] },
    { text: '¿En qué calle vives?', level: 17, topics: [0] },
    { text: '¿Cuándo es tú cumpleaños?', level: 17, topics: [0] },
    { text: '¿Cuándo cumples años?', level: 17, topics: [0] },
    // { text: '', level: 17, topics: [0] },
    // { text: '', level: 17, topics: [0] },
    // { text: '', level: 17, topics: [0] },
]


const questionsDiv = document.getElementById('questions')
var count = 1
let testWords

function createAndPrint() {
    createNewEvaluation()
    printTest()
}

function createNewEvaluation(repeatQuestions = true) {
    const numberOfQuestions = document.getElementById('numberofquestions').value
    
    if(repeatQuestions){
        var questions = Array.from(questionsPool)
    }
    else{
        var questions = questionsPool
    }

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

