const display = document.getElementById('display');
    const output = document.querySelector('.output-container')
    const toggleButton = document.getElementById('toggle');
    const circle = document.querySelector('.circle');
    const light = document.querySelector('.toggle-button');
    const buttons = document.querySelector('input');
    
    
        function toDisplay(input){
          display.textContent += input; 
        }
        function clearDisplay(){
          display.textContent="";
          output.textContent ="";
        }
        function compute(){
          
          let operator = display.textContent;
          if (operator.includes('√')) {
        const parts = operator.split('√');
        const number = parts[1]; // Get the number after the square root symbol
        if (!isNaN(number) && number.trim() !== '') {
            const result = Math.sqrt(Number(number)); // Calculate square root
            output.textContent = result;
            return;
            }
        }
          operator = operator.replace(/÷/g, '/');
          
          try {
            const result = eval(operator); 
                  output.textContent = result;
          } catch (error) {
            output.textContent = "error";
          }
        }
        function deleteLast(){
          display.textContent = display.textContent.slice(0,-1);
        }
        toggleButton.addEventListener('click', () =>{
          document.body.classList.toggle('dark-mode');
          circle.classList.toggle('after');
          toggleButton.classList.toggle('light');
          document.body.classList.toggle('light-mode');
          output.classList.toggle('dark');
          display.classList.toggle('dark');
        })
        
