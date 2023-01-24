const api_url = "https://jsonplaceholder.typicode.com/users"

function getApiData(url){
    // method given by javascript to call api we cannot call it directly older version is HTTPResponse
    // whenever we call an api through fetch we have to show data in json format so we have to convert this into json format this json format also gives us promise 

    fetch(url)
    .then(res=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>(console.log(err)));
    
}
getApiData(api_url)