
function updateHeading(newHeading) {
    let heading = document.querySelector("h2");
    heading.innerHTML = newHeading;
}

function buttonActivation() {
    window.scrollTo({ top: 0 });

    studentName = prompt("What is your name?");
    studentMail = prompt("Enter your email address");
    studentLocation = prompt("What city do you live in?");

    studentLocationEdited = studentLocation.toLowerCase();
    studentLocationEdited = studentLocationEdited.trim(" ", "");
    studentLocationEdited = studentLocationEdited.trim("tokio", "tokyo");

    if (
        studentLocationEdited === "london" ||
        studentLocationEdited === "tokyo"
    ) {
        updateHeading(
        `Dear ${studentName}!
        <br />
            You can visit offline classes in our studio in ${studentLocation} or join our online courses. 
            <br />
            We've sent an email with details to ${studentMail} 💙💛`
        );
    } else {
        alert(
        `Dear ${studentName}! Check your mail box ${studentMail} to receive an exclusive 10% discount code! 💙💛`
        );
    }
}

let contactButton = document.querySelector("button");
contactButton.addEventListener("click", buttonActivation);
