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
         
    })
    
}

function generateHex(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}