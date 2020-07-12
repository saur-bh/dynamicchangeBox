function changeColor(){
    var bc = document.getElementsByName('select-color');
    switch(bc[0].value){
        case "red":
                document.getElementById('toChange').style.backgroundColor=bc[0].value;
                break;
                case "yellow":
                        document.getElementById('toChange').style.backgroundColor=bc[0].value;
                        break;
                        case "green":
                        document.getElementById('toChange').style.backgroundColor=bc[0].value;
                        break;
                       
    }
    }

    function reset(){
        document.getElementById('toChange').style.backgroundColor="Black";
    }



