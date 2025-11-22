# Usamos Nginx como servidor
FROM nginx:alpine

# Copiamos todos los archivos del proyecto al directorio de Nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]
