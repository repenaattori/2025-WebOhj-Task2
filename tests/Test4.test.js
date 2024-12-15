
const {checkProps} = require('./func');
const {readFile} =  require('fs/promises')

describe('Basic test', ()=>{
    it('Is text found', async ()=>{
        const text = (await readFile('./style.css')).toString().toLocaleLowerCase();
    
        expect(text).toMatch(/@media/);        
        let mod = text.substring(text.indexOf('@media'));
        
        checkProps('button', mod, 'grid-column');
        checkProps('button', mod, '1/3|1 / 3| 1/span 2 | 1 / span 2');
        checkProps('button', mod, 'justify-self');
        checkProps('button', mod, 'center');
        checkProps('button', mod, 'width');
        checkProps('button', mod, '70%');
    })
})

