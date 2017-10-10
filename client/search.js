let algoliasearch = require('algoliasearch');
let algoliasearchHelper = require('algoliasearch-helper');

let client = algoliasearch('OXB537J4TM', 'fdfc76955aeeeccf7a721bffc0878b43') //TODO: consider hiding?
let helper = algoliasearchHelper(client, 'Restaurants', {
  facets: ['food_type', 'stars_count', 'payment_options'], //TODO: check if still necessary
  disjunctiveFacets: ['payment_options']
})
let index = client.initIndex('Restaurants');


module.exports.client = client;
module.exports.helper = helper;
module.exports.index = index;