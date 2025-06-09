var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName: "Ivan",
        lastName: "Ivanov",
        email: "invalid_email@unknown.com" // Теж не підходить
    },
    {
        userName: "Anna",
        lastName: "Shevchenko",
        email: "anna123@gmail.com" // Підходить
    }
];

var trustedEmails = [];

var regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (regex.test(email)) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails);
