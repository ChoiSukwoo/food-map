import { AddFeedback } from './type';

//스터디 Uid => 북마크한 유저 Uid 리스트
export const addFeedback: AddFeedback = async (feedback) => {
  try {
    const studyDocRef = doc(firestore, 'StudyGroup', studyUid);
    const studyDocSnap = await getDoc(studyDocRef);
    if (!studyDocSnap.exists()) {
      return { result: false };
    } else {
      const userUidMap = (studyDocSnap.data() as PartyDto).favoriters;
      const userUidList = objectToList(userUidMap);
      return { result: userUidList };
    }
  } catch (e) {
    const error = e as Error;
    return { result: false, message: error.message };
  }
};
