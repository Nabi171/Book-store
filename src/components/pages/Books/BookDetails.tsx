/* eslint-disable prettier/prettier */
import { useParams } from 'react-router-dom';
import {useSingleBookQuery} from "../../../features/books/booksApi"
export default function BookDetails({book}) {
    const { bookId } = useParams();
    const {data,isLoading,error}=useSingleBookQuery(bookId);
    // const {}
    const { title, author, genre, publicationDate }=data;
        return (
            <div className="bg-white rounded-lg shadow-md p-4">
         <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">Author: {author}</p>
      <p className="text-gray-700 mb-2">Genre: {genre}</p>
      <p className="text-gray-700 ">Publication Date: {publicationDate}</p>
          {/* <button className="bg-blue-500 hover:bg-blue-600 mt-3 text-white font-bold py-2 px-4 rounded ">
          Details
        </button> */}
            </div>
          );;
      }
      