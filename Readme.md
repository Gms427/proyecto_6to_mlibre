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


Client: 

web-app/node_modules --> Contiene las dependencias (packages, librerías, etc)
web-app/src --> donde está el código hecho por nosotros
web-app/angular.json --> Configuraciones de Angular
web-app/package.json --> Configuración general (dependencias, comandos, etc)
web-app/tsconfig.json --> Configuración de Typescript (versión de ECMA Script a la que compila, carpeta de destino, etc)

web-app/src/styles.css --> Hoja de estilos global del proyecto
web-app/src/index.html --> Archivo html principal del proyecto
web-app/src/assets --> Donde generalmente se ponen las imagenes, videos, fuentes, etc.
web-app/src/app --> Donde está lo importante (componente y módulo principal --> app)
web-app/src/app/app.component.css --> Css del componente app
web-app/src/app/app.comptonent.html --> Vista del componente app
web-app/src/app/app.component.ts --> Lógica del componente app
web-app/src/app/app.module.ts --> Módulo principal de la aplicación
web-app/src/app/app.routing.module.ts --> Módulo principal de ruteo

ng g c shared/components/navbar --module shared



