module.exports = {
    print : function(localStorage, overflowData, OUT_CB){
        console.log( '\nFinal output:-\n' )
        for (const property in localStorage) {
            console.log(`${property}: `,localStorage[property]['value']);
        }
        console.log('NA: ', overflowData);
        OUT_CB(true)
    }
}