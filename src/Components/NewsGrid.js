import { Row, Col, Card } from "react-bootstrap";

export default function NewsGrid() {
  return (
    <Row xs={1} md={3} className="g-4">
      {[
        "Актуальні проблеми дослідження довкілля (Міжнародна)",
        "Сьогодення біологічної науки (Міжнародна)",
        "Сумські наукові географічні читання (Всеукраїнська)",
        "Теоретичні та прикладні аспекти досліджень з біології, географії та хімії (Всеукраїнська)",
        "Освітні та наукові виміри природничих наук (Всеукраїнська)",
      ].map((title, idx) => (
        <Col key={idx}>
          <Card className="text-bg-secondary h-100">
            <Card.Img
              variant="top"
              src={require(`../assets/${idx + 1}.jpg`)}
              alt="image"
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <a
                href={`news/${idx + 1}`}
                class="btn btn-primary stretched-link"
              >
                Переглянути
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
