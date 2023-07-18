import {Col, Placeholder} from "react-bootstrap";

export default function ProductListCardLoading () {
    return (
        <>
            <Col style={{width: "350px", height: "300px"}}>
                <Placeholder xs={6} />
                <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                <Placeholder xs={6} />
                <Placeholder xs={6} />
                <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                <Placeholder xs={6} />
            </Col>
        </>
    )
}