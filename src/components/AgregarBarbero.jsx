const AgregarBarbero = () => {



	return (
		<div className="contenido">
			<section className="agregar">

			</section>
			<section className="tarjetas">



				<form>
					<h1 className="titulo">Barbero</h1>
					<label>
						<p>nombre:</p>
						<input type="text" name="name" />
					</label>
					<label>
						<p>Documento:</p>
						<input type="text" name="documento" />
					</label>
					<label>
						<p>Celular:</p>
						<input type="text" name="celular" />
					</label>
					<label>
						<p>direccion:</p>
						<input type="text" name="direccion" />
					</label>
					<label>
						<p>email:</p>
						<input type="text" name="email" />
					</label>
					<input type="submit" value="guardar" />
				</form>



			</section>


		</div>
	);
};

export default AgregarBarbero;