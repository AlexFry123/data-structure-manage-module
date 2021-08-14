import { Button, Col, Row } from '@qonsoll/react-design'
import { Form, Input } from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import CharacteristicFormItem from './CharacteristicFormItem'

function ModelForm(props) {
  const { models, ...rest } = props

  return (
    <Form {...rest} layout="vertical">
      <Form.Item
        label="Model name"
        name="name"
        rules={[{ required: true, message: 'Please, enter model name' }]}>
        <Input autoFocus placeholder="Enter model name here" />
      </Form.Item>
      <Form.Item label="Fields">
        <Form.List
          name="fields"
          rules={[
            {
              validator: async (_, fields) => {
                if (!fields || fields.length < 1) {
                  return Promise.reject(
                    new Error('You should add at least one field to the model')
                  )
                }
              }
            }
          ]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                <Row noOuterGutters v="center" mb={3} key={index}>
                  <Col cw={4}>
                    <Form.Item
                      {...restField}
                      // style={{ marginBottom: 0 }}
                      name={[name, 'fieldName']}
                      fieldKey={[fieldKey, 'fieldName']}
                      rules={[
                        { required: true, message: 'Please, enter field name' }
                      ]}>
                      <Input placeholder="Field name" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <CharacteristicFormItem
                      models={models}
                      name={name}
                      fieldKey={fieldKey}
                      {...restField}
                    />
                  </Col>
                  <Col cw={1}>
                    <Form.Item>
                      <Button type="text">
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
    </Form>
  )
}

export default ModelForm
