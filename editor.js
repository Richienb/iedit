var v = localStorage.getItem("v");
var editor = ace.edit("editor");
var theme = "ace/theme/ambiance";
with(editor) {
  editor.$blockScrolling = Infinity;
  editor.setTheme("ace/theme/ambiance");
  getSession().setMode("ace/mode/html");
  setValue(v);
  gotoLine(1);
  navigateLineEnd();
}
function save(){

  localStorage.setItem("v",editor.getValue());
  alert("Document saved!!");

}
$("#DatThirdAgain").on("click", function(){
  editor.setValue(editor.getValue().replace("\n", "").replace("\w", ""))
});
$("option").each(function() {
  $(this).val($(this).text().toLowerCase().replace(" ", "_"))
  if ($(this).val() == localStorage.getItem("blaze_ace_editor_theme")) {
    $(this).attr("selected", "selected")
  }
});
$("#thm").on("change", function() {
  theme = theme.substr(0, 10) + $(this).val();
  //localStorage.setItem("blaze_ace_editor_theme", $(this).val())
  editor.setTheme(theme);
});
$("#hlgh").on("change", function() {
  editor.getSession().setMode("ace/mode/" + $(this).val());
});
$("#hlgh").on("change", function() {
  editor.getSession().setMode("ace/mode/" + $(this).val());
});
$("<iframe>")
.attr("id", "tehiframe")
.attr('seamless', 'seamless')
.css('height', '95.5%')
.css('width', '49%')
.attr("sandbox", "allow-forms allow-popups allow-scripts allow-pointer-lock").appendTo("#placeforiframe");
$("#tehiframe").attr("srcdoc", editor.getValue());
