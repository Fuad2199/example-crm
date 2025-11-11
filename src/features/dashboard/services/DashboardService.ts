// src/features/dashboard/services/DashboardService.ts
import type { CardType } from "../dashboard.types";

const getDashboardCards = async (): Promise<CardType[]> => {
  try {
    const res = await fetch("http://localhost:3000/cards");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    // Əlavə təhlükəsizlik üçün tip yoxlaması (runtime səviyyəsində)
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format received for cards");
    }

    return data;
  } catch (error) {
    console.error("Error fetching dashboard cards:", error);
    // CS əsaslı yanaşmada error atılır ki, useQuery və ya hook onu idarə etsin
    throw error;
  }
};

export default getDashboardCards;