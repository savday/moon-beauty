import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/Directory";

const Home = () => {
  const collections = [
    {
      "id": 1,
      "name": "lips",
      "imageUrl": "https://images.unsplash.com/photo-1631214499500-2e34edcaccfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
    },
    {
      "id": 2,
      "name": "eyes",
      "imageUrl": "https://images.unsplash.com/photo-1583931537180-7d26921260e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "id": 3,
      "name": "eyebrows",
      "imageUrl": "https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "id": 4,
      "name": "face",
      "imageUrl": "https://images.unsplash.com/photo-1590156424570-698d124ec7dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      "id": 5,
      "name": "body",
      "imageUrl": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]
  return (
    <div>
      <Directory collections={collections} />
      <Outlet />
    </div>
  );
};

export default Home;
