
const guests = [
    { id: "1", name: "Aura Violeta Boj", passes: 1, gender: "F"},
    { id: "2", name: "Iris Boj", passes: 1, gender: "F"},
    { id: "3", name: "Daniel Boj", passes: 3 },
    { id: "4", name: "Yesenia Boj y fam.", passes: 5 },
    { id: "5", name: "Flor Boj y fam.", passes: 5 },
    { id: "6", name: "Fredy Boj", passes: 2 },
    { id: "7", name: "Yeison Boj y Sofía Soto", passes: 2 },
    { id: "8", name: "Walfre Pérez Molina y fam.", passes: 3 },
    { id: "9", name: "Rizardy Reyes y fam.", passes: 3 },
    { id: "10", name: "Gustavo Molina y Marielos Cano", passes: 2 },
    { id: "11", name: "Sergio Mérida y fam.", passes: 5 },
    { id: "12", name: "Walter Pinto y Fam.", passes: 6 },
    { id: "13", name: "Alex Molina y fam.", passes: 5 },
    { id: "14", name: "Manuel Molina y fam.", passes: 3 },
    { id: "15", name: "Manuel López y fam.", passes: 3 },
    { id: "16", name: "Celina Molina", passes: 3 },
    { id: "17", name: "Jennifer Ayala", passes: 1, gender: "F"},
    { id: "18", name: "Antonio Francisco y fam.", passes: 5 },
    { id: "19", name: "Sofía Tello", passes: 1, gender: "F"},
    { id: "20", name: "Sihesler Mateo y fam.", passes: 2 },
    { id: "21", name: "Alyn Boj", passes: 2 },
    { id: "22", name: "Nery Cajas y fam.", passes: "Tenemos un lugar especial para ti" },
    { id: "23", name: "Mercedes Pedro", passes: 3 },
    { id: "24", name: "Carlos Mérida", passes: 1, gender: "X"  },
    { id: "25", name: "Samuel Monterroso y fam.", passes: 3 },
    { id: "26", name: "Maynor Ávila", passes: 2 },
    { id: "27", name: "William López y fam.", passes: 5 },
    { id: "28", name: "Juliana Martínez y fam.", passes: 3 },
    { id: "29", name: "César López y Sra.", passes: 2 },
    { id: "30", name: "Evelyn Tzitá", passes: 1, gender: "F"},
    { id: "31", name: "Roberth López", passes: 1, gender: "X"  },
    { id: "32", name: "Orlando López y fam.", passes: 3 },
    { id: "33", name: "Emerson López y fam.", passes: 3 },
    { id: "34", name: "Luis Sosa y Fam.", passes: 4 },
    { id: "35", name: "Sucely López", passes: 2 },
    { id: "36", name: "Estuardo López y Fam.", passes: 5 },
    { id: "37", name: "Juan Carlos Martínez y Fam.", passes: 4 },
    { id: "38", name: "María Jose López", passes: 1, gender: "F"},
    { id: "39", name: "Miriam López y Fam.", passes: 3 },
    { id: "40", name: "Mamfred López Y Fam.", passes: 3 },
    { id: "41", name: "Gricelda López Y Fam.", passes: 5 },
    { id: "42", name: "Roberto Herrera y Sra.", passes: 2 },
    { id: "43", name: "Juan Carlos Y Fam.", passes: 4 },
    { id: "44", name: "Maynor Moreno Y Fam", passes: 3 },
    { id: "45", name: "Miriam Palacios y Fam.", passes: 5 },
    { id: "46", name: "William Del Valle Y Fam.", passes: 5 },
    { id: "47", name: "Luis Gerardo del Valle", passes: 1, gender: "X"  },
    { id: "48", name: "Wilson Serrano y fam.", passes: 4 },
    { id: "49", name: "Wilson Serrano Mérida", passes: 2 },
    { id: "50", name: "Jorfaby Silvestre y Fam.", passes: 5 },
    { id: "51", name: "Anderson Serrano y Arlen Velásquez", passes: 2 },
    { id: "52", name: "Carlos Méndez", passes: 1, gender: "X"  },
    { id: "53", name: "Dora Beatriz", passes: 1, gender: "F"},
    { id: "54", name: "Cotuha Pedro y fam.", passes: 2 },
    { id: "55", name: "Lázaro Pérez", passes: 1, gender: "X"  },
    { id: "56", name: "Fidelino Sosa", passes: "Tenemos un lugar especial para ti" },
    { id: "57", name: "Ardany Zea", passes: "Tenemos un lugar especial para ti" },
    { id: "58", name: "Brayan Serrano", passes: "Tenemos un lugar especial para ti" },
    { id: "59", name: "Bryan Castañeda", passes: 1, gender: "X"  },
    { id: "60", name: "Carlos César del Valle", passes: 2 },
    { id: "61", name: "Hugo Agustin Y Fam.", passes: 3 },
    { id: "62", name: "José Andrés Agustin", passes: 1, gender: "X"  },
    { id: "63", name: "Aury López Y Fam.", passes: 3 },
    { id: "64", name: "Obdulio Méndez y Fam.", passes: 5 },
    { id: "65", name: "Lisbeth López Y Fam.", passes: 4 },
    { id: "66", name: "Wilson Calderón Y Fam.", passes: 5 },
    { id: "67", name: "Idelma López", passes: 2 },
    { id: "68", name: "Douglas Aroldo López y Fam.", passes: 5 },
    { id: "69", name: "Lenin López Y Fam.", passes: 6 },
    { id: "70", name: "Loren López", passes: 2 },
    { id: "71", name: "José Muñoz", passes: 1, gender: "X"  },
    { id: "72", name: "Carolina Navarro", passes: 2 },
    { id: "73", name: "Elvin Ramos y fam.", passes: 6 },
    { id: "74", name: "Francisco Castillo y Fam.", passes: 2 },
    { id: "75", name: "Gilberto Francisco", passes: 2 },
    { id: "76", name: "Omar Mérida y Sra.", passes: 2 },
    { id: "77", name: "Alex Ramírez y fam.", passes: 5 },
    { id: "78", name: "Karina López Y Fam.", passes: 3 },
    { id: "79", name: "Matilde López Y fam.", passes: 3 },
    { id: "80", name: "Gerardo Alfaro y Fam.", passes: 4 },
    { id: "81", name: "Alvaro Eduardo Castillo", passes: 2 },
    { id: "82", name: "Charito Magdanely y Fam.", passes: 3 },
    { id: "83", name: "David Salas y Fam.", passes: 3 },
    { id: "84", name: "Edmundo Herrera y Fam.", passes: 6 },
    { id: "85", name: "Romario Herrera", passes: 1, gender: "X"  },
    { id: "86", name: "Fernando Santos", passes: 1, gender: "X"  },
    { id: "87", name: "Megly Sosa", passes: 1, gender: "F"},
    { id: "88", name: "Roderico Guzman", passes: 2 },
    { id: "89", name: "Carlos Serrano y fam.", passes: 4 },
    { id: "90", name: "Catalina Camposeco", passes: 2 },
    { id: "91", name: "Josue Cano Salazar", passes: 2 },
    { id: "92", name: "Gerlyn Serrano y fam.", passes: 4 },
    { id: "93", name: "Ever Arreaga", passes: 1 },
    { id: "94", name: "Lucy Lemas", passes: 4 },
    { id: "95", name: "Pedro Molina", passes: 1 },
    { id: "96", name: "Walfre Pérez y Fam.", passes: 5 }

  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestId = queryParams.id;
    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        let message = "";

        // --- Determinar texto principal según pases y género ---
        if (guest.passes === "Tenemos un lugar especial para ti") {
            message = `¡${guest.name}, gracias por ser parte de nuestra historia! 💖`;
        } else if (guest.passes === 1) {
            if (guest.gender === "F") {
                message = `¡${guest.name}, estás invitada!`;
            } else {
                message = `¡${guest.name}, estás invitado!`;
            }
        } else if (guest.passes > 1) {
            if (guest.gender === "F") {
                message = `¡${guest.name}, están invitadas!`;
            } else {
                message = `¡${guest.name}, están invitados!`;
            }
        } else {
            message = `¡${guest.name}, estás invitado(a)!`;
        }

        // Mostrar el nombre y mensaje
        document.getElementById('guest-name').textContent = message;

        // --- Mostrar u ocultar sección de pases ---
        if (guest.passes === "Tenemos un lugar especial para ti") {
            document.querySelector('.invitation-info-section').style.display = 'none';
        } else {
            document.querySelector('.invitation-info-section').style.display = 'block';
            document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
        }

    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
    // --- Generar enlace dinámico al formulario de confirmación ---
const formBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSepR3seaqPxe2Zwh0goR3x3cwx9tJo-OH5I3zg9ZGRULIvMMw/viewform?usp=pp_url";
const encodedName = encodeURIComponent(guest.name);
const formUrl = `${formBaseUrl}&entry.42292443=${encodedName}`;

// Asignar URL dinámico al botón
const confirmButton = document.getElementById('confirm-button');
confirmButton.onclick = function() {
    location.href = formUrl;
};

});
