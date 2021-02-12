# Prueba técnica Desarrollador BQ Educación

Se quiere desarrollar una aplicación para la reserva de vehículos con conductor tipo Uber o Cabify. En esta prueba se deberá desarrollar el stack completo: base de datos, API y front-end.

Se sugiere seguir las siguientes pautas técnicas, pero el candidato puede utilizar otras tecnologías (siempre que sean del stack JavaScript y justificando el porqué)
* La base de datos a utilizar debe ser MongoDB. 
* La API se puede realizar con Node.js o con Deno.js, usando JavaScript o TypeScript. Realizar usando GraphQL.
* El frontend se debe realizar en React, usando JavaScript o TypeScript. Se pueden utilizar otros frameworks como Next.js. El frontend debe estar optimizado para dispositivos móviles (no necesita ser responsive, no pasa nada si no se ve bien en pantallas grandes).

Además, la infraestructura completa se debe poder ejecutar en local utilizando `docker-compose` y teniendo persistencia de datos local para MongoDB. En caso de que no se realice esta funcionalidad, indicar en el Readme los pasos detallados sobre cómo lanzar cada una de las instancias.

La solución se desarrollará en un solo repositorio, separando front y back en dos directorios que se podrán ejecutar independientemente.

## Funcionalidad
La aplicación web debe gestionar dos tipos de usuarios: `clientes` y `conductores`. 
Los clientes podrán:
* **Solicitar un coche**. Se les asignará cualquiera de los coches que haya disponibles y se les dará la información del conductor y del coche. 
* **Listar sus viajes realizados**, pudiendo consultar los datos del coche y del conductor.

Los conductores podrán:
* **Añadir su coche**. Un conductor tendrá sólo un coche, por lo que si añade otro dejará de estar activo el anterior.
* **Poner su coche como disponible**, por ejemplo, al inicio del día o al final de un viaje.
* **Poner su coche como no disponible**, por ejemplo, al final del día (los coches ocupados se pondrán automáticamente como no disponibles cuando se realiza la reserva, pero se marcarán como disponibles manualmente por el conductor, al finalizar el viaje)
* **Listar sus viajes realizados**, pudiendo consultar los datos del cliente en cada viaje.

Cualquier usuario puede registrarse como cliente o como conductor (nunca como ambos).

## Cómo realizar este ejercicio
 * Tienes 7 días naturales desde que se te ha dado acceso al repositorio para completar el ejercicio.
 * Te pedimos que todos los días subas al repositorio el avance de tu trabajo, para ver no solo el resultado final, sino también el progreso.
 * Cuando esté finalizado, por favor, haz una release e indicanos por correo electrónico que has finalizado.
 * Puedes modificar este archivo Readme para explicar las decisiones técnicas que has tomado, cómo ejecutar el ejercicio.

¡Suerte! Si tú lugar está con nosotros disfrutarás haciendo el ejercicio. Si tienes cualquier duda consúltanos.

## Organización de tareas:
* https://trello.com/b/ND2TgHRX/bq-educaci%C3%B3n

## ¿De dónde he aprendido a aplicar los nuevos conceptos?
* GraphQL server authentication with JWT: https://dev.to/ahmdtalat/graphql-server-authentication-with-jwt-3mdi
* GraphQL, Mongodb Nodejs y Express: https://www.youtube.com/watch?v=C82btqFgcqI
* GraphQL con React y Apollo: https://www.youtube.com/watch?v=KRV46iZ844s&t=0s
