import { IBook } from '@/type/bookType';
import BookCard from '@/components/BookCard';

export const getBook = async () => {
    const res = await fetch(`https://book-vibe-b14-mr9hb4n8u-mehedynoman11s-projects.vercel.app/booksData.json`);
    if(!res.ok) {
      throw new Error("Couldn't fetch data");
    }
    return res.json();
}
const BookHomePage = async () => {
    const bookData:IBook[] = await getBook();

    return (
        <div className="container mx-auto max-w-275">
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