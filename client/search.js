let algoliasearch = require('algoliasearch');
let algoliasearchHelper = require('algoliasearch-helper');

let client = algoliasearch('OXB537J4TM', 'fdfc76955aeeeccf7a721bffc0878b43') //TODO: consider hiding?
let helper = algoliasearchHelper(client, 'Restaurants')

helper.on('result', (content) => {console.log(content)})

helper.search();