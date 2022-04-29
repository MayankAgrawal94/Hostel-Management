/** 
 * Author: Mayank Agrawal
 * Contact: mnk.agrawal94@gmail.com
 * Date: 24th April 2022
 * */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let total_strength = 0
let classes = [ 'A', 'B' ], food_prefrences = [ 'V', 'NV' ], overflow_data = []
let combination = classes.length * food_prefrences.length
let local_storage = { }

//Here we call the main function to initiate the module functionality.
main( '\n"Implement SortingHat: A school hostel assignment Program."\n\nPlease enter total strength of all the boarding houses.\n\n> ' );


function main( ques ){
  
  readline.question(ques, input => {
    try{

      //If any point of time user wants to emergency exit the portal.
      if(input.toLowerCase() == 'exit'){
        console.log( '\n Thank you for using "Hostel Management" application.\n\n Please Vist us again!\n')
        readline.close()
        return;
      }

      //User first input for student registration capacity.
      if( total_strength == 0 && input.includes('init')){

        total_strength = parseInt(input.split(" ")[1])
        if( total_strength % combination == 0){
          _init(total_strength/combination, classes, food_prefrences, local_storage);
          hostelManagement("\nLet's begin the student registration -\n> ")
        }else{
          total_strength = 0
          hostelManagement(`Please try again!\n\n> `)
        }

      //Student registration entry.
      } else if (total_strength > 0 && input.includes('reg')){
        _registration(input, local_storage, overflow_data, function(REG_CB){
          if(REG_CB){
            hostelManagement('> ')
          }else{
            hostelManagement('Invalid entry!\n> ')
          }
        })

      //Student registration when finishes.
      }else if(input == 'fin') {

        _output( local_storage, overflow_data, function(OUT_CB){
          if(OUT_CB){
            readline.close()
          }
        })

      //When user making invalid entries.
      }else{


        hostelManagement('Invalid entry!\n> ')

      }
    
    //hostelManagement() function error handling.
    }catch(err){
      console.error(err, err.message);
      hostelManagement(`Please try again!\n\n> `)
    }
    
  })
  
}

function _init(value, classes, food_prefrences, local_storage){
  const key_combination = classes.reduce( (a, v) =>
      [...a, ...food_prefrences.map(x=>v+x)],
  []);

  key_combination.map(key=>{
      local_storage[key] = {
          value:[],
          capping: value
      }
  })
}

function _registration(input, localStorage, overflowData, REG_CB){
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

function _output(localStorage, overflowData, OUT_CB){
  console.log( '\nFinal output:-\n' )
  for (const property in localStorage) {
      console.log(`${property}: `,localStorage[property]['value']);
  }
  console.log('NA: ', overflowData);
  OUT_CB(true)
}