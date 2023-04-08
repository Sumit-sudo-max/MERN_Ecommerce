import React from 'react'
import Meta from '../../components/Site-Layout/Meta'
import BreadCrumbs from '../../components/Site-Layout/BreadCrumbs'
import Container from '../../components/Container/Container'

const PrivacyPolicy = () => {
    return (
        <>
        <Meta title={"Privacy Policy"}/>
        <BreadCrumbs title='Privacy Policy' />
        <Container class1="policy-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
}

export default PrivacyPolicy