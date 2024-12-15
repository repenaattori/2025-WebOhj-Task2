function checkProps(selector, text, key){
    let temp = text.substring(text.indexOf(selector));
    let x = temp.indexOf('}');
    temp = temp.substring(0, x);    
    
    expect(temp).toMatch(new RegExp(key));

    return temp.includes(key);
}

module.exports={
    checkProps
}