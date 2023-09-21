                                    // Script del PADECIMIENTO LUMBAR 

                                    // AL SELECCIONAR SI 
document.addEventListener('DOMContentLoaded', function () {
    var selectPuncionLumbar = document.getElementById('puncion_lumbar');
    var divProcedimientos = document.getElementById('procedimientos');

    selectPuncionLumbar.addEventListener('change', function () {
        if (selectPuncionLumbar.value === 'si') {
            divProcedimientos.style.display = 'block';
        } else {
            divProcedimientos.style.display = 'none';
        }
    });
});
                    // Selección Procedimiento Lumbar 

// Obtener referencias a los elementos del formulario y los campos adicionales
const procedimientosSelect = document.getElementById('procedimientos123');
const lumbar1Fields = document.getElementById('pl_puncionlumbar1');
const lumbar2Fields = document.getElementById('pl_lumbar2');
const lumbar3Fields = document.getElementById('pl_lumbar3');

// Agregar un evento de cambio al menú desplegable
procedimientosSelect.addEventListener('change', function() {
    // Ocultar todos los campos adicionales
    lumbar1Fields.style.display = 'none';
    lumbar2Fields.style.display = 'none';
    lumbar3Fields.style.display = 'none';

    // Obtener el valor seleccionado en el menú desplegable
    const selectedOption = procedimientosSelect.value;

    // Mostrar los campos adicionales correspondientes según la selección
    if (selectedOption === 'Punción Lumbar 1') {
        lumbar1Fields.style.display = 'block';
    } else if (selectedOption === 'Punción Lumbar 2') {
        lumbar1Fields.style.display = 'block';
        lumbar2Fields.style.display = 'block';
    } else if (selectedOption === 'Punción Lumbar 3') {
        lumbar1Fields.style.display = 'block';
        lumbar2Fields.style.display = 'block';
        lumbar3Fields.style.display = 'block';
    }
         //Al SELECCIONAR Si a complicaciones despliega el campo de tipo de complicaciones lumbar 1 

});
document.addEventListener("DOMContentLoaded", function() {
    var complicacionSelect = document.getElementById("complicacion_1");
    var tipoComplicacionDiv = document.getElementById("tipo_puncionlumbar1");

    complicacionSelect.addEventListener("change", function() {
        if (complicacionSelect.value === "si") {
            tipoComplicacionDiv.style.display = "block"; // Mostrar el campo Tipo de Complicaciones
        } else {
            tipoComplicacionDiv.style.display = "none"; // Ocultar el campo Tipo de Complicaciones
        }
    });
       //Al SELECCIONAR OTROS se despliega el campo Otros de Lumbar 1 
});
  // Función para mostrar u ocultar el campo de entrada de texto
    function mostrarCampoOtros() {
    var seleccion = document.getElementById("tipocomplicacion_1").value;
    var campoOtros = document.getElementById("otros_1");

    if (seleccion === "otros") {
        campoOtros.style.display = "block";
    } else {
        campoOtros.style.display = "none";
    }
}
            
         //Al SELECCIONAR Si a complicaciones despliega el campo de tipo de complicaciones lumbar 2


document.addEventListener("DOMContentLoaded", function() {
    let complicacionSelect = document.getElementById("complicacion_2");
    var tipoComplicacionDiv = document.getElementById("tipo_puncionlumbar_2");

    complicacionSelect.addEventListener("change", function() {
        if (complicacionSelect.value === "si") {
            tipoComplicacionDiv.style.display = "block"; // Mostrar el campo Tipo de Complicaciones

        } else {
            tipoComplicacionDiv.style.display = "none"; // Ocultar el campo Tipo de Complicaciones
        
        }
    });
       //Al SELECCIONAR OTROS se despliega el campo Otros de Lumbar 2 
});
  // Función para mostrar u ocultar el campo de entrada de texto
    function mostrarCampoOtros2() {
    let seleccion = document.getElementById("tipocomplicacion_2").value;
    let campoOtros = document.getElementById("otros_2");

    if (seleccion === "otros") {
        campoOtros.style.display = "block";
    } else {
        campoOtros.style.display = "none";
    }
}


    
         //Al SELECCIONAR Si a complicaciones despliega el campo de tipo de complicaciones lumbar 3


         document.addEventListener("DOMContentLoaded", function() {
            let complicacionSelect = document.getElementById("complicacion_3");
            var tipoComplicacionDiv = document.getElementById("tipo_puncionlumbar_3");
        
            complicacionSelect.addEventListener("change", function() {
                if (complicacionSelect.value === "si") {
                    tipoComplicacionDiv.style.display = "block"; // Mostrar el campo Tipo de Complicaciones
        
                } else {
                    tipoComplicacionDiv.style.display = "none"; // Ocultar el campo Tipo de Complicaciones
                
                }
            });
               //Al SELECCIONAR OTROS se despliega el campo Otros de Lumbar 3
        });
          // Función para mostrar u ocultar el campo de entrada de texto
            function mostrarCampoOtros3() {
            let seleccion = document.getElementById("tipocomplicacion_3").value;
            let campoOtros = document.getElementById("otros_3");
        
            if (seleccion === "otros") {
                campoOtros.style.display = "block";
            } else {
                campoOtros.style.display = "none";
            }
        }
        
        // PROCEDIMIENTO INTUBACION 

        document.addEventListener('DOMContentLoaded', function () {
            let intubacionSelect = document.getElementById("intubacion");
            let proIntubacionDiv = document.getElementById("pro_intubacion");

            intubacionSelect.addEventListener('change', function () {
                if (intubacionSelect.value === "Si") {
                    proIntubacionDiv.style.display = "block";
                } else {
                    proIntubacionDiv.style.display = "none";
                }
            });
        });
        const procedimientoIntubacionSelect = document.getElementById('intubacion123');
        const plIntubacion1 = document.getElementById('pl_intubacion1');
        const plIntubacion2 = document.getElementById('pl_intubacion2');
        const plIntubacion3 = document.getElementById('pl_intubacion3');
        
        // Agregar un evento de cambio al menú desplegable
        procedimientoIntubacionSelect.addEventListener('change', function () {
            // Ocultar todos los campos adicionales
            plIntubacion1.style.display = 'none';
            plIntubacion2.style.display = 'none';
            plIntubacion3.style.display = 'none';
        
            // Obtener el valor seleccionado en el menú desplegable
            const selectedOption = procedimientoIntubacionSelect.value;
        
            // Mostrar los campos adicionales correspondientes según la selección
            if (selectedOption === 'Punción Lumbar 1') {
                plIntubacion1.style.display = 'block';
            } else if (selectedOption === 'Punción Lumbar 2') {
                plIntubacion1.style.display = 'block';
                plIntubacion2.style.display = 'block';
            } else if (selectedOption === 'Punción Lumbar 3') {
                plIntubacion1.style.display = 'block';
                plIntubacion2.style.display = 'block';
                plIntubacion3.style.display = 'block';
            }
        });