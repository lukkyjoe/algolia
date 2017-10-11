# algolia
Algolia project

#TODOs
• Geo location to show higher in results: https://www.algolia.com/doc/guides/searching/geo-search/#attributes-returned-within-the-results
• Fallback if blocked (fall back can be to use IP)
• Highlight filter
• Pagination / Show more: https://community.algolia.com/algoliasearch-helper-js/reference.html#pagination
• Customer questions
• Consider refactoring to using only client where helper is not necessary
• Display x results found in y seconds
• Background???
• Food types needs count
• Food types needs active state
• Disjunctive payment filter can start with the 'non options' that will be a base search?
• Hover will not show on touch. That's OK, right?

#Assumptions (to be verified)
1. For the left side bar options: I'm assuming that it's possible to select a cuisine type AND a rating. (e.g. 'Japanese' AND 4 stars)
2. I'm assuming that when ratings are selected, it's OK to return all results greater than or equal to the selected star count.
3. The 'payment options' in the side bar was cut off in the mock-up, so my best judgement was to use disjunctive faceting to let you filter by restaurants that accept *any* of the selected payment options. I used checkboxes to accomplish that. 
4. The cuisine type sidebar in the mockup only listed 7 options even though there could be a lot more; I'm assuming I can keep it to the top 7 by number of results (using "max values per facet"). Please let me know if I should have a 'display more' option anywhere. 
5. I'm assuming that you cannot select multiple cuisines
6. I'm assuming that there should be a way to de-select a cuisine, and the way to do that would be to just click on the selection again. 


# Clarification questions
1. Clarify that it's ok to load processed JSON via dashboard manually (not programtically)
2. Clarify that it's ok to add facet via dashboard (not programatically)