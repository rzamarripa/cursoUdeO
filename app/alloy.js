// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
if(OS_IOS){
	Alloy.Globals.topWindow = 20;
}else{
	Alloy.Globals.topWindow = 0;
}
Alloy.Globals.todoTable = Alloy.Globals.topWindow + 50;
Alloy.Globals.colorFondo = "#6f83e7";