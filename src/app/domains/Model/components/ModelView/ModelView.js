import { Box, Col, Row, Text, Button, Title } from '@qonsoll/react-design'
import { message, Popconfirm, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import ModelModal from '../ModelModal'
import { useState } from 'react'
import { deleteDocument, getCollectionRef } from '~/services/Firebase/firestore'
import { COLLECTIONS } from '~/app/constants'

function ModelView(props) {
  const { name, fields, id, onModelFormSubmit, models } = props

  // [COMPONENT STATE HOOKS]
  const [currentlyEditedModel, setCurrentlyEditedModel] = useState()
  const [modalVisibility, setModalVisibility] = useState(false)

  // [CLEAN FUNCTIONS]

  const onEditClick = async () => {
    const modelData = await getCollectionRef(COLLECTIONS.MODELS).doc(id).get()
    setCurrentlyEditedModel(modelData.data())
    setModalVisibility(true)
  }
  const onDeleteClick = async () => {
    try {
      await deleteDocument(COLLECTIONS.MODELS, id)
      message.success('Successfully deleted model')
    } catch (err) {
      console.log(err)
      message.error('Error occurred during model delete')
    }
  }

  return (
    <>
      <Box
        border="1px solid black"
        mr={4}
        borderRadius="6px"
        maxWidth="fit-content"
        background="rgba(29,111,220,0.04)">
        <Row py={2} px={2} v="center" borderBottom="1px solid black">
          <Col h="center">
            <Title level={4}>{name}</Title>
          </Col>
          <Col>
            <Space>
              <Button
                primary
                onClick={onEditClick}
                icon={<EditOutlined />}></Button>
              <Popconfirm
                onConfirm={onDeleteClick}
                title={'Delete this model?'}
                okType="danger"
                okText="Delete">
                <Button danger icon={<DeleteOutlined />}></Button>
              </Popconfirm>
            </Space>
          </Col>
        </Row>
        {fields?.map((item, index) => (
          <Row noOuterGutters px={2} py={2} key={index}>
            <Col>
              <Text>{item?.fieldName}</Text>
            </Col>
            <Col>
              <Text>
                {item?.modelRef
                  ? `${models[item?.modelRef] || 'null'} ref`
                  : item?.characteristic}
              </Text>
            </Col>
          </Row>
        ))}
      </Box>
      <ModelModal
        models={models}
        id={id}
        isEdit
        visibility={modalVisibility}
        setVisibility={setModalVisibility}
        onFormSubmit={onModelFormSubmit}
        initialValues={currentlyEditedModel}
      />
    </>
  )
}

export default ModelView
