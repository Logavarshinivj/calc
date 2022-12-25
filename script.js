let output_screen=document.getElementById("output-screen");

function display(num){
     output_screen.value+=num;
     //console.log(output_screen.value);
     
         
}

function calculate(){
    output_screen.value=eval(output_screen.value)
}

function clear1(){
    output_screen.value=""
}

function del(){
    output_screen.value=output_screen.value.slice(0,-1)
    console.log("deleted")
}


// var key_trigger=document.querySelector("input[type=text]")

// key_trigger.addEventListener("keypress",(e)=>{
    
//     if(e.code.includes('Digit') || e.code.includes('Numpad')){
//         output_screen.value+=num;
//         output_screen.value=num+e.key;
//     }
//     else{
//         console.log("not a number");
//     }
// })

// function allnumericplusminus(inputtxt)
//    {
//       var numbers = /^[-+]?[0-9]+$/;
//       if(inputtxt.value.match(numbers)){
//         output_screen.value+=numbers

//       }
      
   
//     }
let inputs = document.querySelectorAll('input[data-filter]');

for (let input of inputs) {
  let state = {
    value: input.value,
    start: input.selectionStart,
    end: input.selectionEnd,
    pattern: RegExp('^' + input.dataset.filter + '$')
  };
  
  input.addEventListener('input', event => {
    if (state.pattern.test(input.value)) {
      state.value = input.value;
    } else {
      input.value = state.value;
      input.setSelectionRange(state.start, state.end);
    }
  });

  input.addEventListener('keydown', event => {
    state.start = input.selectionStart;
    state.end = input.selectionEnd;
  });
}