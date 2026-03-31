import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Spinner from './Spinner';


const ProductGrid = () => {
  // const [products, setProduct] = useState([]);
  const navigate = useNavigate();

  const {data:products,loading,error}=useFetch('/products')

    const API_URL = import.meta.env.VITE_API_URL;

    if(loading){
      return <Spinner/>
    }

    if(error)return toast.error("something went wrong")

    //usequery
    // useEffect(() => {
        
    //     api.get("/products")
    //         .then((res) => {
    //         setProduct(res.data.data)
    //     }
    //     )
    //     .catch((error)=>console.log(error)
    //     )
    // }, [])
  
    
  return (
        <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:place-items-center gap-6 px-4  py-6 ">
      
      { products.map((item) => (
        <div key={item._id} onClick={()=>navigate(`/productDetails/${item._id}`)} className=" w-fit group border border-gray-300 p-2">
          
          {/* Product Image */}
          <div className="w-fit overflow-hidden rounded-md">
            <img
              src={`${API_URL}${item.image}`}
              alt={item.name}
              className="w-fit h-90 object-cover group-hover:scale-105 transition-transform duration-500"
              
              
            />
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-sm">★★★★★</span>
            <span className="ml-1 text-sm font-medium">{item.rating}</span>
            <span className="ml-1 text-xs text-gray-500">({5})</span>
          </div>

          {/* Product title */}
          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            {item.name}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-gray-500">{item.title}</p>

          {/* Price */}
          <div className="mt-1">
            <span className="font-semibold text-gray-900">{`Rs,${item.price}`}</span>
            <span className="ml-2 line-through text-gray-400 text-sm">
              {item.oldPrice}
            </span>
          </div>
          <button onClick={()=>navigate(`/productDetails/${item._id}`)}  type="button" className="w-full bg-white text-black py-3 rounded-md font-medium tracking-wide border border-gray-300 hover:text-white hover:bg-black transition duration-400 ease-in-out">
        View Details
      </button>
        </div>
      ))}

      

    </div>

  )
}

export default ProductGrid

