import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_MODAL: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SET_SIMILAR_PHOTOS: 'SET_SIMILAR_PHOTOS'
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
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_SIMILAR_PHOTOS:
      return { ...state, similarPhotos: action.payload };
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
    similarPhotos: []
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  // fetch photos and topics
  useEffect(() => {

    const photoPromise = axios.get('/api/photos');
    const topicPromise = axios.get('/api/topics');

    const promises = [photoPromise, topicPromise];

    Promise.all(promises)
      .then((resArr) => {
        const photos = resArr[0].data;
        const topics = resArr[1].data;
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
      })
      .catch((err) => {
        console.error("Error fetching photos and topics:", err);
      });
  }, []);

  // fetch photos on selected topic
  const fetchTopicPhotos = (topicId) => {
    axios.get(`/api/topics/photos/${topicId}`)
      .then((res) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: res.data });
      })
      .catch((err) => {
        console.error("Error fetching topic photos", err);
      });
  };

  // fetch all photos
  const fetchAllPhotos = () => {
    axios.get('/api/photos')
      .then((res) => {
        const photos = res.data;
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
      })
      .catch((err) => {
        console.error("Error fetching topic photos", err);
      });
  };

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

    const photos = state.photoData;
    const photoId = photo.id;

    for (const pic of photos) {
      if (photoId === pic.id) {
        const similarPhotos = pic.similar_photos;
        dispatch({ type: ACTIONS.SET_SIMILAR_PHOTOS, payload: similarPhotos });
      }
    }
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
    fetchTopicPhotos,
    fetchAllPhotos,
    favPhotos: state.favPhotos,
    selectedPhoto: state.selectedPhoto,
    isOpen: state.isOpen,
    photos: state.photoData,
    topics: state.topicData,
    similarPhotos: state.similarPhotos
  };
};

export default useApplicationData;