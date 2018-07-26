
const DomOperations = require('./../view/domOpeartions.js');
const _domOp = new DomOperations();

const reducer = require('./../reducer.js');
import actionz from './../actions';


////alert(actionz.action_createRepo);

import {globalVaribale } from './../reducer';


     export const processFetchApiWithPost = function(objData){ 
 // processFetchApiWithPost(objData){
    debugger;
     var authorizationToken  =  'token  178e2fc6c7805fcef9cdac0504bdf50f2f053a04';
  
    var statusCode;
    var myArray =  [];
       fetch(objData.url, {
               method: objData.method,
               headers: {
                   "Content-Type": "application/json; charset=utf-8",
                   "Authorization": authorizationToken
               },
               body: JSON.stringify(objData.jsonData)
           }
       )
   
       .then((response) => {
           debugger;
           statusCode = response.status;
           if (response.ok) {
               return response.json();
           } else {
               debugger;                                   
               _domOp.setResponseInWidget(objData.operation,myArray,statusCode);            
           }
       })
       .then((jsonData) => {
           myArray = jsonData;          //populate data   
      //     _domOp.setResponseInWidget(objData.operation,myArray,statusCode);

           if(objData.operation == "createRepo"){
               //alert("call redux operation here");
               debugger;          
               reducer.store.dispatch({type: actionz.action_createRepo, payload:myArray });               
           }


       })
       .catch((err) => {
           debugger;
           console.log("Error:", err.message);
       })   
};

// processFetchApiWithGet(objData){
    export const processFetchApiWithGet = function(objData){ 
    debugger;
     var authorizationToken  =  'token  178e2fc6c7805fcef9cdac0504bdf50f2f053a04';
  
    var statusCode;
    var myArray =  [];
       fetch(objData.url, {
               method: objData.method,
               headers: {
                   "Content-Type": "application/json; charset=utf-8",
                   "Authorization": authorizationToken
               }
              
           }
       )
   
       .then((response) => {
           debugger;
           statusCode = response.status;
           if (response.ok) {
               return response.json();
           } else {
               debugger;            
               _domOp.setResponseInWidget(objData.operation,myArray,statusCode);          
              // throw new Error('No response found');
           }
       })
       .then((jsonData) => {
           myArray = jsonData;
           _domOp.setResponseInWidget(objData.operation,myArray,statusCode);
       })
       .catch((err) => {
           debugger;
           console.log("Error:", err.message);
       })   
};

//}

//module.exports = {processFetchApiWithPost, processFetchApiWithGet};

/*
const createRepo = function (repoName, repoDesc) {
    console.log("called createRepo function");
    const url = "https://api.github.com/user/repos";
    const body = {
        "name": repoName,
        "description": repoDesc,
        "homepage": "https://github.com",
        "private": false,
        "has_issues": true,
        "has_wiki": true
    };
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'token 4604d87b3c00a4f9bf3355197251cd66337c8d9b',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
          .catch(err => reject(err));
            
    });
}

const createIssue = 

module.exports = {createRepo, createIssue, getRepo, addCollaborator};
*/

