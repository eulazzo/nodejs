const request = require('request');
const geocode = require('./utils/geoCode');

// const url = 'https://api.darksky.net/forecast/c867ea8753c9f3e3149c850144931fb8/37.8267,-122.4233'

// request({url, json:true},async(err,response)=>{
//     if(err) {
//         throw err
//     }else if (response.body.error){
//         console.log('Enable to find location    ')
//     }else{
//          const data = await response.body.currently
//         console.log(`ìt is  currenctly ${data.temperature} degrees out there. There is a ${data.precipProbability}% chance of rain!`);
//     };


// })
// const geocodeGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoibGF6emFybyIsImEiOiJjazkzNHQ2Y3AwMGpmM2xudDlnYWwwb2F0In0.bxOty9dVjap8ToYbeJyDxA'
// request({url:geocodeGeo,json:true},async(err,response)=>{
//     if(err){
//         console.log(err);  
//     }else if(response.body.features.lenght===0){
//         console.log('Enable to connect service')
//     }else{
//         const latitude= await response.features[0].center[1]
//         const longitude= await response.features[0].center[0]
//         console.log(latitude,longitude);
//     }

// })
 

geocode ('Londres',(error,data)=>{
    console.log("error",error);
    console.log("Data",data);
});