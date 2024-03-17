function modifyArray(x){
  let res = [...x];
  for(let i = 0; i < res.length; i++){
    if(res[i].length < 2)
      console.log('');
    else 
      console.log(res[i].slice(0, 2) + res[i].slice(res[i].length-2, res[i].length));
  }
}

let a = ['spring', 'cat', 'it'];
modifyArray(a);
