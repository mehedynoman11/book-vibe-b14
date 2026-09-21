import ReadBook from '@/components/bookDetails/ReadBook';
import WishList from '@/components/bookDetails/Wishlist';
import { IBook } from '@/type/bookType';
import Image from 'next/image';

interface PageDetailsPageProps {
    params: Promise<{ id: string }>;
}

export const getBook = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_SERVER}/booksData.json`);
    return res.json();
}

const PageDetailsPage = async ({ params }: PageDetailsPageProps) => {
    const { id } = await params;

    const bookData = await getBook();

    const book = bookData.find((book: IBook) => String(book.bookId) === String(id)) as IBook
    return (
        <div className='container mx-auto max-w-275 mt-5'>
            <div className="flex justify-between gap-8 h-120">
                <div className="flex justify-center items-center bg-gray-200 p-6 w-full overflow-hidden rounded-t-2xl">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={350}
                        height={500}
                        loading='eager'
                        className="h-100 w-auto object-contain rounded-lg shadow-md"
                    />
                </div>
                <div className="text-left w-full mx-auto py-2">
                    <h1 className='text-2xl font-bold'>{book.bookName}</h1>
                    <p className='mb-3'><span className='font-bold'>By: </span> {book.author}</p>
                    <div className='border-t border-gray-300' />
                    <p className='my-3'>{book.category}</p>
                    <div className='border-b border-gray-300' />
                    <p className='text-sm text-base-content/70 line-clamp-5 mt-4'><span className='font-bold'>Review:</span> {book.review}</p>
                    <p className='mb-5'><span className='font-bold'>Tags </span> {book.tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
                        >#{tag}
                        </span>
                    ))}</p>
                    <div className='border-b border-gray-300' />
                    <div className="space-y-1 text-sm mt-3">
                        <p className="flex">
                            <span className="w-40 text-base-content/60">Number of Pages:</span>
                            <span className="font-medium">{book.totalPages}</span>
                        </p>
                        <p className="flex">
                            <span className="w-40 text-base-content/60">Publisher:</span>
                            <span className="font-medium">{book.publisher}</span>
                        </p>
                        <p className="flex">
                            <span className="w-40 text-base-content/60">Year of Publishing:</span>
                            <span className="font-medium">{book.yearOfPublishing}</span>
                        </p>
                        <p className="flex">
                            <span className="w-40 text-base-content/60">Rating:</span>
                            <span className="font-medium">{book.rating}</span>
                        </p>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-8">
                        <ReadBook book={book}/>
                        <WishList book={book}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PageDetailsPage;