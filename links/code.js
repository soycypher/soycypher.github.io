

jQuery(document).on("click", ".cards .card", function(){
    console.log(this)
    window.open(jQuery(this).attr("destino"), '_blank').focus();

    gtag('event', "click", {
        'event_label': 'link' + jQuery(this).attr("class").replace("card ", ""),
        'event_category': 'Interaccion',
      });
})