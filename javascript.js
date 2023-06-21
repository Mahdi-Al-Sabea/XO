

let matrix=[];
let x='x';

const counter={
    Xwins:0,Owins:0,ties:0
}



    function play(k){

        let element=document.getElementById(k);
        let bool=check();

                if(bool===true){
                    return console.log("finished");
                }


                if( x==="x"){
                    element.style.backgroundImage = "url('C:/Users/mahdi/OneDrive/Desktop/C++/js3/close.png')";
                    var index = parseInt(element.innerText);
                    matrix[index] = 'x'; // Assigning 'x' to the element at the parsed index

                        change();

                    let bool=check();
                    if(bool===true){
                        counter.Xwins++;
                    return console.log(`x wins ${counter.Xwins}`);       }
                    else
                    return console.log("continue");
                
                }
                
                else{
                    element.style.backgroundImage = "url('C:/Users/mahdi/OneDrive/Desktop/C++/js3/circle-ring.png')";
                    var index = parseInt(element.innerText);
                    matrix[index] = 'o'; // Assigning 'x' to the element at the parsed index

                        change();

                    let bool=check();
                    if(bool===true){
                        counter.Owins++;
                    return console.log(`x wins ${counter.Owins}`);}
                    else
                    return console.log("continue");
                }

    }











    function change(){ 

        if(x==='x'){x='o';}
        else
            x='x';
    }










    function check(){

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
        ){console.log("true"); return true;}
    
        else
            return false;
    }


   


    function reset(){
        let score=document.getElementById('score');
        let elements=document.getElementsByClassName('col-4');
        let elementArray=Array.from(elements);

       

        for(var i=0;i<matrix.length;i++){
            matrix[i]='null';
        }



        for(var i=0;i<elementArray.length;i++){
            elementArray[i].style.backgroundImage="none";
        }

        score.innerText=`X wins:${counter.Xwins}/ O wins:${counter.Owins} `;
    }






