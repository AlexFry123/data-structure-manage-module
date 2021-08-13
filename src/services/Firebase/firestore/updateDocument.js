import firestore from 'services/Firebase/firestore'
import _ from 'lodash'

/**
 * @info updateDocument (06 Apr 2021) // CREATION DATE
 *
 * @since 15 Apr 2021 ( v.0.0.3 ) // LAST-EDIT DATE
 *
 * @param {string}    path                      Path to a collection.
 * @param {string}    id     	                  Path to a document.
 * @param {object}    data                      Data for the document.
 * @param {Object}    [options]                 An object to configure the method behavior.
 * @param {boolean}   [options.merge]           Use to update document instead of overwrite.
 * @param {boolean}   [options.withoutUndef]    Use to remove undefined field in data object.
 *
 * @return {Promise<void>}
 */

const updateDocument = (path, id, data, options = {}) => {
  const { merge = true, withoutUndef = true } = options
  const docRef = firestore.collection(path).doc(id)
  const buf = withoutUndef ? _.omitBy(data, _.isNil) : data
  if (merge) {
    return docRef.set(buf, {
      merge
    })
  }
  return docRef.set(buf)
}

export default updateDocument
