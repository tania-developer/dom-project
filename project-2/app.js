let toast = null;

window.onload=()=>{
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    //const toast = document.createElement('div');

    btn.addEventListener('click', function(){
        const bgColor = generateHex();
        root.style.backgroundColor = bgColor;
        output.value = bgColor
    })

    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);
        if(toast !== null){
            toast.remove();
            toast=null;
        }
        if(isValidHex(output.value)){
            toast = document.createElement('div');
            toast.className = 'toast-container toast-msg-in' 
            toast.innerText = `${output.value} copied`;
            root.appendChild(toast);  

            toast.addEventListener('click', function(){
                toast.classList.remove('toast-msg-in');
                toast.classList.add('toast-msg-out');
                toast.addEventListener('animationend', function(){
                    toast.remove();
                    toast = null;
                 })
            })
        } else {
            alert('Invalid color code')
        }
         
    })

    output.addEventListener('keyup', function(e){
        if(isValidHex(e.target.value)){
            root.style.backgroundColor = e.target.value;
        }
    })
    
}

function generateHex(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

/**
 * 
 * @param {string} color 
 */

function isValidHex(color){
    if(color.length !== 7) return false
    if(color[0] != '#') return false;

    color = color.substring(1);
    return /^[0-9A-Fa-f]{6}$/i
}