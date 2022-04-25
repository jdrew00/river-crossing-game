
// Recommend this gets changed to an object, but this is fine too
var members = [
    {
        type: 0,
        name: 'Wolf',
        conflicts: [1]
    },
    {
        type: 1,
        name: 'Chicken',
        conflicts: [0]
    },
    {
        type: 2,
        name: 'Cabbage',
        conflicts: [1]
    },
    {
        type: 3,
        name: 'farmer',
        conflicts: [-1]
      }
]

// How I recommend you store the state (island 1, boat, island 2)
//[0, 1, 1, 2]


//const wolf = members.some(x => x.name === 'Wolf')

//console.log(wolf)


// Returns true if no conflicts
const checkConflict = (transferItems ) => {
    
    const ids = transferItems.map( x => ( x.type ))

    const hasConflict = transferItems.some(item => {
        return ids.some(id => item.conflicts.includes(id))
    })

    return !hasConflict
}

const checkFarmer = (transferItems) => {

    const ids = transferItems.map(x => (x.type))

    const hasConflict = transferItems.some(item => {
      return ids.some(id => item.type === 3)
    })

    return hasConflict
  }

var list2 = [];
console.log(members)
console.log(checkFarmer(members))
list2 = list2.concat(members.filter(item => item.type === 2))
list2 = list2.concat(members.filter(item => item.type === 3))
console.log(list2)
members = members.filter(item => item.type !== 2)
members = members.filter(item => item.type !== 3)
console.log(members)
//console.log(list2)
members = members.filter(item => item.type !== 2)
//console.log(list2)
//setList(list.filter(item => item.type !== 3))
// console.log(checkConflict(members))
// console.log(checkConflict( [ members[2] , members[1] ] ))
// console.log(checkConflict( [ members[1] , members[2] ] ))
// console.log(checkConflict( [ members[1] , members[1] ] ))
// console.log(checkConflict( [ members[0] , members[1] ] ))

// members = members.filter( el => el.type !== 2 );
// console.log(members)

// var leftSide = []

// const transferMembers = (list1, itemPicked) => {
//     // list1 = list1.filter( el => el.type !== itemPicked );
//      list1 = list1.filter( el => el.type !== itemPicked );
//      return list1
// }

// if(checkConflict( [ members[1] , members[2] ] )){
//     leftSide = members.filter( el => el.type === 1 );
//     members = transferMembers(members, 1)
    
// }

// console.log("right side")
// console.log(members)
// console.log("left side")
// console.log(leftSide)


// if(checkConflict( [ members[1] , members[2] ] )){
//     leftSide = members.filter( el => el.type === 1 );
//     members = transferMembers(members, 1)
    
// }

// evaluate([members[0], members[2]])

// console.log(evaluate([members[0], members[1]]))
// console.log(evaluate([members[0], members[2]]))

// const evaluate = (transferItems) => {
    
//     const ids = transferItems.map(x => x.id)

//     const hasConflict = transferItems.some(item => {
//         return ids.some(id => item.conflicts.includes(id))
//     })

//     return !hasConflict
// }