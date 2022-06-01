const students = [
    { name: "peter", score: 9.5 },
    { name: "Paul", score: 8.5 },
    { name: "Kate", score: 9.0 },
    { name: "Andy", score: 7.5 }
]

const notaMaiorQue9 = (student) => student.score >= 9;

const getScore = (student) => student.score

const media = (acc, el, index, arr) => {
    return index === arr.length - 1 ? ((acc + el) / arr.length) : acc + el;
}

const aprovados = students.filter(notaMaiorQue9).map(getScore).reduce(media, 0)

console.log(aprovados)
