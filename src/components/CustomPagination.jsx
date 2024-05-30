import { Pagination as MuiPagination, Stack } from "@mui/material";

const CustomPagination = ({ currentPage, onPageChange, totalPages }) => {

  const handlePageChange = (event, value) => {
    console.log(`pagina ${value}`);
    onPageChange(value);
  };

  return (
    <Stack spacing={2} alignItems='center'>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        variant='outlined'
        color='primary'
        size='medium'
        onChange={handlePageChange}
        sx={{
          '.MuiPaginationItem-root': {
            color: 'white',
            marginTop: '40px'
          }
        }}
      />
    </Stack>
  );
};
export default CustomPagination;