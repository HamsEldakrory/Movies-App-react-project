import { useSearchParams } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || 1, 10);

  const handlePageChange = (pageNumber) => {
    setSearchParams({ ...Object.fromEntries(searchParams.entries()), page: pageNumber });
  };

  const renderPaginationItems = () => {
    const items = [];
    const DOTS = <Pagination.Ellipsis disabled />;
    const ITEMS_TO_SHOW = 5;

    // Always show first page
    items.push(
      <Pagination.Item key={1} active={currentPage === 1} onClick={() => handlePageChange(1)}>
        1
      </Pagination.Item>
    );

    let startPage = Math.max(2, currentPage - Math.floor(ITEMS_TO_SHOW / 2));
    let endPage = Math.min(startPage + ITEMS_TO_SHOW - 1, totalPages - 1);

    if (startPage > 2) {
      items.push(DOTS);
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item key={i} active={currentPage === i} onClick={() => handlePageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages - 1) {
      items.push(DOTS);
    }

    // Always show last page
    if (totalPages > 1) {
      items.push(
        <Pagination.Item
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <Pagination className="d-flex justify-content-center mt-5">
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      {renderPaginationItems()}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </Pagination>
  );
};

export default CustomPagination;
