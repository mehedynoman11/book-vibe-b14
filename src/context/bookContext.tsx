'use client'
import { IBook } from '@/type/bookType';
import React, { createContext, useState } from 'react';

export const BookContext = createContext({});

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