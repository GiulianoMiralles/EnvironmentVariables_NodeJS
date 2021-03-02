/* Connect({
    url: "localhost:3000",
    pass: "LoremIpsum123",
    user: "Lupsum"
});

token = "603d4664398937e480058231"; */
/* 
console.log(process.env.PORT);

Connect({
    pass: process.env.DB_PASSWORD,
});

const token = process.env.TOKEN_FB; */

require('dotenv').config();

console.log(process.env.PORT);
console.log(process.env.DB_PASSWORD);
console.log(process.env.TOKEN_FB);
