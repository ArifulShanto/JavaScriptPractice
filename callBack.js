function explain_callBack(name,age,task){
    console.log("hello ",name);
    console.log('your age is ',age);
    task();
}

function washHand(){
    console.log('wash your hand with soap');
}
function takeShower(){
    console.log('take shower');
}

var try_callback = explain_callBack('rahim',12,washHand);

var another = explain_callBack('karim',25,takeShower);
