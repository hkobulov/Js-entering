alert ('Xush kelibsiz!');
var firstName = prompt ('Ismingiz', 'Hikmatulloh');
var surName = prompt ('Familyangiz', 'Qobulov');
var secondName = prompt ('Sharifingiz', "Hamidulloh o'g'li");
var userBornDate = prompt ("Tug'ilgan sanangiz", '01.01.2000');
var userBornPlace = prompt ("Qayerda tavallud topgansiz", "Andijon, O'zbekiston");
var userLivePlace = prompt ('Qayerda yashaysiz', 'Toshkent');
var userPassportSeriya = prompt ('Passport seriyasi', 'AA');
var userPassportId = prompt ('Passport raqamingiz', '0000001');
var userGender = prompt ('Jinsingiz', 'Erkak');
var userNationality = prompt ('Millatingiz', "O'zbek");
alert ("Ma'lumotlaringizni kiritganingiz uchun tashakkur!"); 

console.log ("Foydalanuvchi haqida ma'lumotlar:" + '\n' + 'Ismi: ' + firstName + '\n' + 'Familiyasi: ' + surName + '\n' + 'Sharifi: ' + secondName +'\n' + "Tug'ilgan sanasi: " + userBornDate + '\n' + "Tug'ilgan joyi: " + userBornPlace + '\n' + 'Yashash manzili: ' + userLivePlace + '\n' + "Passport ma'lumotlari: " + userPassportSeriya +  userPassportId + '\n' + 'Jinsi: ' + userGender + '\n' + 'Millati: ' + userNationality);