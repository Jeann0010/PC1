
let personasYOficios = [
    { nombre: "Jean", 
    oficio: "Ingeniero" 
    },
    { nombre: "María", 
    oficio: "Doctora" 
    },
    { nombre: "Pedro", 
    oficio: "Maestro" 
    },
    { nombre: "Ana", 
    oficio: "Abogada" 
    },
    { nombre: "Antonia", 
    oficio: "Doctora" 
    },
    { nombre: "Luyis", 
    oficio: "Panadero" 
    },
    { nombre: "Peter", 
    oficio: "Futbolista" 
    },
    { nombre: "Pedro", 
    oficio: "Doctor" 
    },
    { nombre: "Carlos", 
    oficio: "Psicologo" 
    },
    { nombre: "Javier", 
    oficio: "Motorizado" 
    },
    
];


function mostrarPersonasYOficios() {
    const lista = document.getElementById("listaPersonasOficios");
    
    lista.innerHTML = "";    
    personasYOficios.forEach(function(persona) {   
        const elementoLi = document.createElement("li");       
     elementoLi.textContent = `${persona.nombre}: ${persona.oficio}`;
       
  lista.appendChild(elementoLi);
  
        const botonContratar = document.createElement("button");
        botonContratar.classList.add("botonContratar");
        botonContratar.textContent = "Contratar";

        botonContratar.addEventListener("click", function() {
            alert("Contratando a: " + persona.nombre);
        });
        elementoLi.appendChild(botonContratar);
    });
}

mostrarPersonasYOficios();