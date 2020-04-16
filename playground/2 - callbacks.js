//callback : a function that is passed to another function as argument
//that will be called in future;

setTimeout(() => {
    console.log('2 second are up');
}, 2000);

const names = ['Lucas','Sofia','Jhon','August','Maria','Anne'];
const numbers = [1,2,3,4,4,5]

const shortName =  names.filter(name=>{
    return name ==='Sofia'
});

const sunMoreTen = numbers.map(value=> value + 10) ;

console.log(sunMoreTen);
console.log(shortName);


function fruits(...values){
   
    let idValue = 0;
    const newArray =  values.filter(fruit=>fruit =='banana' || fruit =='apple');
    const fruitsArray = [];

    newArray.forEach(fruit=>{
         fruitsArray.push({
            name:fruit,
            _id:idValue++,
            value:2.4,
            valid:true
        })     
    })
    return fruitsArray;
} 

const newFruits = fruits('banana','apple','pineapple','cherry','soursop','watermelon');
console.log(newFruits);

const geoCode = async(adress,callback)=>{
    
    setTimeout(()=>{
        const data = {
            latitude:-04534534,
            longitude:-7343434
        }
        callback(data);
    },2000);

}

geoCode('londres',(data)=>{
    console.log(data);
})


