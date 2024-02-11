let subject_details = []
let unique_number = 1

let subjectContainerEle = document.getElementById("subjectsContainer");

let addButtonEle = document.getElementById("addButton");

addButtonEle.onclick = function() {
    let subject = document.createElement('p');
    subject.textContent = 'Subject ' + unique_number;

    let credit = document.createElement('input');
    credit.type = 'text';
    credit.id = 'credit' + unique_number;
    let placeholderContent = "Enter " + subject.textContent + " Credit";
    credit.setAttribute("placeholder", placeholderContent)
    credit.classList.add("user-input", "mb-3")

    let grade = document.createElement('select');
    grade.id = 'grade' + unique_number;
    grade.classList.add("grade-input", "mb-3")

    let grade_ranks = ['Choose Grade', 'O', 'A+', 'A', 'B+', 'B', 'C', 'RE'];
    for (let each_rank of grade_ranks) {
        let gradeOption = document.createElement('option');
        gradeOption.textContent = each_rank;

        grade.appendChild(gradeOption);
    }


    unique_number += 1;
    let details = {
        name: subject.textContent,
        credit: credit.id,
        grade: grade.id
    };

    subject_details.push(details);

    subjectContainerEle.appendChild(subject);
    subjectContainerEle.appendChild(credit);
    subjectContainerEle.appendChild(grade);
}
// console.log(subject_details);


function Compute() {
    let total = 0;
    let d = 0;
    for (let e of subject_details) {
        let val = null;
        let subject_grade = (document.getElementById(e.grade)).value;
        let subject_credit = parseInt((document.getElementById(e.credit)).value);

        if (subject_grade === "O") {
            val = 10;
        } else if (subject_grade === "A+") {
            val = 9;
        } else if (subject_grade === "A") {
            val = 8;
        } else if (subject_grade === "B+") {
            val = 7;
        } else if (subject_grade === "B") {
            val = 6;
        } else if (subject_grade === "C") {
            val = 5;
        } else if (subject_grade === "RE") {
            val = 0;
        }

        total = total + (subject_credit * val);
        d = d + subject_credit;
    }
    total = Math.round(total * 1000.0) / 1000.0;
    d = Math.round(d * 1000.0) / 1000.0;
    let result = total / d;
    result = Math.round(result * 1000.0) / 1000.0;
    return result;
}






let calculateButton = document.getElementById("calculateButton");
let resultEle = document.getElementById("resultContainer");

let resultText = document.createElement("input");
resultText.type = "text";
resultText.classList.add("text-center");

calculateButton.onclick = function() {
    let lenOfSubjectList = subject_details.length;
    if (lenOfSubjectList < 1) {
        return alert("Invalid input");
    }



    if (resultText.value !== "") {
        return alert("Refresh the page");
    }

    let finalResult = Compute();

    resultEle.appendChild(resultText)
    resultText.value = finalResult;
}