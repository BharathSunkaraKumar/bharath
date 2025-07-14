
let user = {
    name: 'bharath',
    age: '26',
    city: 'tirupati',
    code: 'js'
}

for(let key in user) {
    console.log(key, user[key])
    // console.log(user.hasOwnProperty('age'))
}

const newUser = {...user, role: 'frontend dev'}
console.log(newUser)