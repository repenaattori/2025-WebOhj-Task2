
const {checkProps} = require('./func');
const {readFile} =  require('fs/promises')

describe('Basic test', ()=>{
    it('Is text found', async ()=>{
        const text = (await readFile('./style.css')).toString().toLocaleLowerCase();
    
        expect(text).toMatch(/@media/);        
        let mod = text.substring(text.indexOf('@media'));
    
        checkProps('form', mod, 'display');
        checkProps('form', mod, 'grid;');
        checkProps('form', mod, 'grid-template-columns');
        checkProps('form', mod, '1fr');
        checkProps('form', mod, '3fr');
        checkProps('form', mod, 'width');
        checkProps('form', mod, '600px');
    })
})
