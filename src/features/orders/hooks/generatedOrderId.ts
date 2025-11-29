export function generateOrderId(lastId?: string): string {
  const year = new Date().getFullYear();

  // No previous ID → start from 1
  if (!lastId) {
    return `ORD-${year}-001`;
  }

  // Extract number from previous ID: ORD-2024-005 → 5
  const parts = lastId.split("-");
  if (parts.length < 3 || !parts[2]) {
    return `ORD-${year}-001`;
  }
  const lastNumber = parseInt(parts[2], 10);

  const nextNumber = (lastNumber + 1).toString().padStart(3, "0");

  return `ORD-${year}-${nextNumber}`;
}
