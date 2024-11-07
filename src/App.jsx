
import './App.css';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import BookMarks from './Components/BookMarks/BookMarks';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookmarks(newBookMark);
  };

  const markAddRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  const remove = (id) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
  };

  return (
    <>
      <div className='max-w-6x mx-auto'>
        <Header />
        <div className="md:flex">
          <Blogs handleAddToBookMark={handleAddToBookMark} markAddRead={markAddRead} />
          <BookMarks remove={remove} readingTime={readingTime} bookmarks={bookmarks} />
        </div>
      </div>
    </>
  );
}

export default App;

