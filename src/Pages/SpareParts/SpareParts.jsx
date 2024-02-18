import { Helmet } from "react-helmet-async";
import useParts from "../../hook/useParts";
import SparePart from "../SparePart/SparePart";

const SpareParts = () => {
    const [parts] = useParts();

    // Check if parts is undefined or null
    if (!parts) {
        return <p>Loading parts...</p>;
    }

    // Check if parts is an array and has length
    if (!Array.isArray(parts) || parts.length === 0) {
        return <p>No parts available.</p>;
    }

    return (
        <div>
            <Helmet>
                <title>Moto || Spare Parts</title>
            </Helmet>
            <h3 className="text-5xl text-center text-sky-700">Spare Parts</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                {parts.map(part => (
                    <SparePart key={part.id} part={part} />
                ))}
            </div>
        </div>
    );
};

export default SpareParts;