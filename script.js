carta = [];

carta.unshift(new producto("Entrante","Tortilla de patata", "", "Una tortilla de patata mu rica", "Contiene huevos", 15.99, "./img/tortilla.jpg"));




function producto (tipo,nombre,procedencia,descripcion,alergeno,precio,img)
{
    this.tipo = tipo;
    this.nombre = nombre;
    this.procedencia = procedencia;
    this.descripcion = descripcion;
    this.alergeno = alergeno;
    this.precio = precio;
    this.img = img;
}

