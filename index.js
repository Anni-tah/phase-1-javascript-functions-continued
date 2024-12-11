function saturdayFun(activity ="roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun("bathe my dog");

function mondayWork(work = 'go to the office'){
return (`This Monday, I will ${work}.`);

}
mondayWork('work from home');

function wrapAdjective( wrap = '*'){
    const empatic = function(special){
        return (`You are ${wrap}${special}${wrap}!`);
    };
return empatic;
}
wrapAdjective("%")("a dedicated programmer");