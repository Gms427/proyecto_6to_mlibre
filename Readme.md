proyecto_6to_mlibre


Server: 

server/initServer.bat --> Ejecutable que inicia el server
server/package.json --> Configuración del server (dependencias, comandos, punto de entrada, etc)
server/tsconfig.json --> Configuración de Typescript (versión de ECMA Script a la que compila, carpeta de destino, etc)

server/src/keys.ts --> Credenciales de la base de datos
server/src/index.ts --> Punto de entrada del server
server/src/database.ts --> Conexión a la base

server/src/controllers --> Contiene los controladores (archivos donde se programa cómo se va a responder a las peticiones en cada ruta del server)
server/src/models --> Contienen los modelos (archivos donde se definen las clases que representan las tablas/entidades de la base
de datos)
server/src/routes --> Contiene las rutas (archivo donde se define con qué método de qué controlador se va a responder a una petición determinada en una ruta determinada)

