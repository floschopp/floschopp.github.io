//CONSTANTS
const totalchecklists = 3;

//GLOBALS
var checklistCurrent = 0;
var checklistItemCurrent = 0;
var checklistItemsTotal = 0;

//Functions for Buttons
function checklistMenuListButton(_checklistNum) {
  //set globals
  checklistCurrent = _checklistNum;
  checklistItemCurrent = 1;
  checklistItemsTotal = determineChecklistItemsTotal(_checklistNum);
  //hide menu
  document.getElementById("checklistMenu").style.display = "none";
  //hide emer checklist menu
  document.getElementById("emerChecklistMenu").style.display = "none";
  //show checklist 1
  document.getElementById("checklist" + _checklistNum).style.display = "block";
  //show checklist navbuttons
  document.getElementById("checkedButton").style.display = "block";
  document.getElementById("resetButton").style.display = "block";
  //show checklist Menu Button
  document.getElementById("checklistMenuButton").style.display = "block";
  //set active checklist item
  activeChecklistItem(checklistCurrent, checklistItemCurrent);
}

function emerChecklistMenuButton() {
  //reset current checklist if there is a active checklist
  if(checklistCurrent != 0) {
    resetChecklistButton(true);
  }
  //hide normal checklist menu
  document.getElementById("checklistMenu").style.display = "none";
  //hide current checklist if there is a active checklist
  if(checklistCurrent != 0) {
    document.getElementById("checklist" + checklistCurrent).style.display = "none";
  }
  //hide checklist navbuttons
  document.getElementById("checkedButton").style.display = "none";
  document.getElementById("resetButton").style.display = "none";
  document.getElementById("nextChecklistButton").style.display = "none";
  //hide checklist completed message
  document.getElementById("checklistCompleted").style.display = "none";  
  //show emergency checklist menu
  document.getElementById("emerChecklistMenu").style.display = "block";
  //show checklist Menu Button
  document.getElementById("checklistMenuButton").style.display = "block";
}

function checklistMenuButton() {
  //reset current checklist if there is a active checklist
  if(checklistCurrent != 0) {
    resetChecklistButton(true);
  }
  //show menu
  document.getElementById("checklistMenu").style.display = "block";
  //hide current checklist if there is a active checklist
  if(checklistCurrent != 0) {
    document.getElementById("checklist" + checklistCurrent).style.display = "none";
  }
  //hide checklist navbuttons
  document.getElementById("checkedButton").style.display = "none";
  document.getElementById("resetButton").style.display = "none";
  document.getElementById("nextChecklistButton").style.display = "none";
  //hide checklist Menu Button
  document.getElementById("checklistMenuButton").style.display = "none";
  //hide checklist completed message
  document.getElementById("checklistCompleted").style.display = "none";
  //hide emergency checklist menu
  document.getElementById("emerChecklistMenu").style.display = "none";

}

function resetChecklistButton(protectionOverride) {
  if(protectionOverride != true) {
    //protection against accidental reset
    if(confirm("RESET - are you sure?") == false){
      return;
    }
  }
  // reset color of all checklist items of current checklist
  for (var i = 1; i < checklistItemsTotal+1; i++) { 
    document.getElementById(checklistCurrent + "i" + i).style.color = "#196e6f";
  }
  // reset checkboxes
  for (var i = 1; i < checklistItemsTotal+1; i++) { 
    document.getElementById(checklistCurrent + "b" + i).checked = false;
  }
  // deactivate current checklist item
  //check if checklist is completed
  if (checklistItemCurrent > checklistItemsTotal) {
    deactiveChecklistItem(checklistCurrent, checklistItemCurrent-1);
  }
  else {
    deactiveChecklistItem(checklistCurrent, checklistItemCurrent);
  }
  // set first checklist item active
  checklistItemCurrent = 1;
  activeChecklistItem(checklistCurrent, checklistItemCurrent);
  //hide checklist completed message
  document.getElementById("checklistCompleted").style.display = "none";
  //hide next checklist button
  document.getElementById("nextChecklistButton").style.display = "none";
  //show Checked Button
  document.getElementById("checkedButton").style.display = "block";
}

function checkedChecklistButton() {
  // check current checklist item
  checkChecklistItem(checklistCurrent, checklistItemCurrent);
  // deactivate current checklist item
  deactiveChecklistItem(checklistCurrent, checklistItemCurrent);
  // increment current checklist item
  checklistItemCurrent++;
  // check if checklist is completed
  if (checklistItemCurrent > checklistItemsTotal) {
    // show checklist completed message
    document.getElementById("checklistCompleted").style.display = "block";
    //hide Checked Button
    document.getElementById("checkedButton").style.display = "none";
    //check if all checklists are completed
    //check if current checklist is emer checklist
    if(checklistCurrent > 20) {
      return;
    }
    //check if last checklist is completed
    if(checklistCurrent == totalchecklists) {
      return;
    }
    //show next checklist button
    document.getElementById("nextChecklistButton").style.display = "block";
    return;
  }
  // if checklist not completed:
  // set next checklist item active
  activeChecklistItem(checklistCurrent, checklistItemCurrent);
}

function nextChecklistButton() {
  //reset current checklist
  resetChecklistButton(true);
  //hide current checklist
  document.getElementById("checklist" + checklistCurrent).style.display = "none";
  //show next checklist
  checklistMenuListButton(checklistCurrent+1);
  //check if all checklists are completed!!!
}


//Functions for Tasks
//Checklist
function checkChecklistItem(checklistnum, itemnum) {
  // change the color of the checklist item to green
  document.getElementById(checklistnum + "i" + itemnum).style.color = "green";
  // check checkbox
  document.getElementById(checklistnum + "b" + itemnum).checked = true;
}

function activeChecklistItem(checklistnum, itemnum) {
  // set white border around checklist item
  document.getElementById(checklistnum + "i" + itemnum).style.border = "3px solid white";
}

function deactiveChecklistItem(checklistnum, itemnum) {
  // remove white border around checklist item
  document.getElementById(checklistnum + "i" + itemnum).style.border = "none";
}

function determineChecklistItemsTotal(checklistnum) {
  switch(checklistnum) {
    //checklist 1
    case 1:
      return 11;
    //checklist 2
    case 2:
      return 16;
    //checklist 3
    case 3:
      return 6;
    //checklist 21
    case 21:
      return 11;
    default:
      return 0;
  }
}





