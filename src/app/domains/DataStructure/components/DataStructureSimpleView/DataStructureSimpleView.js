import { useState } from 'react'
import { Box, Text, Row, Col } from '@qonsoll/react-design'
import { FileOutlined, MoreOutlined } from '@ant-design/icons'
import {
  CardItem,
  ItemPreview
} from 'app/domains/DataStructure/components/DataStructureSimpleView/DataStructureSimpleView.styles'
import { Dropdown, Menu, message, Popconfirm } from 'antd'
import DataStructureModal from '../DataStructureModal'
import { deleteDocument, getCollectionRef } from '~/services/Firebase/firestore'
import { COLLECTIONS } from '~/app/constants'

const { Item } = Menu

function DataStructureSimpleView(props) {
  const { id, name, onEdit } = props

  // [COMPONENT STATE HOOKS]
  const [modalVisibility, setModalVisibility] = useState(false)
  const [popconfirmVisibility, setPopconfirmVisibility] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  // [CLEAN FUNCTIONS]
  const onEditClick = () => {
    setModalVisibility(true)
  }
  const showPopconfirm = ({ domEvent }) => {
    domEvent.stopPropagation()
    setPopconfirmVisibility(!popconfirmVisibility)
  }

  const onDelete = async () => {
    setConfirmLoading(true)
    try {
      await deleteDocument(COLLECTIONS.DATA_STRUCTURES, id)
      const modelsSnapshot = await getCollectionRef(COLLECTIONS.MODELS)
        .where('dataStructureId', '==', id)
        .get()
      modelsSnapshot.forEach((item) => item.ref.delete())
      message.success('Successfully deleted data structure')
    } catch (err) {
      console.log(err)
      message.error('Error occurred during data structure delete')
    }
    setPopconfirmVisibility(false)
    setConfirmLoading(false)
  }

  const menu = (
    <Menu>
      <Item onClick={onEditClick} key={'showModal'}>
        <Text>Edit</Text>
        <DataStructureModal
          isEdit
          initialValues={{ name }}
          id={id}
          visible={modalVisibility}
          setVisibility={setModalVisibility}
          onFormSubmit={onEdit}
        />
      </Item>

      <Item onClick={(e) => showPopconfirm(e)} key={'showPopconfirm'} danger>
        <Popconfirm
          visible={popconfirmVisibility}
          onConfirm={onDelete}
          title={'Delete this data structure?'}
          okButtonProps={{ loading: confirmLoading }}
          okType="danger"
          okText="Delete">
          <Text>Delete</Text>
        </Popconfirm>
      </Item>
    </Menu>
  )

  return (
    <CardItem>
      <Box display="block" width="inherit">
        <ItemPreview mb={2}>
          <FileOutlined style={{ fontSize: '40px' }} />
        </ItemPreview>

        <Row h="center" v="center">
          <Col>
            <Text ellipsis textAlign="center">
              {name}
            </Text>
          </Col>
          <Col cw="auto">
            <Dropdown overlay={menu} placement="bottomRight">
              <MoreOutlined
                onClick={(e) => {
                  e.stopPropagation()
                }}
              />
            </Dropdown>
          </Col>
        </Row>
      </Box>
    </CardItem>
  )
}

export default DataStructureSimpleView
