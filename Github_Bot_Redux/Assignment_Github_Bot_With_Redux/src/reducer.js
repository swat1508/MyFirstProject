// const GitOperations = require('./services/gitOperations.js');
// const _gitOps = new GitOperations();

//import * as gitOperations from './services/gitOperations';
//const _gitOps = new gitOperations.GitOperations();

// const { createRepo } = require('./services/gitOperations');
// createRepo("myrepo-1234553453453453453453453", "this is some random description")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const DomOperations = require('./view/domOpeartions.js');
const _domOp = new DomOperations();

import * as actions from './actions.js';
const actionz = actions.actions;


import * as data from './store.js';
const state = data.state;
//import {store} from './store';

export const store = Redux.createStore(findReducer, [])
// module.exports = store;
export var globalVaribale;

export function findReducer(currentState = [], action) {
    var nextState = {
    }
   
    switch (action.type) {
        case 'createRepo': {
            console.log(nextState);
            //alert("In reducer , actionType is " + action.type);
            debugger;
            var thisObj = {};
            thisObj.type = action.type;
            thisObj.data = action.payload;
            thisObj.command = document.getElementById('userTextBox').value;
            
            if (currentState.length == 0) {
                nextState = [thisObj];
                
                window.localStorage.setItem('currentState', JSON.stringify(nextState));
                return nextState;
                break;
            }
            nextState = [...currentState, thisObj];
           
            window.localStorage.setItem('currentState', JSON.stringify(nextState));
            return nextState;

            break;
        }
        case 'viewIssues':
            console.log(nextState);
            return [...currentState, action.createRepo, action.payload];
            break;
        case 'deleteWidget': {
            nextState = JSON.parse(window.localStorage.getItem('currentState'));
            return nextState;
             
        }
        default:
            return currentState;
    }
}


store.subscribe(function () {
    //alert("subscribe- rendering");

    //var pageLoadData = window.localStorage.getItem('currentState');

    debugger;
    // var lastElementIndex = store.getState().length - 1;
    // var operationType = store.getState()[lastElementIndex].type;
    // var resultData = [];
    // resultData = store.getState()[lastElementIndex].data;
    // _domOp.setResponseInWidget(operationType, resultData, 201);
    render(false);
}
);


// function render(){
export function render(pageLoad) {
    ////alert("subscribe- rendering");
    _domOp.clearAllWidgets();
    var repository = [];
    if (pageLoad) {
        if (!window.localStorage.getItem('currentState')) {
            return;
        }
        repository = window.localStorage.getItem('currentState');
        repository = JSON.parse(repository);
    } else {

        repository = store.getState();
    }
    var lastElementIndex = repository.length - 1;

    //store.getState().forEach(function(element) {
    repository.forEach(function (element) {
        var operationType = element.type;
        if (operationType == "createRepo") {
            _domOp.setResponseInWidget(element, 201);
        }
    });
}

