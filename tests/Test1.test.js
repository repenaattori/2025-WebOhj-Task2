
const {readFile} =  require('fs/promises');
const {checkProps} = require('./func');

describe('Basic test', ()=>{
    it('Is text found', async ()=>{
        const text = (await readFile('./style.css')).toString().toLocaleLowerCase();
    
        expect(text).toMatch(/@media /);       
        expect(text).toMatch(/min-width/)
        let mod = text.substring(text.indexOf('@media'));

        
        checkProps('img', mod, 'display');
        checkProps('img', mod, 'block');
        checkProps('h1', mod, 'font-size');
        checkProps('h1', mod, '3em');
    })
})
