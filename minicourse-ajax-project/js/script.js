
const NYTKey = '****************************';

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    var street = $('#street').val();
    var city =$('#city').val();
    var address = street + ', ' + city;
    $greeting.text('So, you want to live at ' + address + '?');
  
    //Google Street View
    var googleStreetViewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=';
    $('body').append('<img class="bgimg" src='+googleStreetViewUrl+address+'>');

    var nytUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+city+'&sort=newest&api-key='+NYTKey;
    //NYT
    $.getJSON(nytUrl, function(data){
        var articles = data.response.docs;
        articles.forEach(function(article){
             $nytElem.append('<li class="article">' + '<a href="' +article.web_url+ '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
            });
    }).fail(function(e){
        $nytElem.text = 'NYTimes Articles Cannot Be Loaded';
    });

    //Wikipedia
    //var wikipediaUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+city+'&format=json&origin=*&callback=wikiCallback';
    var wikipediaUrl = 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search='+city+'&limit=10';
    $.ajax({
        url : wikipediaUrl,
        datatype: 'jsonnp',
        success : function(data){
            var elems = data[1];
            elems.forEach(function(article){
                var url = 'https://en.wikipedia.org/wiki/' + article;
                $wikiElem.append('<li>' + '<a href="' +url+ '">' + article + '</a>' + '</li>');
            });
        },
        error: function(e){
            console.log("Error! " + e);
        }
    });

    return false;
};

$('#form-container').submit(loadData);
