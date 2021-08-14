import { useState } from 'react'
import { Button, Title } from '@qonsoll/react-design'
import { Modal, Form } from 'antd'
import ModelForm from '../ModelForm'

function ModelModal(props) {
  const {
    isEdit,
    visibility,
    setVisibility,
    onFormSubmit,
    id,
    initialValues,
    models
  } = props

  // [COMPONENT STATE HOOKS]
  const [loading, setLoading] = useState(false)

  // [ADDITIONAL HOOKS]
  const [form] = Form.useForm()

  // [CLEAN FUNCTIONS]
  const onFinish = async (data) => {
    setLoading(true)
    await onFormSubmit?.({ editedId: id, isEdit, data })
    !isEdit && form.resetFields()
    setVisibility(false)
    setLoading(false)
  }

  const onCancel = () => {
    setVisibility(false)
    form.resetFields()
  }

  return (
    <Modal
      style={{ minWidth: '800px' }}
      visible={visibility}
      title={
        <Title level={4}>{isEdit ? 'Edit model' : 'Create new model'}</Title>
      }
      onCancel={onCancel}
      destroyOnClose
      footer={[
        <Button onClick={onCancel} loading={loading}>
          Cancel
        </Button>,
        <Button onClick={() => form.submit()} type="primary" loading={loading}>
          {isEdit ? 'Save changes' : 'Create model'}
        </Button>
      ]}>
      <ModelForm
        models={models}
        form={form}
        onFinish={onFinish}
        initialValues={initialValues}
      />
    </Modal>
  )
}

export default ModelModal
