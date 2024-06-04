const parseTmdbDate = (date?: string) => {
  if (!date) return { year: '2024', month: '01', day: '01' };
  const [year, month, day] = date.split('-');

  return {
    year,
    month,
    day,
  };
};

export default parseTmdbDate;
