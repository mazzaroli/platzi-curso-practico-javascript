const notes = [
    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "Programacion",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
]

function calcularMediaPonderada(){
    const notesWithCredit = notes.map(
        function(noteObject) {
            return noteObject.note * noteObject.credit;
        }
    )
    
    const sumNotesWithCredit = notesWithCredit.reduce(
        function(sum = 0, wholeNote) {
            return sum + wholeNote
        }
    )
    
    const credits = notes.map(
        function(noteObject) {
            return noteObject.credit
        }
    )
    
    const sumOfCredits = credits.reduce(
        function(sum = 0, wholeCredit) {
            return sum + wholeCredit
        }
    )
    
    const promedioPonderado = sumNotesWithCredit / sumOfCredits 
    return promedioPonderado
}
