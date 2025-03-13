function convert(){
    let celsius=parseFloat(document.getElementById('celsius').value);

    let fahrenheit=(celsius*9/5)+32;
    document.getElementById('results').innerText= fahrenheit;
}


function clear() {
    document.getElementById('celsius').value = '';
    document.getElementById('results').innerText = '';
}

document.getElementById('clearButton').addEventListener('click', clear);

