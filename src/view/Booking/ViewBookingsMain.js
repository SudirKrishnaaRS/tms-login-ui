import React from 'react';
import ViewBookings from './ViewBookings';

const ViewBookingsMain = () => {
    return(
            <div>
                <ViewBookings imgCard="https://th.bing.com/th/id/OIP.ouzr10-SMvtFmYKtoVKzmwHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Darjeeling" prize="20000.00" description="3D/2N"/>                          
                <ViewBookings imgCard="https://th.bing.com/th/id/OIP.Xzp5t4a93ffPJlZAQgvWdgHaD4?w=329&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Maldives" prize="15000.00" description="2D/1N"/>
                <ViewBookings imgCard="https://th.bing.com/th/id/OIP.CaCO2JsOlLDlfjCkoNQKhgHaE8?w=279&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7" destination="Goa" prize="25000.00" description="3D/2N"/>
            </div>
    )
}

export default ViewBookingsMain;