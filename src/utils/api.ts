export async function fetchMenu() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/menu`);
  return response.json();
}