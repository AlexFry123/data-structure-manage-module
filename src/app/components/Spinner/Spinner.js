import { Row, Col, Container, Text } from '@qonsoll/react-design'
import { Spin } from 'antd'

const Spinner = (props) => {
  const { text, textStyles, ...rest } = props

  return (
    <Container {...rest}>
      <Row v="center" style={{ flexDirection: 'column' }}>
        <Col cw="auto" mb={2}>
          <Spin size="large" />
        </Col>
        <Col cw="auto">
          <Text type="secondary" style={textStyles}>
            Loading...
          </Text>
        </Col>
      </Row>
    </Container>
  )
}

export default Spinner
