function SnackList() {
  const snacks = [
    { name: 'chips', rank: 2 },
    { name: 'chocolate', rank: 1 },
    { name: 'cookie', rank: 4 },
    { name: 'cake slice', rank: 3 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}
export default SnackList;
