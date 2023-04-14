
let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Authorization": "	Token 9c8b06d329136da358c2d00e76946b0111ce2c48"
}

let response = await fetch("https://food2fork.ca/api/recipe/search/?page=2&query=beef%20carrot%20potato%20onion", { 
  method: "GET",
  headers: headersList
});

let data = await response.text();
console.log(data);
