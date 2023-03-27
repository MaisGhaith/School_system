// const form = document.getElementById("myForm")
// // const stdInfo = document.getElementById("userInfo")

// const infoTable = []


// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     let StdName = event.target.user.value;
//     let StdBirthDate = event.target.birthDate.value;
//     let StdGender = event.target.gender.value;
//     let StdPhone = event.target.phone.value;
//     let StdGrade = event.target.grade.value;

//     console.log(StdName, StdBirthDate, StdGender, StdPhone, StdGrade);
//     form.reset()


//     // to store the elements that the user had entered in variable
//     let dataObj = {
//         // js     html
//         StdName: StdName,
//         StdBirthDate: StdBirthDate,
//         StdGender: StdGender,
//         StdPhone: StdPhone,
//         StdGrade: StdGrade,
//     }

//     // enter the data to infoTable array that we defined
//     infoTable.push(dataObj)
//     showData()
//     // console.log(infoTable)

//     // render(StdName, StdBirthDate, StdGender, StdPhone, StdGrade)
// })

// // create a function to show the data in the table
// function showData() {
//     let table = '';
//     // console.log(infoTable)
//     for (let i = 0; i < infoTable.length; i++) {

//         table += `
//         <tr>
//         <td>${infoTable[i].StdName}</td>
//         <td>${infoTable[i].StdBirthDate}</td>
//         <td>${infoTable[i].StdGender}</td>
//         <td>${infoTable[i].StdPhone}</td>
//         <td>${infoTable[i].StdGrade}</td>
//         <tr/>`
//     }
//     document.getElementById("students-list").innerHTML = table

// }






// // function render(StdName, StdBirthDate, StdGender, StdPhone, StdGrade) {
// //     let pName = document.createElement("p")
// //     pName.textContent = StdName;

// //     let pBirth = document.createElement("p")
// //     pBirth.textContent = StdBirthDate;

// //     let pGender = document.createElement("p")
// //     pGender.textContent = StdGender;

// //     let pPhone = document.createElement("p")
// //     pPhone.textContent = StdPhone;

// //     let pGrade = document.createElement("p")
// //     pGrade.textContent = StdGrade

// //     stdInfo.appendChild(pName)
// //     stdInfo.appendChild(pBirth)
// //     stdInfo.appendChild(pGender)
// //     stdInfo.appendChild(pPhone)
// //     stdInfo.appendChild(pGrade)



// // }


// constructor task 


const form = document.getElementById("myForm")
let arrData = []
if (localStorage.arrData != null) {
    arrData = JSON.parse(localStorage.arrData);
    render();
}

form.addEventListener("submit", function (event) {
    // event.preventDefault();
    let StdName = event.target.user.value;
    let StdBirthDate = event.target.birthDate.value;
    let StdGender = event.target.gender.value;
    let StdMajor = event.target.major.value;
    let StdPhone = event.target.phone.value;
    let StdImage = event.target.userimg.value;


    let student = new Student(StdName, StdBirthDate, StdGender, StdPhone, StdMajor, StdImage)
    arrData.push(student)
    localStorage.setItem('arrData', JSON.stringify(arrData))

    console.log(StdName, StdBirthDate, StdGender, StdPhone, StdMajor, StdImage);
    form.reset()
    render()


})

// here we call the variables we define on addEventListener
function Student(StdName, StdBirthDate, StdGender, StdPhone, StdMajor, StdImage) {

    this.StdName = StdName;
    this.StdBirthDate = StdBirthDate;
    this.StdGender = StdGender;
    this.StdPhone = StdPhone;
    this.StdMajor = StdMajor;
    this.StdImage = StdImage;


}



//////////// show data /////////////

function render() {

    for (let i = 0; i < arrData.length; i++) {
        let sdCard = document.getElementById("student_card")
        let divContainer = document.createElement('div')
        let img = document.createElement('img')
        img.src = `${arrData[i].StdImage}`
        let ul = document.createElement('ul')
        ul.textContent = `${arrData[i].StdName}`
        let li1 = document.createElement('li')
        li1.textContent = `${arrData[i].StdBirthDate}`
        let li2 = document.createElement('li')
        li2.textContent = `${arrData[i].StdGender}`

        let li3 = document.createElement('li')
        li3.textContent = `${arrData[i].StdPhone}`

        let li4 = document.createElement('li')
        li4.textContent = `${arrData[i].StdMajor}`

        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)

        divContainer.appendChild(img)
        divContainer.appendChild(ul)
        sdCard.appendChild(divContainer)

    }

}