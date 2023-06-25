let checkNum = () => {
    event.preventDefault();

    let inputNum = document.querySelector("#number").value;

    if(inputNum % 2 === 0){

        document.querySelector("#result").innerHTML = `The number ${inputNum} is an even number`;

    }else{

        document.querySelector("#result").innerHTML = `The number ${inputNum} is an odd number`;

    }

}