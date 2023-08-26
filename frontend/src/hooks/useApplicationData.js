import { useReducer } from "react";

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_MODAL: 'DISPLAY_PHOTO_DETAILS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotos: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_MODAL:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {

  const defaultState = {
    favPhotos: [],
    selectedPhoto: {},
    isOpen: false,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

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
};
};

export default useApplicationData;