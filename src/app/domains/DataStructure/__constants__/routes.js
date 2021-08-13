import { DataStructureAll } from 'app/domains/DataStructure/routes'
import ROUTE_PATHS from 'app/domains/allRoutePaths'

export default [
  {
    name: 'DataStructureAll',
    path: ROUTE_PATHS.DATA_STRUCTURE_ALL,
    exact: true,
    component: DataStructureAll
  }
]
