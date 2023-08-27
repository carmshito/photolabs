import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_MODAL: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotos: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_MODAL:
      return { ...state, isOpen: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {

  const defaultState = {
    favPhotos: [],
    selectedPhoto: {},
    isOpen: false,
    photoData: [],
    topicData: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  // fetch photos and topics
  const photoPromise = axios.get('/api/photos');
  const topicPromise = axios.get('/api/topics');

  const promises = [photoPromise, topicPromise];

  Promise.all(promises)
    .then((resArr) => {
      const photos = resArr[0].data;
      const topics = resArr[1].data;
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
    }, []);

  // open and close modal state
  const openModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_MODAL, payload: true });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_MODAL, payload: false });
  };


  // click handler to close modal
  const handleCloseModal = () => {
    closeModal();
  };

  // click handler to display modal photo
  const handleDisplayModalPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    openModal();
  };

  // fav photos state
  const setFavPhotos = (favPhotos) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: favPhotos });
  };

  // click handler for fav photos
  const favClickHandler = (id) => {
    const { favPhotos } = state;
    if (favPhotos.includes(id)) {
      setFavPhotos(favPhotos.filter((photoId) => photoId !== id));
    } else {
      setFavPhotos([...favPhotos, id]);
    }
  };

  return {
    openModal,
    closeModal,
    handleCloseModal,
    setFavPhotos,
    handleDisplayModalPhoto,
    favClickHandler,
    favPhotos: state.favPhotos,
    selectedPhoto: state.selectedPhoto,
    isOpen: state.isOpen,
    photos: state.photoData,
    topics: state.topicData
  };
};

export default useApplicationData;