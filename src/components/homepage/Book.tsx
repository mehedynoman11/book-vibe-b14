import { IBook } from '@/type/bookType';
import BookCard from '../BookCard';

export const getBook = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_SERVER}/booksData.json`, {
            cache: "force-cache"
        });
    if(!res.ok) {
      throw new Error("Couldn't fetch data");
    }
    return res.json();
}
const BookHomePage = async () => {
    const bookData:IBook[] = await getBook();

    return (
        <div className="">
            <h1 className='text-3xl font-bold text-center my-10'>Browser Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4'>
            {bookData.slice(0,9).map(book => {
                return (
                    <BookCard key={book.bookId} book={book} />
                )
            })}
        </div>
        </div>
    );
};

export default BookHomePage;