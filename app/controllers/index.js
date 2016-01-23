function doClick(e) {
    alert($.label.text);
}

function addToDoItem(){
	Alloy.createController("add").getView().open();
}

$.index.open();
