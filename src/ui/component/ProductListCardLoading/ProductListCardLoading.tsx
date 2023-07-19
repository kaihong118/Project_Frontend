import {Card, Col, Placeholder, Spinner} from "react-bootstrap";

export default function ProductListCardLoading () {
    return (
        <>
            {/*<Col style={{width: "350px", height: "300px"}}>*/}
            {/*    <Placeholder xs={6} />*/}
            {/*    <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />*/}
            {/*    <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />*/}
            {/*    <Placeholder xs={6} />*/}
            {/*    <Placeholder xs={6} />*/}
            {/*    <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />*/}
            {/*    <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />*/}
            {/*    <Placeholder xs={6} />*/}
            {/*</Col>*/}

            <Col style={{width: "300px"}}>
                <Card style={{backgroundColor: "transparent", border: "0px"}}>
                    <div style={{height: "276px", width: "276px"}}
                         className="d-flex justify-content-center align-items-center">

                        <Spinner animation="grow"/>
                    </div>
                    <Card.Body>
                        <Card.Title
                            className="product-title"
                            style={{fontWeight: "bolder"}}>
                            <Placeholder xs={6}/>
                        </Card.Title>
                        <Card.Text style={{fontSize: "14px"}}>
                            <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={"d-flex justify-content-between align-items-center"} style={{borderTop: "2px solid #666362", fontWeight: "bolder", color: "red", backgroundColor: "transparent"}}>
                            <Placeholder xs={6}/>
                            <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}