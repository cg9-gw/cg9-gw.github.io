function solvefor(input) {
    if(typeof(input)!==String) {
        input = input.toString()
    }
    const nums=["1","2","3","4","5","6","7","8","9","0"]
    var vars={}
    alg=false
    for(c in input.split()) {
        if(nums.indexOf(c)===-1) {
            alg=true
            vars[c]=exp.indexOf(c)
        }
    }
    if(alg) {
        varcount = vars.length
        if(varcount.legnth===1) {

        }
    }
    


    return answer;
}