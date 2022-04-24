module.exports = {
    create : function(value, classes, food_prefrences, local_storage){
        const key_combination = classes.reduce( (a, v) =>
            [...a, ...food_prefrences.map(x=>v+x)],
        []);
  
        key_combination.map(key=>{
            local_storage[key] = {
                value:[],
                total: value
            }
        })
    }
}