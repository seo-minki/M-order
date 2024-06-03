export async function fetchMenu() {
  const response = await fetch("/api/menu");
  return response.json();
}