




const Contenido = () => {



    return (
        <div className="contenido">
            <section className="agregar">

            </section>
            <section className="tarjetas">

                <form>
                    <h1 className="titulo">Cliente</h1>
                    <label>
                        nombre:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Documento:
                        <input type="text" name="documento" />
                    </label>
                    <label>
                        Celular:
                        <input type="text" name="celular" />
                    </label>
                    <label>
                        direccion:
                        <input type="text" name="direccion" />
                    </label>
                    <label>
                        email:
                        <input type="text" name="email" />
                    </label>

                    <input type="submit" value="guardar" />
                </form>

                <form>
                    <h1 className="titulo">Barbero</h1>
                    <label>
                        nombre:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Documento:
                        <input type="text" name="documento" />
                    </label>
                    <label>
                        Celular:
                        <input type="text" name="celular" />
                    </label>
                    <label>
                        direccion:
                        <input type="text" name="direccion" />
                    </label>
                    <label>
                        email:
                        <input type="text" name="email" />
                    </label>
                    <input type="submit" value="guardar" />
                </form>

                <form>
                    <h1 className="titulo">Producto</h1>
                    <label>
                        nombre:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Documento:
                        <input type="text" name="documento" />
                    </label>
                    <label>
                        Celular:
                        <input type="text" name="celular" />
                    </label>
                    <label>
                        direccion:
                        <input type="text" name="direccion" />
                    </label>
                    <label>
                        email:
                        <input type="text" name="email" />
                    </label>
                    <input type="submit" value="guardar" />
                </form>

            </section>


        </div>
    );
};

export default Contenido;