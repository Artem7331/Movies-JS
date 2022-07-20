'use strict';


document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

    const promoAdv = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input'),
        checkBox = document.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let newFilm = addInput.value;
        const favorite = checkBox.checked;
        
        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            };

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);

            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);

            event.target.reset();
        
        };

    });


        
    const makeChanges = () => {
        promoGenre.textContent = "Драма";

        promoBg.style = "background: url(../img/bg.jpg) center center/cover no-repeat;";
    };

    const deleteAdv = (arr) => {
        arr.forEach(img => {
            img.remove();
        });
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {   
        parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);

            });
        });
    
    };

    makeChanges();
    deleteAdv(promoAdv);
    createMovieList(movieDB.movies, movieList);
});












