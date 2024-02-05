import Item from "./Item";

export default function PackingList() {
  const packingList = [
    "Space Suit",
    "Helmet with a golden Leaf",
    "Photo of Tam",
  ];
  const items = packingList.map((item) => <Item name={item} isPacked={true} />);

  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>{items}</ul>
    </section>
  );
}
