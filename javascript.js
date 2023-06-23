let matrix=[];
let x='x';
let toggle=0;




        const counter={
            Xwins:0,Owins:0,ties:0
        }



    function play(k){

        let element=document.getElementById(k);
        

                if(toggle===1){return console.log('finished');}
                
                if( x==="x"){
                    element.style.backgroundImage = "url('close.png')";
                    var index = parseInt(element.innerText);
                    matrix[index] = 'x'; // Assigning 'x' to the element at the parsed index

                        change();
                        check('x');
                        return console.log("continue");}
                
                else{
                    element.style.backgroundImage = "url('circle-ring.png')";
                    var index = parseInt(element.innerText);
                    matrix[index] = 'o'; // Assigning 'x' to the element at the parsed index

                        change();

                       check('y');
                        return console.log("continue");

    }
    }










    function change(){ 

        if(x==='x'){x='o';}
        else
            x='x';
    }








let player='';

    function check(player){

        if(  matrix[1]=="x" && matrix[2]=="x" && matrix[3]=="x"  ||
            matrix[4]=="x" && matrix[5]=="x" && matrix[6]=="x"  ||
            matrix[7]=="x" && matrix[8]=="x" && matrix[9]=="x"  ||
            matrix[1]=="x" && matrix[4]=="x" && matrix[7]=="x"  ||
            matrix[2]=="x" && matrix[5]=="x" && matrix[8]=="x"  ||
            matrix[3]=="x" && matrix[6]=="x" && matrix[9]=="x"  ||
            matrix[1]=="x" && matrix[5]=="x" && matrix[9]=="x"  ||
            matrix[3]=="x" && matrix[5]=="x" && matrix[7]=="x"  ||
            matrix[1]=="o" && matrix[2]=="o" && matrix[3]=="o"  ||
            matrix[4]=="o" && matrix[5]=="o" && matrix[6]=="o"  ||
            matrix[7]=="o" && matrix[8]=="o" && matrix[9]=="o"  ||
            matrix[1]=="o" && matrix[4]=="o" && matrix[7]=="o"  ||
            matrix[2]=="o" && matrix[5]=="o" && matrix[8]=="o"  ||
            matrix[3]=="o" && matrix[6]=="o" && matrix[9]=="o"  ||
            matrix[1]=="o" && matrix[5]=="o" && matrix[9]=="o"  ||
            matrix[3]=="o" && matrix[5]=="o" && matrix[7]=="o"  
        ){console.log("true");
    
        if(player==='x'){
            toggle=1;
            counter.Xwins++;
            let winningScreen=document.getElementById("winning");
            let monkeys=document.getElementsByClassName('monkey');   
            winningScreen.style.visibility='visible';
            let txt=document.getElementById('txt');
            txt.innerText="X WINS!!!!";
            for(var i=0;i<monkeys.length;i++){
                monkeys[i].style.visibility='visible';
                    
            }
            setInterval(rotateBox, 50);

          
          
            
         


// Call the rotateBox function every 500 milliseconds








        return true;}
        


        else if(player==='y'){
            toggle=1;
            counter.Owins++;
            let winningScreen=document.getElementById("winning");
            let txt=document.getElementById('txt');
            txt.innerText="O WINS!!!!";
        winningScreen.style.visibility='visible';
        for(var i=0;i<monkeys.length;i++){
            monkeys[i].style.visibility='visible';
            
        }
        setInterval(rotateBox, 50);

       
   



// Call the rotateBox function every 500 milliseconds

    return true;}
    }





    else
    return false;
  
    }





        


    
    
    
    
 

   


    function reset(){
        let score=document.getElementById('score');
        let elements=document.getElementsByClassName('col-4');
        let elementArray=Array.from(elements);

       toggle=0;

        for(var i=0;i<matrix.length;i++){
            matrix[i]='null';
        }



        for(var i=0;i<elementArray.length;i++){
            elementArray[i].style.backgroundImage="none";
        }

        score.innerText=`X wins:${counter.Xwins}/ O wins:${counter.Owins} `;
    }




    function exit(){
        let winningScreen=document.getElementById("winning");   
        winningScreen.style.visibility='hidden';
        reset();
        let monkeys=document.getElementsByClassName('monkey'); 
        for(var i=0;i<monkeys.length;i++){

            monkeys[i].style.visibility='hidden';
            
        }
    }





    var rotationAngle = 0;
    let monkeys=document.getElementsByClassName('monkey');   
    function rotateBox() {
      // Update the rotation angle
      rotationAngle += 10;
    
      // Apply the rotation
      for(var i=0;i<monkeys.length;i++){
        monkeys[i].style.transform = `rotate(${rotationAngle}deg)`;        
    }
      
    }





