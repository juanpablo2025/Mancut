import { Link } from "react-router-dom";
const Menu = () => {

	return (
        <section className='menu'>
		<section className='enlaces'>
			<Link to={'/'}>Inicio</Link>
			<Link to={'/ContenidoBarbero'}>Barbero</Link>
			<Link to={'/ContenidoAgregarCliente'}>Cliente</Link>
			<Link to={'/ContenidoAgregarProducto'}>Producto</Link>

		</section >
        </section>
	);
};

export default Menu;