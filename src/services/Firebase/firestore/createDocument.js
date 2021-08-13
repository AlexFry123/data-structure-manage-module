import firestore, { getDocumentRef } from 'services/Firebase/firestore'
import _ from 'lodash'

/**
 * @info deleteDocument (06 Apr 2021) // CREATION DATE
 *
 * @since 15 Apr 2021 ( v.0.0.4 ) // LAST-EDIT DATE
 *
 * @param {string}     path                      Path to a collection.
 * @param {object}     data                      An Object containing the data for the new document.
 * @param {Object}     [options]                 An object to configure the method behavior.
 * @param {string}     [options.idField]         Use to set field name where will save id of document.
 * @param {string}     [options.docId]           Document id field value.
 * @param {boolean}    [options.withoutUndef]    Use to remove undefined field in data object.
 *
 * @return {Promise<DocumentReference<DocumentData>> | Object}
 */

const createDocument = async (path, data = {}, options = {}) => {
  const { idField = 'id', docId, withoutUndef = true } = options
  if (idField) {
    const documentId = docId ?? getDocumentRef(path).id
    const buf = withoutUndef
      ? _.omitBy({ ...data, [idField]: documentId }, _.isNil)
      : { ...data, [idField]: documentId }
    await firestore.collection(path).doc(documentId).set(buf)
    return buf
  } else {
    return firestore
      .collection(path)
      .add(withoutUndef ? _.omitBy(data, _.isNil) : data)
  }
}

export default createDocument
