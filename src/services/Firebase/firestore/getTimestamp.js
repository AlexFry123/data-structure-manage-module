import firebase from 'firebase'

/**
 * @info getDocumentRef (06 Apr 2021) // CREATION DATE
 *
 * @comment getDocumentRef - function for get document reference.
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @returns {firebase.firestore.Timestamp}
 */

const getTimestamp = () => firebase.firestore.Timestamp

export default getTimestamp
