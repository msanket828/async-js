

let ingredients={
  fruits: ['apple','penuts','strawberry'],
  flavour: ['chocolate','vanila','pista'],
  liquids: ['ice','water'],
  serveItem: ['cone', 'bottle', 'glass']
}

is_shopOpen=false;
function order(time,work){
  return new Promise((resolve,reject)=>{
    if(is_shopOpen) {
      setTimeout(function(){
        resolve(work());
      },time);
    } else {
      reject(console.log('shop is closed, sorry for inconvience'));
    }
  })
}

order(1000,()=>{
  console.log(`i love to have ${ingredients.fruits[2]} ${ingredients.flavour[0]} icecream`);
}).then(()=> {
  return order(2000,()=>console.log(`${ingredients.fruits[2]} have been chopped`));
}).then(()=>  {

  return order(2000,()=> console.log(`${ingredients.liquids[0]} has been added`));
}).then(()=> {
  return order(2000,()=> console.log(`icecream have been added in ${ingredients.serveItem[0]}`));
}).then(()=> {
  return order(2000,()=> {
    console.log(`let enjoy your ${ingredients.flavour[0]} icecream`);
  });
}).catch(()=> {
  console.log('customer  left');
}).finally(()=>{
  console.log('day is end');
})