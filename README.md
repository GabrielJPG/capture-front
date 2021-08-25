# capture-front

Aplicación para captura de documentos de manera intuitiva, rápida y segura.

- Intuitiva: no requiere entrenamiento, guía paso a pasa cada operación hasta su fin.

- Rápida: toma 2 segundos para acceder y el tiempo de captura es similar a copiar un documento. Tipos documentales y datos asociados en sistemas de línea de negocio son extraídos a través OCR, IA, WS y conectores de datos para que el usuario no tenga que digitar ningún dato que ya existe en el contexto.

- Segura: garantiza la persistencia de lo captura hasta que los documentos e índices se encuentren en el servidor central. Solo tienen acceso a los datos y documentos personas autorizadas. Existe una bitácora de auditoria de cada acción ejecutada en el sistema.

## Note

Please comment on your code as much as possible so that other team members avoid duplication of functionality.

If you use custom hooks that they return interface implementations (which should also be documented) to make it easier to replace functions

In production, only the WPA function is active if the server has security certificates installed to use HTTPS protocols. Because the required web worker only install on user browser if this site running over https. For more info about WPA visit official site of [Google developers](https://developers.google.com/web/fundamentals/primers/service-workers?hl=es)

## Develop commands

- yarn start : running on port 3000
- yarn build : generate binaries for production
- yarn start-wpa: generate and running app locally like as running on production on 127.0.0.1:8080 using http-server package
