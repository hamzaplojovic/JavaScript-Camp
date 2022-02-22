fetch("https://api.github.com/users/hamzaplojovic")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("user").innerText = data["login"];
        document
            .getElementById("image")
            .setAttribute("src", data["avatar_url"]);
        followers = data["followers_url"];
        fetch(followers)
            .then((response) => response.json())
            .then((data) => {
                followers_text = data.length;
                document.getElementById("followers").innerText =
                    "Followers : " + followers_text;
            });
        company = data["company"];
        locatioN = data["location"];
        following = data["following"];

        document.getElementById("company").innerText = company;
        document.getElementById("location").innerText = locatioN;
        document.getElementById("following").innerText =
            "Following : " + following;
    });
