const {checkProps} = require('./func');
const {readFile} =  require('fs/promises')

describe('Basic test', ()=>{
    it('Is text found', async ()=>{
        const text = (await readFile('./style.css')).toString().toLocaleLowerCase();
    
        expect(text).toMatch(/@media/);        
        let mod = text.substring(text.indexOf('@media'));
        
        checkProps('#content', mod, 'display');
        checkProps('#content', mod, 'flex');
        checkProps('#content', mod, 'justify-content');
        checkProps('#content', mod, 'center');        
    })
})
