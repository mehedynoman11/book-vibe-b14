import { IBook } from '@/type/bookType';
import BookCard from '@/components/BookCard';

export const getBook = async () => {
    try {
        const response = await fetch(`
        ${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error Fetching data", error);
        return []
    }
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