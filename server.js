/** 
 * Author: Mayank Agrawal
 * Contact: mnk.agrawal94@gmail.com
 * Date: 24tf April 2022
 * */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const init = require('./app/controller/init');
const registration = require('./app/controller/registration');
const output = require('./app/controller/output');

let total_strength = 0
let classes = [ 'A', 'B' ], food_prefrences = [ 'V', 'NV' ], overflow_data = []
let combination = classes.length * food_prefrences.length
let local_storage = { }


hostelManagement( '\n"Implement SortingHat: A school hostel assignment Program."\n\nPlease enter total strength of all the boarding houses.\n\n> ' );

function hostelManagement( ques ){
  
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
          init.create(total_strength/combination, classes, food_prefrences, local_storage);
          hostelManagement("\nLet's begin the student registration -\n> ")
        }else{
          total_strength = 0
          hostelManagement(`Please try again!\n\n> `)
        }

      //Student registration entry.
      } else if (total_strength > 0 && input.includes('reg')){
        registration.create(input, local_storage, overflow_data, function(REG_CB){
          if(REG_CB){
            hostelManagement('> ')
          }else{
            hostelManagement('Invalid entry!\n> ')
          }
        })

      //Student registration when finishes.
      }else if(input == 'fin') {

        output.print( local_storage, overflow_data, function(OUT_CB){
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
