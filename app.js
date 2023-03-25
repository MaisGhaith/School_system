const form = document.getElementById("myForm")
// const stdInfo = document.getElementById("userInfo")

const infoTable = []


form.addEventListener("submit", (event) => {
    event.preventDefault()

    let StdName = event.target.user.value;
    let StdBirthDate = event.target.birthDate.value;
    let StdGender = event.target.gender.value;
    let StdPhone = event.target.phone.value;
    let StdGrade = event.target.grade.value;

    console.log(StdName, StdBirthDate, StdGender, StdPhone, StdGrade);
    form.reset()


    // to store the elements that the user had entered in variable
    let dataObj = {
        StdName: StdName,
        StdBirthDate: StdBirthDate,
        StdGender: StdGender,
        StdPhone: StdPhone,
        StdGrade: StdGrade,
    }

    // enter the data to infoTable array that we defined
    infoTable.push(dataObj)
    showData()
    // console.log(infoTable)

    // render(StdName, StdBirthDate, StdGender, StdPhone, StdGrade)
})

// create a function to show the data in the table
function showData() {
    let table = '';
    // console.log(infoTable)
    for (let i = 0; i < infoTable.length; i++) {

        table += `
        <tr> 
        <td>${infoTable[i].StdName}</td>
        <td>${infoTable[i].StdBirthDate}</td>
        <td>${infoTable[i].StdGender}</td>
        <td>${infoTable[i].StdPhone}</td>
        <td>${infoTable[i].StdGrade}</td>
        <tr/>`
    }
    document.getElementById("students-list").innerHTML = table

}






// function render(StdName, StdBirthDate, StdGender, StdPhone, StdGrade) {
//     let pName = document.createElement("p")
//     pName.textContent = StdName;

//     let pBirth = document.createElement("p")
//     pBirth.textContent = StdBirthDate;

//     let pGender = document.createElement("p")
//     pGender.textContent = StdGender;

//     let pPhone = document.createElement("p")
//     pPhone.textContent = StdPhone;

//     let pGrade = document.createElement("p")
//     pGrade.textContent = StdGrade

//     stdInfo.appendChild(pName)
//     stdInfo.appendChild(pBirth)
//     stdInfo.appendChild(pGender)
//     stdInfo.appendChild(pPhone)
//     stdInfo.appendChild(pGrade)



// }