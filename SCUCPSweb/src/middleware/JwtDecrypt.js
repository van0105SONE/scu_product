export function JwtDecrypt(token){

    //why is using split 
     var base64Url = token.split(".")[1];

     // don't understand replace
     var base64 =base64Url.replace(/-/g, "+").replace(/_/g, "/");
     var jsonPayload = decodeURIComponent(
        atob(base64).split("").map( function(e){
            return "%" + ("00"+ e.charCodeAt(0).toString(16)).slice(-2);
        }).join("")
     )
     return JSON.parse(jsonPayload)
}