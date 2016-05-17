$(document).on("ready", function() {
    $.get("https://reddit.com/r/todayilearned.json", function(o) {
    	var random = Math.floor((Math.random() * 26) + 1)
    	var unparsedTitle = o.data.children[random];
    	var url = o.data.children[random].data.url;
        var title = (unparsedTitle.data)? unparsedTitle.data.title.split('TIL')[1]: 'something went wrong?';
        console.log(title)
        var init;
        if (title.trim().split(' ')[0] == 'of' || title.trim().split(' ')[0] == 'in') {
            init = 'Have you heard ';
        } else {
            init = 'Did you know ';
        }
        $("a").attr("href", url);
        $("#til").html(init + title);
        $("")

    });
});
