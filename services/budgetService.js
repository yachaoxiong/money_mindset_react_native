// budgetService.js
import { getToken } from "../utils/functions";

const baseUrl = "http://localhost:3000";

export const getBudgets = async (budgetType) => {
  console.log("budgetType",budgetType)
  const token = await getToken();
  const response = await fetch(`${baseUrl}/api/budgets/all/${budgetType}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getBudget = async (id) => {
  const token = await getToken();
  const response = await fetch(`${baseUrl}/api/budgets/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const createBudget = async (budget) => {
  const token = await getToken();
  const response = await fetch(`${baseUrl}/api/budgets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(budget),
  });
  return response.json();
};

export const updateBudget = async (id, budget) => {
  const token = await getToken();
  const response = await fetch(`${baseUrl}/api/budgets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(budget),
  });
  return response.json();
};

export const deleteBudget = async (id) => {
  const token = await getToken();
  const response = await fetch(`${baseUrl}/api/budgets/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
