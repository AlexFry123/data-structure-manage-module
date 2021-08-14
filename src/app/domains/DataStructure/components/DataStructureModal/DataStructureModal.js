import { useState } from 'react'
import DataStructureForm from 'app/domains/DataStructure/components/DataStructureForm'
import { Modal, Form } from 'antd'
import { Title, Button } from '@qonsoll/react-design'

function DataStructureModal(props) {
  const { isEdit, visible, onFormSubmit, setVisibility, id, initialValues } =
    props

  // [COMPONENT STATE HOOKS]
  const [loading, setLoading] = useState(false)

  // [ADDITIONAL HOOKS]
  const [form] = Form.useForm()

  // [CLEAN FUNCTIONS]
  const onCancel = () => {
    setVisibility(false)
    form.resetFields()
  }

  const onFinish = async (data) => {
    setLoading(true)
    await onFormSubmit({ id, isEdit, data })
    !isEdit && form.resetFields()
    setVisibility(false)
    setLoading(false)
  }

  return (
    <Modal
      title={
        <Title level={4}>
          {isEdit ? 'Edit data structure' : 'Create new data structure'}
        </Title>
      }
      destroyOnClose
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button onClick={onCancel} loading={loading}>
          Cancel
        </Button>,
        <Button onClick={() => form.submit()} type="primary" loading={loading}>
          {isEdit ? 'Save changes' : 'Create structure'}
        </Button>
      ]}>
      <DataStructureForm
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
      />
    </Modal>
  )
}

export default DataStructureModal
