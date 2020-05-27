$("#searchBtn").on("click", function(){


    var length = $("#records").val()
    var search = $("#search").val()
    var begin = $("#startYear").val()
    var end = $("#endYear").val()

    console.log(search)
    console.log(length)
    console.log(begin)
    console.log(end)

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+parseInt(begin)+"0101&end_date="+parseInt(end)+"1231&q="+search+"&api-key=8GULmEA4TQpsdfuet4RTPiwvkWhWMX7Y"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)

        for (i = 0; i < length; i++) {
        console.log(response.response.docs[i].web_url)

        var newLink = $("<a>")
        newLink.attr("href", response.response.docs[i].web_url)
        newLink.text(response.response.docs[i].headline.main)
         newLink.attr("class", "row")
        $("#topArticles").append(newLink)

        }
    })



})

$("#clearBtn").on("click", function() {
    
    var length = ""
    var search = ""
    var begin =""
    var end = ""


    $("#records").val("")
    $("#search").val("")
    $("#startYear").val("")
    $("#endYear").val()
    $("#topArticles").val()
})
    
