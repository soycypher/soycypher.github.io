

jQuery(document).on("click", ".cards .card", function(){
    console.log(this)
    window.open(jQuery(this).attr("destino"), '_blank').focus();
})