export const revalidate = 600; // 10 min

export default async function getQuote() {
  const res = await fetch("https://zenquotes.io/api/today");

  if (!res.ok) {
    console.error("Failed to fetch data");
  }

  return res.json();
}
