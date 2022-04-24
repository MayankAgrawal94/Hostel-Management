module.exports = {
    create : function(input, localStorage, overflowData, REG_CB){
        const reg_input = input.split(" ")
        const key = reg_input[2]+reg_input[3]
        const id = parseInt(reg_input[1])
        if(reg_input.length == 4 && localStorage[key]){
            if(localStorage[key]['capping']){
                const index = localStorage[key]['value'].findIndex(x=> x == id )
                if(index == -1){
                    localStorage[key]['value'].push(id)
                    localStorage[key]['capping']--;
                }
            }else{
                overflowData.push(id)
            }
            REG_CB(true)
        } else {
            REG_CB(false)
        }
    }
}