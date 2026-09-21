'use client'
import ListBookCard from '@/components/ListedBookCard';
import { BookContext } from '@/context/bookContext';
import { useContext } from 'react';
import { IBook } from '@/type/bookType';

const ListedBooks = () => {
    const { read, wishlist } = useContext(BookContext);
    // console.log(read, wishlist, "ReadBookList", "WishList");
    return (
        <section className='container mx-auto max-w-275 mt-10'>
            <div className="py-6 px-12 bg-gray-200 text-center">
                <h1 className='text-3xl font-bold'>Books</h1>
            </div>
            <button className='btn btn-sm btn-info'>Sort By <span className='text-lg'>&#11206;</span></button>
            <div className="">
                <div className="tabs tabs-border">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books`} />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {read.length > 0 ? read.map((book:IBook, ind:number) => {
                            return (
                                <ListBookCard key={ind} book={book} />
                            )
                        }) : <p>no book to read.</p>} 
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label={`Wishlist Books`} defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10">{wishlist.length > 0 ? wishlist.map((book:IBook, ind:number) => {
                            return (
                                <ListBookCard key={ind} book={book} />
                            )
                        }) : <p>no book in wishlist.</p>}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ListedBooks;