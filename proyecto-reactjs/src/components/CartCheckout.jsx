import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { CartContext } from './CartContext';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import './styles.css';

export default function CartCheckout() {


    const [emailReq, setEmailReq] = useState("");
    const [cellphoneReq, setCellphoneReq] = useState(0);
    const handleEmailRequired = (e) => { setEmailReq(e.target.value) }
    const handleCellphoneRequired = (e) => { setCellphoneReq(e.target.value) }

    const { cart, clear, valorTotal } = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        cellphone: "",
        email: ""
    });

    const [checkoutId, setCheckoutId] = useState("");

    console.log(buyer);

    const handleOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const sendOrder = () => {
        if (emailReq === "") { alert("Complete los campos obligatorios") }
        else if (cellphoneReq === 0) { alert("Complete los campos obligatorios") } else {
            let orderDate = serverTimestamp();
            const venta = {
                buyer: buyer,
                items: cart,
                total: valorTotal,
                date: orderDate,
            }
            console.log(venta);
            const db = getFirestore();
            const ordersCollection = collection(db, "ventas");
            addDoc(ordersCollection, venta).then(({ id }) => setCheckoutId(id));
            clear();
        }
    }


    return (
        <>
            {checkoutId === "" && <>
                <Form className='formC'><Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Ingrese su email" onChange={(e) => { handleOnChange(e); handleEmailRequired(e) }} required />
                    <Form.Text className="text-muted">
                        Campo obligatorio.
                    </Form.Text>
                </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Ingrese su nombre" onChange={handleOnChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control name='surname' type="text" placeholder="Ingrese su apellido" onChange={handleOnChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control name='cellphone' type="number" placeholder="Ingrese su celular" onChange={(e) => { handleOnChange(e); handleCellphoneRequired(e) }} required />
                        <Form.Text className="text-muted">
                            Campo obligatorio.
                        </Form.Text>
                    </Form.Group></Form>
            </>}
            {checkoutId === "" ? <Button className='btnCheck' variant="primary" type='submit' onClick={() => sendOrder()}>Enviar y finalizar compra</Button> :
                <div className='textC'>
                    <h2>Gracias por tu compra: {buyer.name} {buyer.surname}</h2>
                    <h4>Tu ID de compra es: {checkoutId}</h4>
                    <p className='textC2'>
                        Con este id podrás reclamar tu compra en caso de un imprevisto.
                        Pronto nos estaremos comunicando con vos via email o mediante tu numero de celular para coordinar la entrega de tus productos.
                        Si quieres seguir comprando clickea en el apartado "Inicio" en la barra de navegación.
                    </p>
                </div>}
        </>
    )
}