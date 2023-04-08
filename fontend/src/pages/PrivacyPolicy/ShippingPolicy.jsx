import React from 'react';
import Meta from '../../components/Site-Layout/Meta'
import BreadCrumbs from '../../components/Site-Layout/BreadCrumbs'
import Container from '../../components/Container/Container';
import './Policies.css';

const ShippingPolicy = () => {
    return (
        <>
        <Meta title={"Shipping Policy"} />
        <BreadCrumbs title="Shipping Policy" />
        <Container className="policy-wrapper py-5 home-wrapper-2">
            <div className="row">
            <div className="col-12">
                <div className="policy"></div>
            </div>
            </div>
        </Container>
        </>
    )
}

export default ShippingPolicy