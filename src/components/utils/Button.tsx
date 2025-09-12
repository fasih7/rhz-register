export function MainButton({
  mainText,
  type,
}: {
  mainText: string;
  type: "primary" | "secondary";
}) {
  if (type === "primary") {
    return (
      <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition">
        {mainText}
      </button>
    );
  }

  return (
    <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
      {mainText}
    </button>
  );
}
