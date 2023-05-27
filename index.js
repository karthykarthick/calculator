
function buttonCreation()
{
    let container = document.createElement('div')
    container.classList = 'container'
    document.body.appendChild(container)
    
    let results = document.createElement('input')
    results.classList = 'results'
    results.type = Text
    container.appendChild(results)

    let button_val = []
    for(let  i =0;i<=9;i++){
        let btn = document.createElement('button')
        btn.id = `btn-${i}`
        btn.textContent = i
        container.appendChild(btn)
        button_val.push(btn)
       console.log(button_val);
        btn.addEventListener('click',()=>{
            results.value = results.value + i
        })
    }
    
    let add = document.createElement('button')
    add.id = 'add'
    add.textContent = '+'
    container.appendChild(add)
    add.addEventListener('click',()=>{
        results.value = results.value + '+'
        console.log(results.value);
    })
    
    let subract = document.createElement('button')
    subract.id = 'subtract'
    subract.textContent = '-'
    container.appendChild(subract)
    subract.addEventListener('click',()=>{
        results.value = results.value + '-'
        console.log(results.value);
    })
    
    let multiply = document.createElement('button')
    multiply.id = 'multiply'
    multiply.textContent = '*'
    container.appendChild(multiply)
    multiply.addEventListener('click',()=>{
        results.value = results.value + '*'
        console.log(results.value);
    })
    
    let divide = document.createElement('button')
    divide.id = 'divide'
    divide.textContent = '/'
    container.appendChild(divide)
    divide.addEventListener('click',()=>{
        results.value = results.value + '/'
        console.log(results.value);
    })

    let equals = document.createElement('button')
    equals.id = 'equals'
    equals.textContent = '='
    container.appendChild(equals)
    equals.addEventListener('click',()=>{
        const calc = results.value
        const output = eval(calc)
        results.value = output
    })
}

buttonCreation()