import type { IBook } from "@/type/bookType";
import Image from "next/image";

interface ListBookCardProps {
  book: IBook;
}

const ListBookCard = ({ book }:ListBookCardProps) => {
  return (
    <div className="group flex w-full flex-col gap-5 rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-row">

      {/* Book Image */}
      <div className="flex h-64 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-base-200 sm:h-56 sm:w-40">
        <Image
          src={book.image}
          alt={book.bookName}
          width={450}
          height={450}
          loading="eager"
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col justify-between gap-4">

        {/* Title */}
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              {book.category}
            </span>

            <span className="text-sm text-base-content/50">
              {book.yearOfPublishing}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-base-content">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-base-content/60">
            by {book.author}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Details */}
        <div className="grid grid-cols-2 gap-3 border-y border-base-200 py-3 sm:grid-cols-3">
          <div>
            <p className="text-xs text-base-content/50">Rating</p>
            <p className="font-semibold">⭐ {book.rating}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/50">Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/50">Publisher</p>
            <p className="truncate font-semibold">{book.publisher}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="line-clamp-2 text-sm text-base-content/60">
            {book.review}
          </p>

          <button className="btn btn-success shrink-0 rounded-xl px-6">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default ListBookCard;

