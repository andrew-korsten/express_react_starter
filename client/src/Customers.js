import { useEffect, useState } from "react";

const Customers = () => {

    const [customers, setCustomers] = useState([]);

    //  Item 7, Create the clickHandler+fetch and update customers-state with data

    const showCustomersHandler = () => {
        fetch('/api/customers')
        .then(res => res.json())
        .then(customers => {
            setCustomers(customers);
            console.log(customers);
        })
    }
    
    return (
        <div className="customers">
            <h2>Customers</h2>
            <button onClick={showCustomersHandler}>Show customers</button>
            {/* Item 8, Create the render template */}
            <ul>
                {customers.map(customer =>
                    <li key={customer.id}>{ customer.firstName } { customer.lastName }</li>
                )}
            </ul>
        </div>
    );
}
 
export default Customers;