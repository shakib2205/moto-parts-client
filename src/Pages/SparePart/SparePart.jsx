import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useCart from "../../hook/useCart";


const SparePart = ({ part }) => {
    const { name, image, price, details, quantity, _id } = part;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            console.log(user.email);
            const cartItem = {
                partId: _id,
                email: user.email,
                name,
                image,
                price 
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //refetch the cart
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not loggedIn",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to the login page
                    navigate('/login', { state: { form: location } });
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className=" h-[350px] w-[550px] rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name} <div className="badge badge-secondary">In Stock</div></h2>
                <p>{details}</p>
                <div className="badge badge-outline">Available: {quantity}</div>
                <div className="card-actions flex justify-between">
                    <span className="text-2xl py-2">Price: ${price}</span>
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline btn-primary btn-sm mt-3 border-0 border-b-4"
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SparePart;