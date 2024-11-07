
import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({ bookmarks, readingTime, remove }) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h1>Reading Time: {readingTime}</h1>
            </div>
            <h1 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => (
                    <Bookmark key={idx} bookmark={bookmark} remove={remove} />
                ))
            }
        </div>
    );
};

export default BookMarks;
