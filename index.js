let numVisitors;
var counterContainer = document.querySelector(".website-counter");
/**
 * Function that sends a PUT request to API gateway which then triggers a lambda function that
 * updates an item in a dynamoDB table which keeps a keeps a counter of how many people have visited the page.
 */
const putData = async () => {
    const response = await fetch('https://8g17hv4jni.execute-api.us-east-1.amazonaws.com/items', 
    {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify('')
    });

   const data = await response.json();
   numVisitors = data['body']['num']['N']
   counterContainer.innerHTML = numVisitors;
   
};
putData();




