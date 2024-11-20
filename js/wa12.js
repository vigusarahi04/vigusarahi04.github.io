
    let ourObject = {
      "month": "",
      "num": "",
      "link": "",
      "year": "",
      "news": "",
      "safe_title": "",
      "transcript": ""
    };

    console.log(ourObject);

    function getRandomComicNumber() {
      return Math.floor(Math.random() * 3000) + 1;
    }

    function fetchData() {
      let random_number = getRandomComicNumber(); 
      fetch(`https://corsproxy.io/?https://xkcd.com/${random_number}/info.0.json`) 
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            console.error("error:", res);
            throw new Error("Failed to fetch comic");
          }
        })
        .then(data => {
          if (data) {
            console.log(data);
            ourObject = { ...data }; 
            displayComic(data);
          }
        })
        .catch(error => {
          console.error("Fetch error:", error);
        });
    }

    function displayComic(data){
      const titleElement = document.getElementById("title");
      const imageElement = document.getElementById("image");
      const altElement = document.getElementById("alt");
      const dateElement = document.getElementById("date");

      titleElement.textContent = data.safe_title;
      imageElement.src = data.img; 
      imageElement.alt = data.alt; 
      altElement.textContent = `Alt text: ${data.alt}`; 
      dateElement.textContent = `Published on: ${data.month}/${data.day}/${data.year}`; 

    }

    document.getElementById("generate").addEventListener("click", () => {
      fetchData();
    });
