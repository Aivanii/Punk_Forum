interface PageNumLineProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  maxPage: number;
}

const PageNumLine = ({
  currentPage,
  setCurrentPage,
  maxPage,
}: PageNumLineProps) => {
  function generatePagination() {
    const delta = 2;
    const range = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(maxPage - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 1) {
      range.unshift("...");
    }
    if (currentPage - delta <= 1) {
      range.unshift(1);
    } else {
      range.unshift(1);
    }

    if (currentPage + delta < maxPage - 1) {
      range.push("...");
    }
    if (currentPage + delta >= maxPage - 1) {
      range.push(maxPage);
    } else {
      range.push(maxPage);
    }

    const uniquePages = [...new Set(range)];

    return uniquePages;
  }

  const changeCurrentPage = (newPage: any) => {
    if (newPage === "...") {
      return;
    }

    setCurrentPage(newPage);
  };

  return (
    <div className="flex gap-2">
      {generatePagination().map((elem) => (
        <span
          key={elem}
          className={`${elem === currentPage && "text-xl text-white"}
          ${
            typeof elem === "number"
              ? "cursor-pointer hover:text-white"
              : "cursor-default"
          }`}
          onClick={() => {
            changeCurrentPage(elem);
          }}
        >
          {elem}
        </span>
      ))}
    </div>
  );
};

export default PageNumLine;
