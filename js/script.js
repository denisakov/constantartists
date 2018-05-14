    /*-----menu-----*/
    var mas = document.getElementsByClassName('menu-list__item');
    for (i = 0; i < mas.length; i++) {
        mas[i].addEventListener("click", function() {
            var activeLink = document.getElementsByClassName("menu-item-active");
            for (i = 0; i < activeLink.length; i++) {
                if (activeLink[i].classList.contains("menu-item-active")) {
                    activeLink[i].classList.remove("menu-item-active");
                }
            }
            this.classList.add("menu-item-active");
        });
    }
     var date = new Pikaday({ field: document.getElementById('date') });
     var expiration1 = new Pikaday({ field: document.getElementById('expiration1') });
     var radio = new Pikaday({ field: document.getElementById('radio') });
     var expiration2 = new Pikaday({ field: document.getElementById('expiration2') });
     var presale2 = new Pikaday({ field: document.getElementById('presale2') });
     var marketPlan = new Pikaday({ field: document.getElementById('marketing-plan') });
     var ticketLink = new Pikaday({ field: document.getElementById('ticketing-link') });
    /*-----menu end-----*/