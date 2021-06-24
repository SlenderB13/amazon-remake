import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { Button } from '@material-ui/core'
import { useStateValue } from '../../../StateProvider'
import { getCartValue } from '../../../reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory();

    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        SubTotal ({ cart.length } items): <strong>{ value }</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />This order is a gift!
                    </small>
                </>
            )} 
            decimalScale={2}
            value={getCartValue(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"} 
            />

            <Button onClick={user ? e => history.push('/payment') 
            : e => history.push('/login')}>Show me the money</Button>
        </div>
    )
}

export default Subtotal
