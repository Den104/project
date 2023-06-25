import { Row, Col, Card } from "react-bootstrap";

export default function Gallery() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="h-100">
            <Card.Img variant="top" src={require(`../assets/${idx + 1}.jpg`)} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
