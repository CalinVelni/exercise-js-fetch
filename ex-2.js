window.addEventListener( 'load', () => {
        
    const h = document.getElementById('title')

    const inp = document.querySelector('input');

    const btn = document.querySelector('button');

    const div = document.getElementById('container');

    h.innerHTML = 'How many jokes you want to hear? (max 10)';

    const printJokes = (array) => {

        array.forEach( (elem, i) => {

            if(elem.type === 'single') {

                div.innerHTML += `
                <p><b>${i+1}.</b><br>${elem.joke}</p>
                `;
            }

            else {

                div.innerHTML += `
                <p><b>${i+1}.</b><br>${elem.setup}<br>···<br>${elem.delivery}</p>
                `;
            }
        })
    }

    btn.addEventListener('click', () => {

        const value = inp.value;

        let jokes;

        fetch(`https://v2.jokeapi.dev/joke/Programming?amount=${value}`)
        
        .then(request => request.json())

        .then(obj => printJokes(obj.jokes))

        .catch(error => console.error(error))

        inp.value = '';
    })
})

