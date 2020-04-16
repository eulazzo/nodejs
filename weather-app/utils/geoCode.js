const request = require('request')

const geocode = (adress,callback)=>{

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1IjoibGF6emFybyIsImEiOiJjazkzNHQ2Y3AwMGpmM2xudDlnYWwwb2F0In0.bxOty9dVjap8ToYbeJyDxA&limite=1`

   request({url:url,json:true},(error,response)=>{
       if(error){
           callback('Enable to connect to location services!',undefined); 
       }else 
          if(response.body.features.lenght===0){
                callback('Enable to find location, try another search',undefined); 
         }else{
 
             callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
             });
         }
   });
}
module.exports = geocode;