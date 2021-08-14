import { useState } from 'react'
import { Box, Text, Row, Col, PageWrapper } from '@qonsoll/react-design'
import { PlusOutlined } from '@ant-design/icons'
import {
  DataStructureModal,
  DataStructureSimpleView
} from 'app/domains/DataStructure/components'
import { CardItem } from 'app/domains/DataStructure/components/DataStructureSimpleView/DataStructureSimpleView.styles'
import {
  createDocument,
  getCollectionRef,
  updateDocument
} from 'services/Firebase/firestore'
import { COLLECTIONS } from 'app/constants'
import { message } from 'antd'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { PageLoading } from '~/app/components'
import { generatePath, useHistory } from 'react-router-dom'
import ROUTE_PATHS from '~/app/domains/allRoutePaths'

function DataStructureAll() {
  // const dataStructures = [
  //   { name: 'Test1' },
  //   { name: 'Test1' },
  //   { name: 'Test1' },
  //   { name: 'Test1' }
  // ]

  // [COMPONENT STATE HOOKS]
  const [modalVisibility, setModalVisibility] = useState(false)

  // [ADDITIONAL HOOKS]
  const [dataStructures, dataStructuresLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.DATA_STRUCTURES)
  )
  const history = useHistory()

  // [CLEAN FUNCTIONS]
  const openModal = () => {
    setModalVisibility(true)
  }

  const onDataStructureItemClick = (id) => {
    history.push(generatePath(ROUTE_PATHS.DATA_STRUCTURE_SHOW, { id }))
  }

  const onStructureFormSubmit = async (params) => {
    const { id, isEdit, data } = params
    try {
      isEdit
        ? await updateDocument(COLLECTIONS.DATA_STRUCTURES, id, data)
        : await createDocument(COLLECTIONS.DATA_STRUCTURES, data)
      message.success(
        `Successfully ${isEdit ? 'edited' : 'created new'} data structure`
      )
    } catch (err) {
      console.log(err)
      message.error(
        `Error occurred during data structure ${
          isEdit ? 'editing' : 'creation'
        }`
      )
    }
  }

  return (
    <PageLoading loading={dataStructuresLoading}>
      <PageWrapper
        headingProps={{
          title: 'Data structures',
          titleSize: 3,
          marginBottom: 'var(--margin-lg)'
        }}>
        <Row noGutters>
          {dataStructures &&
            dataStructures?.map((item, index) => (
              <Col
                cw={2}
                key={index}
                onClick={() => onDataStructureItemClick(item.id)}>
                <DataStructureSimpleView
                  id={item?.id}
                  name={item?.name}
                  onEdit={onStructureFormSubmit}
                />
              </Col>
            ))}
          <Col cw={2}>
            <CardItem
              onClick={openModal}
              onMouseDown={(e) => e.preventDefault()}>
              <PlusOutlined />
            </CardItem>
            <DataStructureModal
              isEdit={false}
              visible={modalVisibility}
              onFormSubmit={onStructureFormSubmit}
              setVisibility={setModalVisibility}
            />
          </Col>
        </Row>
      </PageWrapper>
    </PageLoading>
  )
}

export default DataStructureAll
