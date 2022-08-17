let numVisitors;
var counterContainer = document.querySelector(".website-counter");

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
   console.log(numVisitors);
};  


addEventListener('load', (event) => {
    console.log('page is loaded');
    putData();
    
});



