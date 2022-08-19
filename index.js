// code your solution here
function saturdayFun(args = 'roller-skate'){
    return(`This Saturday, I want to ${args}!`)
}
function mondayWork(args = 'go to the office'){
    return(`This Monday, I will ${args}.`)
}
function wrapAdjective(flair = '*'){
    return function(arg = 'special'){
        return `You are ${flair}${arg}${flair}!`
    }
}
console.log(wrapAdjective()())