
const { log } = require('console');
const {readFile} =  require('fs/promises')

describe('Basic test', ()=>{
    it('Is text found', async ()=>{
        const text = (await readFile('./style.css')).toString().toLocaleLowerCase();
    
        expect(text).toMatch(/@media/);        
        let mod = text.substring(text.indexOf('@media'));
        
        checkProps('img', mod, 'display');
        checkProps('img', mod, 'block');
        checkProps('h1', mod, 'font-size');
        checkProps('h1', mod, '3em');
        checkProps('#content', mod, 'display');
        checkProps('#content', mod, 'flex');
        checkProps('#content', mod, 'justify-content');
        checkProps('#content', mod, 'center');

        checkProps('form', mod, 'display');
        checkProps('form', mod, 'grid;');
        checkProps('form', mod, 'grid-template-columns');
        checkProps('form', mod, '1fr');
        checkProps('form', mod, '3fr');
        checkProps('form', mod, 'width');
        checkProps('form', mod, '600px');

        checkProps('button', mod, 'grid-column');
        checkProps('button', mod, '1/3|1 / 3| 1/span 2 | 1 / span 2');
        checkProps('button', mod, 'justify-self');
        checkProps('button', mod, 'center');
        checkProps('button', mod, 'width');
        checkProps('button', mod, '70%');
    })
})

function checkProps(selector, text, key){
    let temp = text.substring(text.indexOf(selector));
    let x = temp.indexOf('}');
    temp = temp.substring(0, x);    
    
    expect(temp).toMatch(new RegExp(key));

    return temp.includes(key)
   
}