import styled from 'styled-components'
import { Box } from '@qonsoll/react-design'

export const CardItem = styled(Box)`
  ${({ theme }) => `
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 6px;
  cursor: pointer;
  background: ${theme?.color?.dark?.t?.lighten9};
  width: -webkit-fill-available;
  height: ${(props) => (props.itemHeight ? props.itemHeight : 'fit-content')};
  display: flex;
  flex:1;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${theme?.color?.dark?.t?.lighten8};
    border-color: ${theme?.color?.dark?.t?.lighten8};
  }
`}
`

export const ItemPreview = styled(Box)`
  display: flex;
  position: relative;
  width: -webkit-fill-available;
  height: 140px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme?.color?.white?.default};
`
