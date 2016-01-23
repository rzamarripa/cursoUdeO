function addItem(){
	alert($.itemField.value);
}

function closeKeyboard(e){
	e.source.blur();
}

function closeWindow(){
	$.addWin.close();
}