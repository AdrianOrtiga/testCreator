const levelInput = document.getElementById("level")
const MAX_LEVEL = getMaxLevelQuestions()
levelInput.max = MAX_LEVEL


function getMaxLevelQuestions(){
    let max = 0

    questionsPool.forEach(question => {
        if(question.level > max) max = question.level
    })

    return max;
}
