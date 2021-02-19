function save(){
    let storage = window.localStorage;
    let key = "nickname";
    let value = document.getElementById("nomeUtente").value;
    let button = document.getElementById("unsubscribe");
    let otherbutton = document.getElementById("subscribe");
    try{
        storage.setItem(key,value);
        alert("Ti sei iscritto alla nostra fantatsica newsletter!");
        button.disabled="";
        otherbutton.disabled="disabled";

    }catch(e){
        alert("Qualcosa è andato storto...")
    }
}

function deleteAll(){
    let storage=window.localStorage;
    let button = document.getElementById("unsubscribe");
    let otherbutton = document.getElementById("subscribe");

    storage.clear();
    alert("Ti sei disicritto correttamente. Ci mancherai...")
    button.disabled="disabled";
    otherbutton.disabled="";

}


function change(){
    let inputs = document.querySelector("input[type='text']");
    let button = document.querySelector("input[type='submit']");
    button.disabled="";

    for(let i = 0; i < inputs.length;i++){
        if (inputs[i].value == ""){
            button.disabled="disabled";
            break;
        }
    }
}

function saluta(){
    let storage=window.localStorage;
    let key = nickaname;
    let value = storage.getItem(key);
    alert("Benvenut* nel nostro fantastico sito "+value+"!");
}