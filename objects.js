
const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)')
        // do the thing
    } else {
        console.log('SHAME')
        // do the other thing
    }
}

bouncer(12);
bouncer(93);


const me = 'martin'
console.log(me.length)



const myPerson = {
    name: 'john',
    age: '41',
    theAnswerToLife: 42
}

console.log(myPerson['name'])
console.log(myPerson.name)


console.dir(myPerson)




// Challenge



const findAndLogEmployeeStatusAfterEnteringName = (employee) => {
    employee.name = prompt('')
    if (employee.name.charAt(0).toLowerCase() === 'c') {
        employee.status = 'vip'
    } else {
        employee.status = 'peasant'
    }
    console.log('michael is always vip')
    console.log(`${employee.name} is a total ${employee.status}`)
    return employee;
}


const person = {
    name: prompt(),
    status: ''
}

findAndLogEmployeeStatus(person)
findAndLogEmployeeStatus({
    name: 'lester',
    status: ''
})
findAndLogEmployeeStatus({
    name: 'carl clark',
    status: ''
})

findAndLogEmployeeStatus({
    name: prompt('Enter employee name'),
    status: ''
})

findAndLogEmployeeStatus({
    name: prompt('Enter employee name again'),
    status: ''
})


