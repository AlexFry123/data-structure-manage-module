import { useState } from 'react'
import { Row, Col } from '@qonsoll/react-design'
import { Form } from 'antd'
import { CharacteristicSelect } from '~/app/components'
import { RELATION_TYPES } from '~/app/constants'
import ModelSelect from '../ModelSelect'

function CharacteristicFormItem(props) {
  const { name, fieldKey, models, ...restFields } = props

  const [referenceModelVisibility, setReferenceModelVisibility] =
    useState(false)

  return (
    <Row>
      <Col>
        <Form.Item
          {...restFields}
          name={[name, 'characteristic']}
          fieldKey={[fieldKey, 'characteristic']}
          rules={[
            {
              required: true,
              message: 'Please, choose data type or relation type'
            }
          ]}>
          <CharacteristicSelect
            setReferenceModelVisibility={setReferenceModelVisibility}
            referenceModelVisibility={referenceModelVisibility}
          />
        </Form.Item>
      </Col>
      <Col>
        {referenceModelVisibility && (
          <Form.Item
            {...restFields}
            name={[name, 'modelRef']}
            fieldKey={[fieldKey, 'modelRef']}
            rules={[
              {
                required: true,
                message: 'Please, choose model to relate with'
              }
            ]}>
            <ModelSelect models={models} />
          </Form.Item>
        )}
      </Col>
    </Row>
  )
}

export default CharacteristicFormItem
