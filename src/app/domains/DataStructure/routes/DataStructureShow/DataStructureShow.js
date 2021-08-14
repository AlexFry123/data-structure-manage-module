import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Col, PageWrapper, Row, Text } from '@qonsoll/react-design'
import { PageLoading } from 'app/components'
import {
  useCollectionData,
  //   useCollectionData,
  useDocumentData
} from 'react-firebase-hooks/firestore'
import {
  createDocument,
  deleteDocument,
  getCollectionRef,
  updateDocument
} from '~/services/Firebase/firestore'
import { COLLECTIONS } from '~/app/constants'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Space } from 'antd'
import ModelModal from '~/app/domains/Model/components/ModelModal'
import { ModelView } from '~/app/domains/Model/components'

function DataStructureShow() {
  // [COMPONENT STATE HOOKS]
  const [modalVisibility, setModalVisibility] = useState(false)
  const [models, setModels] = useState([])

  // [ADDITIONAL HOOKS]
  const { id } = useParams()
  const [dataStructure, dataStructureLoading] = useDocumentData(
    getCollectionRef(COLLECTIONS.DATA_STRUCTURES).doc(id)
  )
  const [modelsData, modelsDataLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.MODELS).where('dataStructureId', '==', id)
  )

  // [CLEAN FUNCTIONS]
  // TODO implement saving structure as JSON file
  const saveStructureAsJSON = () => {}

  const openAddModelModal = () => {
    setModalVisibility(true)
  }

  const onModelFormSubmit = async (params) => {
    const { editedId, isEdit, data } = params
    try {
      isEdit
        ? await updateDocument(COLLECTIONS.MODELS, editedId, data)
        : await createDocument(COLLECTIONS.MODELS, {
            dataStructureId: id,
            ...data
          })
      message.success(`Successfully ${isEdit ? 'edited' : 'created new'} model`)
    } catch (err) {
      console.log(err)
      message.error(
        `Error occurred during model ${isEdit ? 'editing' : 'creation'}`
      )
    }
  }

  // [USE EFFECTS]
  useEffect(() => {
    const editedModels = {}
    modelsData?.forEach((item) => (editedModels[item.id] = item.name))
    modelsData && setModels(editedModels)
  }, [modelsData])

  return (
    <PageLoading loading={dataStructureLoading || modelsDataLoading}>
      <PageWrapper
        headingProps={{
          title: dataStructure?.name,
          titleSize: 3,
          marginBottom: 'var(--margin-lg)'
        }}
        action={[
          <Space>
            <Button onClick={saveStructureAsJSON}>
              <Box display="flex" alignItems="center">
                <Box mr={2}>
                  <DownloadOutlined />
                </Box>
                <Text>Save as JSON</Text>
              </Box>
            </Button>
            <Button onClick={openAddModelModal} primary>
              <Box display="flex" alignItems="center">
                <Box mr={2}>
                  <PlusOutlined />
                </Box>
                <Text>Add model</Text>
              </Box>
            </Button>
          </Space>
        ]}>
        <Row noGutters>
          {modelsData &&
            modelsData?.map((item, index) => (
              <ModelView
                id={item?.id}
                name={item?.name}
                fields={item?.fields}
                models={models}
                onModelFormSubmit={onModelFormSubmit}
              />
            ))}
        </Row>

        <ModelModal
          models={models}
          isEdit={false}
          visibility={modalVisibility}
          setVisibility={setModalVisibility}
          onFormSubmit={onModelFormSubmit}
        />
      </PageWrapper>
    </PageLoading>
  )
}

export default DataStructureShow
