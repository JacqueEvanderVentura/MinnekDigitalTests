import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { uxuiActions } from '../../../../Logic/ECommerce/uxui/uxuiActions';

interface PropsAddItem{
	handleSetItem: Function,
	handleAddItem: Function,
	emptyField: boolean
}
const AddItem = ({handleSetItem, handleAddItem, emptyField}:PropsAddItem) => {
	const dispatch = useDispatch()
	
	function convertToBase64(e:any){
		const file = e.target.files[0]
		const reader = new FileReader()

		reader.onloadend = () =>{
			handleSetItem(undefined, 'image',reader.result?.toString())
		}
		reader.readAsDataURL(file)

	}
	return (
    <div className="modal">
      <div className="card w-[30vw] min-w-fit">
        <button
          aria-label="Close add item window"
          className="bg-red-500 hover:bg-red-600 max-h-fit max-w-fit min-h-fit m-0 h-8 py-0  px-2 self-end transition-all hover:transition-all"
          onClick={() => dispatch({ type: uxuiActions.CLOSE_MODAL })}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>

        <form className="flex flex-col justify-center items-center">
          <label htmlFor="name">Product Name</label>
          <input
            onChange={(e) => handleSetItem(e)}
            id="name"
            name="name"
            type="text"
            maxLength={20}
          />
          <label htmlFor="price">Product Price</label>
          <input
            onChange={(e) => handleSetItem(e)}
            id="price"
            name="price"
            type="number"
            min={1}
						max={10000}
          />
          <label htmlFor="description">Product Description</label>
          <input
            onChange={(e) => handleSetItem(e)}
            id="description"
            name="description"
            type="text"
            maxLength={40}
          />
          <label htmlFor="image">Product Image</label>
          <input
            onChange={(e) => convertToBase64(e)}
            id="image"
            name="image"
            type="file"
          />

          <button className="bg-cyan-500" onClick={(e) => handleAddItem(e)}>
            Add item
          </button>
          {emptyField && (
            <span className="text-red-500">Please, fill out every field.</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddItem