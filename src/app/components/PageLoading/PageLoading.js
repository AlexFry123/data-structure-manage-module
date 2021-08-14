import { PageWrapper } from '@qonsoll/react-design'
import Spinner from '../Spinner'

const PageLoading = (props) => {
  const { loading, loadingText, children, ...rest } = props
  if (loading)
    return (
      <PageWrapper firstLevelHidden alignMiddle {...rest}>
        <Spinner text={loadingText} />
      </PageWrapper>
    )
  return children
}

export default PageLoading
