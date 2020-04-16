const request = require('request')
const url = 'https://api.darksky.net/forecast/c867ea8753c9f3e3149c850144931fb8/37.8267,-122.4233'

request({url, json:true},async(err,response)=>{
    if(err) {
        throw err
    }else if (response.body.error){
        console.log('Enable to find location    ')
    }else{

        const data = await response.body.currently
        console.log(`ìt is  currenctly ${data.temperature} degrees out there. There is a ${data.precipProbability}% chance of rain!`);
    };


})
const geocodeGeo = process.env.CODEURL
request({geocodeGeo,json:true},async(err,response)=>{
    if(err){
        console.log(err);  
    }else if(!response.body.features.lenght){
        console.log('Enable to connect service')
    }else{
        const latitude= await response.features[0].caenter[1]
        const longitude= await response.features[0].center[0]
    }

})
