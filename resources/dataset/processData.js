const csvFilePath = './restaurants_info.csv'
const csv = require('csvtojson')
const firstList = require('./restaurants_list.json')
const jsonfile = require('jsonfile')

let outputFile = 'outputIndex.json';

let result = []
csv({delimiter: ';'})
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
  result.push(jsonObj);
})
.on('done',(error)=>{
  console.log('end');
  console.log('before merge', result);
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
  console.log('after merge', mergedArray);
  jsonfile.writeFile(outputFile, mergedArray, (error) => {console.error(error)})
})

//TODO: write basic checker to make sure data merged successfully