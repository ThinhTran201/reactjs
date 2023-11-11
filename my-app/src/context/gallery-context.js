// import { createContext, useContext } from "react";
const { createContext, useContext, useState } = require("react");
const GalleryContext = createContext();
const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1684395521046-fe664a85a9e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://plus.unsplash.com/premium_photo-1669825050561-de372096dc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1684397493247-d49464f8092b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1684357766172-3d6184d95c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=839&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1684259499308-88dd5b69c029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    isFavorite: false,
  },
];
function GalleryProvider(props) {
  const [photos, setPhotos] = useState(fakeData);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  function toogleFavorite(photoId) {
    const updateArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photos.isFavorite };
      }
      return photo;
    });
    setPhotos(updateArray);
  }
  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setCartItems,
    setFavoriteList,
    toogleFavorite,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}
function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === `undefined`)
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}
export { GalleryProvider, useGallery };
