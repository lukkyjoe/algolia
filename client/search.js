let algoliasearch = require('algoliasearch');
let algoliasearchHelper = require('algoliasearch-helper');

module.exports.client = algoliasearch('OXB537J4TM', 'fdfc76955aeeeccf7a721bffc0878b43') //TODO: consider hiding?
module.exports.helper = algoliasearchHelper(client, 'Restaurants')