explanation:

Function apartmentHunting() returns the optimal index which ensures shortest path to reach the rquirements specified.
Two for loops are used inside one another.

for(let i=0;i<blocks.length;i++)
The first For loop is used to loop through the blocks by specifying the length of blocks.

for(let j=0;j<reqs.length;i++)
The second For loop is used to loop through the reqs list by specifying the length of reqs.

The logic here used is that we are initializing a variable count and looping through the blocks to maintain the count of the requirements of each block and stored the count details in an arrays carrays.

Now we are checking for a condition that count value should be greater than or equal to 2 and checking that either of the two requirements must be near(gym,school,store) in order to get shortest path i.e., gym and school should be present or school or store should be present which will give a shortest path. If store and gym are present and school is absent then it will give a longest path from gym to store so i made this condition(i.e., store and gym are present) as an exception.
After this condition is met the index has been returned to the function call made(i.e., i+1 because array index starts from 0).
__*__

