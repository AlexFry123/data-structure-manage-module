import { Select } from 'antd'

const { Option } = Select

function ModelSelect(props) {
  const { models, value, onChange } = props

  // [COMPUTED PROPERTIES]
  const modelsArray = Object.entries(models)

  return (
    <Select
      defaultValue={models[value] || modelsArray[0][1]}
      onChange={onChange}>
      {modelsArray?.map((item) => (
        <Option value={item[0]}>{item[1]}</Option>
      ))}
    </Select>
  )
}

export default ModelSelect
