'use client'
import { BookContext } from '@/context/bookContext';
import { IBook } from '@/type/bookType';
import { useContext } from 'react';
import { toast } from 'react-toastify';

interface WishListProps {
    book: IBook;
}

const WishList = ({book}:WishListProps) => {
    const {wishlist, setWishlist} = useContext(BookContext);

    const isWislist = wishlist.some((books:IBook) => books.bookId === book.bookId)

const handleWishList = () => {
    // console.log("wishlist book button triggered", book)
    setWishlist([...wishlist, book]);
    toast.success("You have wishlisted the book.")
}

    return (
        <div>
            <button 
            disabled={isWislist}
            className="btn btn-accent" 
            onClick={() => handleWishList()}>Wishlist</button>
        </div>
    );
};

export default WishList;