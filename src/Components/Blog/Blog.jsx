import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookMark,markAddRead}) => {
    console.log(blog)
    const {id, title, cover, author, author_img, reading_time,posted_date,hashtags}= blog
    return (
        <div className="mt-4">
            <img className="w-full mt-3" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h1 className="text-2xl font-bold mt-2">{author}</h1>
                        <p className="text-sm text-gray-600">{posted_date}</p>
                    </div>
                </div>
                <div>
<span className="">{reading_time} min read</span>
<button onClick={()=>handleAddToBookMark(blog)} className="ml-2 text-red-600"><CiBookmark /></button>
                </div>
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>
            
        {
            hashtags.map((hash, idx)=> <span className="text-gray-600" key={idx}> <a href="">#{hash}</a></span>)
        }
            </p>

            <div>
                <button onClick={()=>markAddRead(reading_time,id)} className="btn text-purple-900 font-bold underline">Marks add read</button>
            </div>
        </div>
    );
};

export default Blog;