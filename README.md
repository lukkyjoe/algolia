# algolia
Algolia project

#Assumptions (verified with Cory)
1. For the left side bar options: I'm assuming that it's possible to select a cuisine type AND a rating. (e.g. 'Japanese' AND 4 stars)
2. I'm assuming that when ratings are selected, it's OK to return all results greater than or equal to the selected star count.
3. The 'payment options' in the side bar was cut off in the mock-up, so my best judgement was to use disjunctive faceting to let you filter by restaurants that accept *any* of the selected payment options. I used checkboxes to accomplish that. 
4. The cuisine type sidebar in the mockup only listed 7 options even though there could be a lot more; I'm assuming I can keep it to the top 7 by number of results (using "max values per facet"). Please let me know if I should have a 'display more' option anywhere. 
5. I'm assuming that you cannot select multiple cuisines
6. I'm assuming that there should be a way to de-select a cuisine, and the way to do that would be to just click on the selection again. 


# Assignment notes
1. Import script is in 'resources > dataset' folder, and is named processData.js. The script produces a json file called 'outputIndex.json' which I loaded to Algolia via the dashboard. 

