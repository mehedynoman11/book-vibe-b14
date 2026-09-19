import { IBook } from '@/type/bookType';
import BookCard from '@/components/BookCard';

export const getBook = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    if(!res.ok) {
      throw new Error("Couldn't fetch data");
    }
    return res.json();
}
const BookPage = async () => {
    const bookData:IBook[] = await getBook();

    return (
        <div className="container mx-auto max-w-275">
            <h1 className='text-3xl font-bold text-center my-10'>Browser Books</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4'>
            {bookData.map(book => {
                return (
                    <BookCard key={book.bookId} book={book} />
                )
            })}
        </div>
        </div>
    );
};

export default BookPage;