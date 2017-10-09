const csvFilePath = './restaurants_info.csv'
const csv = require('csvtojson')
const firstList = require('./restaurants_list.json')
const jsonfile = require('jsonfile')

let outputFile = 'outputIndex.json';

let result = []
csv({delimiter: ';'})
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
  jsonObj.stars_count = Number(jsonObj.stars_count); // change stars and review counts back to number type (csvtojson module type coerced original data to string)
  jsonObj.reviews_count = Number(jsonObj.reviews_count); 
  result.push(jsonObj);
})
.on('done',(error)=>{
  let mergedArray = [];
  for (let i = 0; i < result.length; i++){
    let mergedObj = {};
    for (let j = 0; j < firstList.length; j++){
      if (Number(result[i]['objectID']) === firstList[j]['objectID']){
        mergedObj = Object.assign({}, result[i], firstList[j]);
        mergedArray.push(mergedObj);
      }
    }
  }
  jsonfile.writeFile(outputFile, mergedArray, (error) => {console.error(error)})
})

//TODO: write basic checker to make sure data merged successfully