//const RequestHandler = require("./requestHandler.js");

import './../scss/mystyles.scss';
import './../css/mystyles.css';
//require('./handlerAndcontroller/eventListener.js');
import { determineOperation } from './handlerAndcontroller/controller';
//const reducer = require('./../reducer.js');
//import {createRepoService } from './../services/createRepo_service';
import {render, store} from './reducer';
import actionz from './actions';


// const InvokeRecast = require('./services/recastOperations.js');
// const $reCast = new InvokeRecast();
import {invokeReact } from './services/recastOperations';

// module.exports = $(document).ready(function () {
     $(document).ready(function () {

    $('#userTextBox').keyup(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
          //  $reCast.invokeReact();
          invokeReact();
        }
    });

//create repo
$("#createRepoOk").on('click', function(){
    debugger;
    determineOperation();
});
$("#createIssueOk").on('click', function(){
    debugger;
    determineOperation();
});
$("#closeIssueOk").on('click', function(){
    debugger;
    determineOperation();
});
$("#addCommentOk").on('click', function(){
    debugger;
    determineOperation();
});
$("#addCollaboratorOk").on('click', function(){
    debugger;
    determineOperation();
});

window.onload=(function(){
    debugger;
//alert("Page Refresh Event");
render(true);
})();


$('#myWidget').on('click', '.close', function () {
    const $target = $(this).closest('.widget');
    //$target.hide();

    var deleteId = $target.attr('id');
    deleteId=deleteId.substring(deleteId.indexOf('_')+1);
    console.log("deleteId",deleteId);
    var i_deleted = deleteId - 1;
    var stateArray = JSON.parse(window.localStorage.getItem('currentState'));
    stateArray.splice(i_deleted,1);
    console.log(stateArray)
    window.localStorage.setItem('currentState', JSON.stringify(stateArray));
    store.dispatch({type: actionz.action_deleteWidget});
        
})




})

