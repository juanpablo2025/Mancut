import { useState } from 'react';
import Menu from './Menu2';



const Producto = () => {
	const [listaProductos, setListaProductos] = useState([]);
	const [nuevoProducto, setNuevoProducto] = useState('');

	const handleAddProduct = (event) => {
		event.preventDefault();
		setListaProductos([...listaProductos, nuevoProducto]);
		setNuevoProducto('');
	};

	return (
		<section>
			<Menu/>
			<h1>Productos</h1>
			<section className='tarjetas'>
				<form onSubmit={handleAddProduct}>
					<label htmlFor='nuevoProducto'>Agregar producto:</label>
					<input
						type='text'
						value={nuevoProducto}
						onChange={(event) => setNuevoProducto(event.target.value)}
					/>
					<button type='submit'>Agregar</button>
				</form>
			</section>
			<section className='tarjetas'>
				{listaProductos.map((producto, index) => (
					<section key={index}>
						<h3>{producto}</h3>
					</section>
				))}
			</section>
		</section>
	);
};

export default Producto;
