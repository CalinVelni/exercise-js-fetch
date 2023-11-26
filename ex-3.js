window.addEventListener('load', () => {

    const h = document.getElementById('title');

    const inp = document.querySelector('input');

    const btn = document.querySelector('button');

    const div = document.getElementById('container');

    h.innerHTML = 'Insert a language to find countries';

    const printCountries = (countries) => {

        div.innerHTML = ''

        countries.forEach( country => {

            const {name:{common: comName}, languages, flags:{svg}, capital} = country;

            const lang = Object.values(languages);

            div.innerHTML += `
            <figure class="cards">
                <h4>${comName}</h4>
                <div><img src="${svg}" alt="flag"></div>
                <p>Capital${capital?.length > 1 ? 's' : ''}: ${capital}</p>
                <p>${lang}</p>
            </figure>
            `;
        });
    }

    btn.addEventListener('click', () => {

        fetch(`https://restcountries.com/v3.1/lang/${inp.value}`)

        .then(response => response.json())

        .then(obj => printCountries(obj))

        .catch(error => console.error(error))
    })
})

