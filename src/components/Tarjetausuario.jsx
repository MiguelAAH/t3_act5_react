function TarjetaUsuario({ nombre, apellido, edad, materia, grupo }) {
  return (
    <div className="tarjeta-usuario">
      <h3>Portada</h3>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Apellido:</strong> {apellido}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Curso:</strong> {materia}</p>
      <p><strong>Grupo:</strong> {grupo}</p>
    </div>
  );
}

export default TarjetaUsuario;