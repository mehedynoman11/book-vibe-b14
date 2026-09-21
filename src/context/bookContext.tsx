'use client'
import { IBook } from '@/type/bookType';
import React, { createContext, useState } from 'react';

interface IBookContext {
  read: IBook[];
  setRead: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BookContext = createContext<IBookContext>({
    read: [],
    setRead: ()=>{},
    wishlist: [],
    setWishlist: ()=>{},
});

const BookProvider = ({ children }:{children:React.ReactNode}) => {


    const [read, setRead] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);

    const sharedData = {
        read,
        setRead,
        wishlist,
        setWishlist
    }
    return (
        <BookContext.Provider value={sharedData}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;