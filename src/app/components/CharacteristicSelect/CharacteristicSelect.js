import { Select } from 'antd'
import { useEffect } from 'react'
import { DATA_TYPES, RELATION_TYPES } from '~/app/constants'

const { Option, OptGroup } = Select

function CharacteristicSelect(props) {
  const {
    value,
    onChange,
    setReferenceModelVisibility,
    referenceModelVisibility
  } = props

  // [CLEAN FUNCTIONS]
  const onChangeCharacteristic = (selectedValue) => {
    if (RELATION_TYPES.includes(selectedValue))
      setReferenceModelVisibility(true)
    else if (referenceModelVisibility) {
      setReferenceModelVisibility(false)
    }
    onChange?.(selectedValue)
  }

  // [USE EFFECTS]
  useEffect(() => {
    if (RELATION_TYPES.includes(value)) setReferenceModelVisibility(true)
  }, [])

  return (
    <Select defaultValue={value} onChange={onChangeCharacteristic}>
      <OptGroup label="Data types">
        {DATA_TYPES.map((item) => (
          <Option value={item}>{item}</Option>
        ))}
      </OptGroup>
      <OptGroup label="Relation types">
        {RELATION_TYPES.map((item) => (
          <Option value={item}>{item}</Option>
        ))}
      </OptGroup>
    </Select>
  )
}

export default CharacteristicSelect
