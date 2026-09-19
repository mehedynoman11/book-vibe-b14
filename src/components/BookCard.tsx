import { IBook } from '@/type/bookType';
import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
    book: IBook
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Book Image */}
            <div className="relative flex h-60 items-center justify-center overflow-hidden bg-base-300">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="w-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                    {book.category}
                </span>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {book.tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title & Author */}
                <div>
                    <h2 className="line-clamp-2 text-xl font-bold text-base-content">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-base-content/60">
                        by {book.author}
                    </p>
                </div>

                {/* Rating & Pages */}
                <div className="flex items-center justify-between border-y border-base-200 py-3">
                    <div className="flex items-center gap-1">
                        <span className="text-lg">⭐</span>
                        <span className="font-semibold">{book.rating}</span>
                    </div>

                    <span className="text-sm text-base-content/60">
                        {book.totalPages} pages
                    </span>
                </div>

                {/* Publisher */}
                <div className="text-sm text-base-content/60">
                    <p>
                        <span className="font-medium text-base-content">Publisher:</span>{" "}
                        {book.publisher}
                    </p>

                    <p>
                        <span className="font-medium text-base-content">Published:</span>{" "}
                        {book.yearOfPublishing}
                    </p>
                </div>

                {/* Button */}
                <Link href={`http://localhost:3000/books/${book.bookId}`}>
                    <button className="btn btn-success w-full rounded-xl">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;