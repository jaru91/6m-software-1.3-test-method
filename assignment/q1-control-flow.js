/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "PROD"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

if ( env == "DEV"){
    
}else if(env == "STAGE"){
    databaseCredential = "stageuser:password"
}else if(env== "PROD"){
    databaseCredential = "produser:password"
}


console.log(`Database credential for environment ${env} is ${databaseCredential}`);
