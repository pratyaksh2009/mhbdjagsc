$('#vignanamcontent').live("pageinit", function(){
	var originalFontSize = getFontSize();
	$(".resetFont").click(function(){
		setFontSize(originalFontSize);
		$("#changeFont").fadeToggle("fast");
		return false;
	});
	$(".increaseFont").click(function(){
		var fontSize = getFontSize();
		var newFontSize = fontSize + 2;
		setFontSize(newFontSize);
		return false;
	});
	$(".decreaseFont").click(function(){
		var fontSize = getFontSize();
		var newFontSize = fontSize - 2;
		setFontSize(newFontSize);
		return false;
	});
});
$('ul').listview('refresh');
$('#languageview').listview('refresh');
$('#vignanamlang').live("pageshow", function(){
	setFontSize(16);
});
$('#languageview').live("pageinit", function(){
	updateData()
})
$('#vignanamcategory').live("pageinit", function(){
	updateData()
})
function updateData()
{
    $.ajax({
        url: '@Html.Raw(ajaxUrl)',
        async: false,
        beforeSend: function () { $.mobile.showPageLoadingMsg(); },
        complete: function ()
        {
            $.mobile.hidePageLoadingMsg();
            $("ul:jqmData(role='listview')").listview();
        },
        success: function (data, textStatus, jqXHR)
        {
            $('#languageview').html(data);
            $('#languageview').trigger("create"); // *** THIS IS THE KEY ***
        }
    });
}
function getFontSize() {
	var currentSize = $("body").css("font-size");
	var currentSizeNumber = parseFloat(currentSize, 12);
	if(currentSizeNumber > 30) {
		currentSizeNumber = 30;
	}
	return currentSizeNumber;
}
function setFontSize(size) {
	$("body").css("font-size", size);
}