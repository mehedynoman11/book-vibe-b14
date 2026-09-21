import { IBook } from '@/type/bookType';
import BookCard from '@/components/BookCard';
import Banner from '@/components/homepage/Banner';

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

const BookHomePage = async () => {
    const bookData: IBook[] = await getBook();

    return (
        <div className="container mx-auto max-w-275">
            <h1 className='text-3xl font-bold text-center my-10'>Browser Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4'>
                {bookData.slice(0, 9).map(book => {
                    return (
                        <BookCard key={book.bookId} book={book} />
                    )
                })}
            </div>
            <Banner />
        </div>
    );
};

export default BookHomePage;