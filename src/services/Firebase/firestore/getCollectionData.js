import firestore from 'services/Firebase/firestore'

/**
 * @info getCollectionData (06 Apr 2021) // CREATION DATE
 *
 * @comment getCollectionData - function for get data from collection
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {Object}                                                params
 * @param {string}                                                params.path                Path to collection.
 * @param {CollectionReference<DocumentData> | Query<T>}          params.ref                 Collection reference.
 *
 * @return {Object[]} array of document's data
 */

const getCollectionData = async ({ path, ref }) => {
  let data
  if (ref) {
    data = await ref.get()
  } else {
    data = await firestore.collection(path).get()
  }
  return data.docs.map((item) => item.data())
}
export default getCollectionData
