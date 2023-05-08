import { useState } from 'react';
import Menu from './Menu2';


const AgregarBarbero = ({ onAdd }) => {
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

const BarberCard = ({ nombre,cedula,telefono }) => {
	return (
		<section>
			<h3>{nombre}</h3>
			<h3>{cedula}</h3>
			<h3>{telefono}</h3>
		</section>
	);
};

const Barberos = () => {
	const [barberList, setBarberList] = useState([]);

	const handleAddBarber = (barber) => {
		setBarberList((prevList) => [...prevList, barber]);
	};

	return (
		<section>
			<Menu/>
			<h1>Barberos</h1>
			<AgregarBarbero onAdd={handleAddBarber} />
			<section>
				{barberList.map((barber, index) => (
					<BarberCard key={index} nombre={"Nombre :"+barber.nombre} cedula={"Cedula:"+barber.cedula} telefono={"Telefono:"+barber.telefono}
					 />
				))}
			</section>
		</section>
	);
};

export default Barberos;