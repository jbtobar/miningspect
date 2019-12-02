# Mining-spect

---

**Problema:** Dada la cantidad de actividades reguladas y cantidad de reportes producidos por los inspectores de las minas, al igual que la variedad de acciones legales en las cuales se debe actuar a base de estos reportes, la habilidad de actuar de manera eficiente y apropiada desde el punto de vista legal esta llegando a saturarse.

~~**Solución:** Una de las soluciones propuestas es un motor de inteligencia artificial que recibe todos los documentos, reportes, he informes producidos por la mina y detecte y clasifique los este material en base a las acciones legales que deben hacerse.~~

Esta solución anterior consiste en desmenuzar una masa de material que viene de manera desorganizada. Sin embargo - se puede llegar a una solución del problema a través de un método en el cual el material viene de manera organizada y accionable desde la raíz.

El inspector de la mina detecta actividades que deben ser reportadas. Aquí empieza una cadena de eventos (volver a la oficina a escribir el reporte, el reporte es enviado a superiores, superiores envían reportes a firma legal, firma legal debe desmenuzar reportes para detectar acciones legales, etc.) que separa a la actividad en cuestión de la acción legal con varios pasos - teléfono dañado.

**Solución:** La solución es eliminar al teléfono dañado a través de un sistema en el cual el inspector puede reportar las actividades de manera simple y que los superiores y la firma legal puedan ver el núcleo del problema en tiempo-real - una especie de Instagram/Inspectorio para Inspectores de Mina.

**Como funciona?**

*Desde el lado del Inspector:*

1. El inspector tiene un Tablet customizado para acceder a la aplicación MiningSpect App. Sale a dar una ronda y detecta actividad de minería ilegal.
2. El inspector toma la foto de la actividad. Esa foto ese guardada y registrada con la ubicación GPS, al igual que cualquier comentario que desee escribir el inspector.
3. Al ingresar la actividad, el app le solicita al inspector seleccionar el tipo de actividad que esta reportando de manera simple y responder ciertas preguntas enfocadas a obtener un reporte limpio y simple de lo que sucede para que sea claro desde el punto de vista legal la acción que debe tomarse, por ejemplo:


 - INVASION DE TERRITORIO
    - Q: Cuantas personas?
    - Q: Hay maquinaria pesada?
    - Q: Es actividad de minería?

4. Al finalizar el cuestionario el Inspector hace click en 'Enviar' y el reporte - con fotografía, ubicación GPS, he información adicional - es enviada en tiempo real a un sistema de monitoreo al cual tiene acceso la firma legal.

*Desde el lado del Monitor*

1. El monitor - firma legal - tiene acceso a un dashboard web donde se pueden ver todos los reportes hechos por el inspector.
2. El monitor puede visualizar en un mapa las coordenadas de los reportes con luces titilantes dependiendo de la seriedad de la actividad. Se los puede clasificar como 'Urgentes','Resueltos', etc.
3. El monitor puede filtrar reportes por categoría y analizarlos uno a uno o buscar patrones estadísticos, etc.
4. El monitor puede abrir un chat con el inspector basado en cierto reporte. Ejemplo:


  - Reporte #44 - 'Invasión de Territorio', abrir conversación
    - "Señor Inspector, podría volver a la ubicación de este reporte y contarnos como sigue la situación? También nos ayudaría saber por donde cree que ingresaron"

5. El monitor puede iniciar una acción legal desde el dashboard y monitorear el proceso de esa acción legal. Ejemplo:


 - Reporte #45 - 'Invasión de Territorio', iniciar acción legal
  - Crear Reporte a Ministerio de Ambiente
  - Crear Reporte a Ministerio de Sustancias Controladas
  - Crear Reporte a Ministerio de Trabajo Infantil

6. El dashboard le permite al monitor exportar la documentación y hacer tracking del estatus de cada Acción Legal, permitiéndole ver el estatus de las acciones legales de todos los reportes de una manera simple. Puede el monitor filtrar los reportes enviados a las instituciones debidas, y puede el monitor ingresar respuestas y novedades. Así con tan solo un click se puede ver todos los reportes enviados que todavía no se haya hecho una acción, los que si se han tomado acción, los pendientes, etc.







---

## Especificaciones

## Requerimientos Funcionales

1. [ ] 1. Inspector debe poder acceder a la aplicación de Inspección a través de un dispositivo móvil (iOS/iPad o Android Tablet)
