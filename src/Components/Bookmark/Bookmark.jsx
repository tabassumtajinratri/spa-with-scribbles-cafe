
import { RiDeleteBack2Line } from "react-icons/ri";

const Bookmark = ({ bookmark, remove }) => {
    const { id, title } = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h1 className="text-2xl font-bold">{title}</h1>
            <button onClick={() => remove(id)}>
                <RiDeleteBack2Line />
            </button>
            <hr />
        </div>
    );
};

export default Bookmark;
