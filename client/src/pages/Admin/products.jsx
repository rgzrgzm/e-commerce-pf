import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './products.css';
import { deleteProduct, getProducts, postProduct } from '../../redux/actions/product';
import { useEffect, useState } from "react";
import Modal from '../../components/Modal/Modal';
import EditProduct from '../../components/EditProduct';
import EditForm from '../../components/EditProduct/form';

export default function Products() {
  const [modal, setModal] = useState(false)
  const [EditProduct, setEditProduct] = useState({})
  const [search, setSearch] = useState({
    nombre: ""
  })
  const [datos, setDatos] = useState({
    usuariosFiltrados: useSelector((state) => state.product.products)
  })
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  function borrar(id) {
    dispatch(deleteProduct(id))
    alert("Producto Eliminado !");
    dispatch(getProducts());
  }

  // function submit(product) {
  //   dispatch(postProduct(product));
  //   alert("Producto Creado !");
  // }

  function editar(datos) {
    setEditProduct(datos)
    setModal(!modal)
  }
  
  function handleInputChange(e) {
    // e.preventDefault()
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setDatos({ usuariosFiltrados: products.filter(el => el.nombre.toLowerCase().includes(search.nombre.toLowerCase())) })
  }

  function RecargarSubmit(e) {
    // e.preventDefault()
    setDatos({ usuariosFiltrados: products })
    setSearch({
      nombre: "",
    })
  }

  const columnas = [
    {
      name: 'Nombre',
      selector: row => row.nombre.trim(),
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Precio $',
      selector: row => row.precio,
      sortable: true,
      grow: 0,
    },
    {
      name: 'Talle',
      selector: row => row.talles.map(e => `${e.talle} / `),
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Stock',
      selector: row => row.talles.map(e => `${e.producto_talle.stock} / `),
      sortable: true,
      grow: 0.2,
    },
    {
      name: 'Categoria',
      selector: row => row.categorium.nombre,
      sortable: true,
      grow: 0.1,
    },
    {
      name: 'Borrar',
      selector: row => <button className='user' onClick={() => borrar(row.id)}>Eliminar</button>,
      sortable: true,
      grow: 0.1,
    },
    {
      name: 'Modificar',
      selector: row => <button className='user' onClick={() => editar(row)}>Editar</button>,
      sortable: true,
      grow: 0,
    },
  ]

  const paginacionOpciones = {
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  }

  const header = modal === false ? true : false;

  return (
    <div>
      <Link to={"/createProduct"}><button className='nuevo'>Crear Nuevo Producto</button></Link>
      <div className='barraBusqueda'>
        <input
          type='text'
          name='nombre'
          value={search.nombre}
          className='textField'
          placeholder="Buscar"
          onChange={(c) => handleInputChange(c)}
        />
        <button type='submit' className="btnBuscar" onClick={(e) => handleSubmit(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg></button>
        <button type='submit' className="btnBuscar" onClick={(e) => RecargarSubmit(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
        </svg></button>
      </div>      
      <DataTable
        columns={columnas}
        data={datos.usuariosFiltrados}
        title="Productos"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader={header}
        fixedHeaderScrollHeight="600px"
      />
      {modal && (<Modal
        cambiarEstado={setModal} datos={EditProduct} submit={submit}
      />
      )}
    </div>
  )
}