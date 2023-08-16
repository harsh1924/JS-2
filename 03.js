let students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 66,
    },
];
function checkResult(student) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name == student && students[i].marks > 90) {
            console.log(`Congratulations ${students[i].name}! You have cleared the exam`);
        }
        else if (students[i].name == student && students[i].marks < 90) {
            console.log(`Sorry ${students[i].name}! You have not cleared the exam`);
        }
    }
};
checkResult("Alka");