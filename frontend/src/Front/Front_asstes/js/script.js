import Isotope from "isotope-layout";

export function initPortfolioIsotope() {

    var iso = new Isotope('.isotope-container', {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry'
    });

    var filters = document.querySelectorAll('.portfolio-filters li');

    filters.forEach(function (filter) {

        filter.addEventListener('click', function () {

            filters.forEach(function (el) {
                el.classList.remove('filter-active');
            });

            this.classList.add('filter-active');

            var filterValue = this.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });

        });

    });

}