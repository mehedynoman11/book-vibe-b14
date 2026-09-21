'use client'
import { BookContext } from '@/context/bookContext';
import { IBook } from '@/type/bookType';
import { useContext } from 'react';
import { toast } from 'react-toastify';

interface ReadBookProps {
    book: IBook;
    // read: IBook;
    // setRead: Dispatch<SetStateAction<IBook[]>>
}
const ReadBook = ({book}:ReadBookProps) => {
    const {read, setRead} = useContext(BookContext);

    const isRead = read.some((books:IBook) => books.bookId === book.bookId)

const handleReadBook = () => {
    // console.log("read book button triggered", book)
    setRead([...read, book]);
    toast.success("You have read the book.")
}

    return (
        <div>
            <button 
            disabled={isRead}
            className="btn btn-outline" 
            onClick={() => handleReadBook()}>Read</button>
        </div>
    );
};

export default ReadBook;