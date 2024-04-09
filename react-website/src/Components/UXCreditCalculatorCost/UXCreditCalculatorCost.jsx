import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import data from './data.json';

const UXCreditCalculatorCost = () => {
    // Definition of the variables used
    const [selectedGeographicalArea, setSelectedGeographicalArea] = useState('');
    const [selectedSpecificArea, setSelectedSpecificArea] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedTones, setSelectedTones] = useState(0);

    // Function that computes the final price paid
    const calculatePrice = () => {
        setTotalPrice(selectedTones*selectedPrice);
    }

    // Because we use JSON, this function is necessary for the mapping of the ekements in the jurisdiction_covered
    // We transform the information in a Set to get only once the repeated values
    const DisplayGeographicalArea = [...new Set(data.map(item => item.jurisdiction_covered))].map(
        (info) => {
            return (
                <option key={info}>{info}</option>
            )
        }
    )

    // Because we use JSON, this function is necessary for the mapping of the ekements in the types
    const DisplaySpecificArea = data.filter(geographicalArea => geographicalArea.jurisdiction_covered === selectedGeographicalArea).map(
        (info) => {
            return (
                <option key={info.type}>{info.type}</option>
            )
        }
    )

    // This function handles the selection of the type and finds the value of the price in our specific case
    const handleAreaAndPriceSelection = (event) => {
        setSelectedSpecificArea(event.target.value)
        const Price = data.filter(geographicalArea => geographicalArea.jurisdiction_covered === selectedGeographicalArea).find(typeA => typeA.type === event.target.value)?.price_desc || 0;
        setSelectedPrice(Price)
    }

    return (
    <Container>
      <Row className="mt-5">
      <Col xs={9} sm={4} md={3}>
          <Form.Group>
            <Form.Label>Insert the number of carbon tones:</Form.Label>
            <Form.Control as="input" value={selectedTones} onChange={e => setSelectedTones(e.target.value)}></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={9} sm={4} md={3}>
          <Form.Group>
            <Form.Label>Geographical Area:</Form.Label>
            <Form.Control as="select" value={selectedGeographicalArea} onChange={e => setSelectedGeographicalArea(e.target.value)}>
              <option value="">Select</option>
              { DisplayGeographicalArea }
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={9} sm={4} md={3}>
          <Form.Group>
            <Form.Label>Specific Area:</Form.Label>
            <Form.Control as="select" value={selectedSpecificArea} onChange={handleAreaAndPriceSelection}>
              <option value="">Select</option>
              {DisplaySpecificArea}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={9} sm={8} md={3}>
          <Form.Group>
            <Form.Label>Total Price:</Form.Label>
            <Form.Control type="text" value={totalPrice} readOnly />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <button className="btn btn-success" onClick={calculatePrice}>Calculate</button>
        </Col>
      </Row>
    </Container>
    )
}

export default UXCreditCalculatorCost