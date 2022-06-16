const checkAge = function(age_input) {

let age_min = 18
let age_max = 60
let type = typeof(age_input)

if (type != 'number') {
    console.log('ERROR! Please input correct number')
} else if (age_input < age_min){        
    console.log('You don’t have access cause your age is ' + age_input + ' It’s less then ' + age_min)
} else if (age_input >= age_min && age_input < age_max){
    console.log('Welcome!')
} else if (age_input > age_max){
    console.log('Keep calm and look Culture channel')
} else {
    console.log('Technical work')
}
}

console.log(checkAge(17))
console.log(checkAge(18))
console.log(checkAge(61))
console.log(checkAge(60))
console.log(checkAge('7h'))