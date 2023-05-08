import { useState } from 'react';
import Menu from './Menu2';


const AgregarCliente = ({ onAdd }) => {
	
	const [nombre, setNombre] = useState('');
	const [cedula, setCedula] = useState('');
	const [telefono, setTelefono] = useState('');


	const handleSubmit = (event) => {
		event.preventDefault();
		onAdd({ nombre });
		setNombre('');
		onAdd({ cedula });
		setCedula('');
		onAdd({ telefono });
		setTelefono('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Nombre:</label>
			<input
				type="text"
				value={nombre}
				onChange={(event) => setNombre(event.target.value)}
			/>
			<label htmlFor="cedula">Cedula:</label>
			<input
				type="text"
				value={cedula}
				onChange={(event) => setCedula(event.target.value)}
			/>

<label htmlFor="telefono">Telefono:</label>
			<input
				type="text"
				value={telefono}
				onChange={(event) => setTelefono(event.target.value)}
			/>
			<button type="submit">Agregar</button>
		</form>
	);
};

const ClienteCard = ({ nombre,telefono,cedula }) => {
	return (
		<section>
			<h3>{nombre}</h3>
			<h3>{telefono}</h3>
			<h3>{cedula}</h3>
		</section>
	);
};

const Cliente = () => {
	const [listaCliente, setListaCliente] = useState([]);

	const handleAddClient = (cliente) => {
		setListaCliente((VistaLista) => [...VistaLista, cliente]);
	};

	return (
		<section>
			<Menu/>
			<h1>Clientes</h1>
			<AgregarCliente onAdd={handleAddClient} />
			<section>
				{listaCliente.map((cliente, index) => (
					<ClienteCard key={index} nombre={cliente.nombre} cedula={cliente.cedula} telefono={cliente.telefono}/>
				))}
			</section>
		</section>
	);
};

export default Cliente;