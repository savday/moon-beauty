import './Directory.styles.scss'
import CollectionItem from '../collection-item/CollectionItem'

const Directory = ({collections}) => {

  return (
    <div className="collections-container">
      {collections.map((collection) => (
          <CollectionItem key={collection.id} collection={collection} />
        )
      )}
    </div>
  )
}

export default Directory;