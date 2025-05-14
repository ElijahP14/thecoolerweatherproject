const URL = 
"https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=85891c29feb28bc7fe5bd354324c0adf"


fetch(URL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        document.getElementById("current-temp").textContent = `${jsObject.main.temp} °F`;
        document.getElementById("current-desc").textContent = jsObject.weather[0].description;
        document.getElementById("current-humid").textContent = `${jsObject.main.humidity}%`;
        document.getElementById("current-windSpeed").textContent = `${jsObject.wind.speed} mph`;

        const t = jsObject.main.temp;
        const s = jsObject.wind.speed;
        let chill = "N/A";
        if ( t <= 50 && s > 3) {
            chill = (
                35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 
                0.4275 * t * Math.pow(s, 0.16)
                ).toFixed(2) + " °F";
        }
        document.getElementById("current-windChill").textContent = chill;
    }); 


   

    fetch(newsURL)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles.slice(0, 6);
    const newsContainer = document.querySelector('#news-container');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
      const articleEl = document.createElement('article');
      articleEl.classList.add('article');

      articleEl.innerHTML = `
        <img src="${article.urlToImage || 'default.jpg'}" width="600px" height="336px">
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description || 'No description available.'}</p>
      `;

      newsContainer.appendChild(articleEl);
    });
  })
  .catch(err => console.error("News fetch failed:", err));
    