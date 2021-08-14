import { Form, Input } from 'antd'

function DataStructureForm(props) {
  return (
    <Form {...props}>
      <Form.Item
        name="name"
        rules={[
          { required: true, message: 'Enter data structure name, please' }
        ]}>
        <Input autoFocus placeholder="Enter name" />
      </Form.Item>
    </Form>
  )
}

export default DataStructureForm
