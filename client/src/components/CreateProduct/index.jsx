import Form from './form';
import { Main } from "../../containers/MainContainer/styles";
import { postProduct, getProducts } from '../../redux/actions/product';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function CreateProduct () {
    const dispatch = useDispatch()

    function submit ( product ) {
        dispatch(postProduct(product));
        toast.success("Producto Creado !");
        // console.log(product);
        setTimeout(()=>{
            dispatch(getProducts())
          },1000)
    }

    return (
        <Form submit={submit}/>
    )
}



