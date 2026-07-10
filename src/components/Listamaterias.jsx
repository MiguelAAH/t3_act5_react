function ListaMaterias() {
    const materias = [
        { id: 1, nombre: 'Estructuras de Datos', nivel: 'Intermedio' },
        { id: 2, nombre: 'Desarrollo Web con React', nivel: 'Principiante' },
        { id: 3, nombre: 'Bases de Datos', nivel: 'Avanzado' }
    ];

    return (
        <div className="lista-box">
            <h3>Materias Registradas (map)</h3>
            <ul>
                {materias.map((materia) => (
                    <li key={materia.id} style={{ margin: '8px 0' }}>
                        <strong>{materia.nombre}</strong> — <span style={{ color: '#aaa' }}>{materia.nivel}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ListaMaterias;