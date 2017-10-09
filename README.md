# algolia
Algolia project

# Clarification questions
1. Clarify that it's ok to load processed JSON via dashboard manually (not programtically)
2. Clarify that it's ok to add facet via dashboard (not programatically)
3. Clarify filter/facet UI/UX requirements
4. Clarify pagination requirement for showing food_type facet

#TODOs
1. Search for restaurants by name, cuisine, location
2. Format stars_count to number type
3. Payment options are nested inside an array

#Assumptions (to be verified)
1. Cuisine is toggle
2. Rating is filter
3. Payment options is multiple choice
4. Can you select ratings and also cuisine type?

Hello Dustin, I made several assumptions in my assignment that I want to verify with you. 
1) For the left side bar options: I'm assuming that it's possible to select a cuisine type AND a rating. (e.g. 'Japanese' AND 4 stars)
2) I'm assuming that when ratings are selected, it's OK to return all results greater than or equal to the selected star count
3) The 'payment options' in the side bar was cut off in the mock up, so my best judgement was to use disjunctive faceting to let you select multiple checkboxes for payment. 