Instrucciones para levantar el dump de la base de datos: 

1 - Abrir cmd en la carpeta bin de PostgreSQL (en Windows por lo general es --> C:\Program Files\PostgreSQL\11\bin, el 11 puede cambiar según el numero de versión instalada)
2 - Ejecutar los siguientes comandos 

psql -U postgres
CREATE DATABASE nosbey_db;

Ctrl + c para salir de psql o  tambien escribir \q y presionar enter.

3 - Ejecutar el siguiente comando: 

pg_restore -h localhost -p 5432 -U postgres -d nosbey_db ruta donde se clonó el repositorio/db/dump/nosbeyBackup.backup

-------------------------------------------------------------------------------------------------------------

Instrucciones para levantar la web: (para que funcione correctamente, es necesario levantar el dump de la base de datos)

1 - Abrir cmd en la carpeta server y ejecutar el siguiente comando --> npm install 
2 - En el mismo cmd y en la misma carpeta, ejecutar el siguiente comando --> npm start
3 - Abrir un navegador y navegar a la siguiente url --> localhost:3000/

Versiones utilizadas:

PostgreSQL: 11
Node.js: v11.3.0
