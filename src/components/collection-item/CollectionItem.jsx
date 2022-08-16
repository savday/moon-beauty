import "./CollectionItem.scss";

const CollectionItem = ({ collection }) => {
  const { imageUrl, name } = collection;
  return (
    <div className="collection-container">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-body-container">
        <h2>{name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CollectionItem;
