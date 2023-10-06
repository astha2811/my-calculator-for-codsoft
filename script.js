let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).foreach((button)=>{
  button.addeventlistener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('problem').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('problem').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('problem').value = string;
      }
  })
})