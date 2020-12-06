$(document).on("click", "#search", function () {
    $("#songSpace").empty();
    var input = $("#input").val();
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + input,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6d516cdd9emshc157afd8ba21176p172510jsne773e6df5ba8",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        array = response.data;
        for (var i = 0; i < 15; i++) {
            var artist = response.data[i].artist.name;
            var title = response.data[i].title;
            var album = response.data[i].album.title;
            var picture = response.data[i].album.cover_medium;
            var link = response.data[i].link;

            function createSongs() {
                const div = $("<div>");
                div.attr("class", "card");
                div.attr("class", "cardid");

                const pictureElement = $("<img>");
                div.attr("class", "card-img-top");
                pictureElement.attr("src", picture)

                const cardbody = $("<div>")
                cardbody.attr("class", "card-body")

                const titleElement = $("<h3>");
                titleElement.text("Song: " + title)
                titleElement.attr("class", "title" + i)
                titleElement.attr("data-id", i)

                const artistElement = $("<h3>");
                artistElement.text("Artist: " + artist)
                artistElement.attr("class", "artist" + i);
                artistElement.attr("data-id", i)

                const albumElement = $("<h3>");
                albumElement.text("Album: " + album)  
                albumElement.attr("class", "album" + i);
                albumElement.attr("data-id", i)

                const linkElement = $("<a>");
                linkElement.html("listen here: " + link)
                linkElement.attr("href", link)
                linkElement.attr("target", "_blank")
                linkElement.attr("class", "link")

                const newButton = $("<button>")
                newButton.html("Add Song")
                newButton.attr("class", "add-button")
                newButton.attr("data-id", i)


                $("#songSpace").append(div);
                div.append(pictureElement, cardbody);
                cardbody.append(titleElement, artistElement, albumElement, linkElement, newButton)

            }
            createSongs();
        }

        
        function submitSearch(Search) {
            $.post("/api/playlist/", Search, function () {
                window.location.href = "/api/playlist"
            });
        }

        // function getSearchData(id) {
        //     var newt = {
        //         addTrack: "test"
        //     }
        //     $.get("/api/playlist/" + id, newt, function (data) {
        //         if (data) {
        //             artist.val(data.artist);
        //             album.val(data.album);
        //             track.val(data.track);

        //             updating = true;
        //         }
        //     });
        // }

        // function updateSearch(search) {
        //     $.ajax({
        //         method: "PUT",
        //         url: "?api/playlist/",
        //         data: search
        //     })
        //         .then(function () {
        //             window.location.href = "/api/playlist"
        //         })
        // }



        $(".add-button").on("click", function handleFormSubmit(event) {
            

            var cardId = $(this).attr("data-id")
            

            var newSearch = {
                artist: $(`.artist${cardId}`).text(),
                album: $(`.album${cardId}`).text(),
                track: $(`.title${cardId}`).text()
            };
            console.log(newSearch)
            submitSearch(newSearch)



        });
    });
});



