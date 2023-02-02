export const filterData = (searchText, restaurants) => {
  return restaurants.filter((restro) =>
    restro?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
