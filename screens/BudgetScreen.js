import React, { useState, useEffect } from "react";
import { View, SafeAreaView, TouchableOpacity,Text } from "react-native";
import AppBudgetHeader from "../components/ui/AppBudgetHeader";
import AppBudgetContent from "../components/ui/AppBudgetContent";
import AddBudgetForm from '../components/budget/AddBudgetForm';
import AddSubcategoryBudgetForm from '../components/budget/AddSubcategoryBudgetForm';
import styles from "./styles/useBudgetStyle";
import Modal from "react-native-modal";
import {
  getBudgets,
  createBudget,
  updateBudget,
} from "../services/budgetService";

const AddNewBudgetCard = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.addBudgetCard}>
    <Text style={styles.addBudgetCardText}>Add New Budget</Text>
    {/* Add your "Add New Budget" icon here */}
  </TouchableOpacity>
);

const AddSubcategoryBudgetCard = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.addSubcategoryBudgetCard}>
    <Text style={styles.addSubcategoryBudgetCardText}>Add Subcategory Budget</Text>
    {/* Add your "Add Subcategory Budget" icon here */}
  </TouchableOpacity>
);


export default BudgetScreen = () => {
  const [showAddBudgetForm, setShowAddBudgetForm] = useState(false);
  const [showAddSubcategoryForm, setShowAddSubcategoryForm] = useState(false);
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const budgets = await getBudgets("yearly");
      setBudgetData(budgets?.data);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  const handleAddBudget = async (budget) => {
    try {
      const newBudget = await createBudget(budget);
      setBudgetData([...budgetData, newBudget]);
      setShowAddBudgetForm(false);
    } catch (error) {
      console.error("Error adding new budget:", error);
    }
  };

  const handleAddSubcategoryBudget = async (subcategoryBudget) => {
    try {
      const updatedBudget = await updateBudget(subcategoryBudget);
      const index = budgetData.findIndex(
        (budget) => budget._id === updatedBudget._id
      );
      const updatedBudgetData = [...budgetData];
      updatedBudgetData[index] = updatedBudget;
      setBudgetData(updatedBudgetData);
      setShowAddSubcategoryForm(false);
    } catch (error) {
      console.error("Error adding subcategory budget:", error);
    }
  };
  console.log("budgetData",budgetData)
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <AppBudgetHeader />
        <View style={styles.content}>
          {budgetData.length === 0 ? (
            <>
              {!showAddBudgetForm ? <AddNewBudgetCard onPress={() => setShowAddBudgetForm(true)} />
                : <Modal isVisible={showAddBudgetForm}>
                <AddBudgetForm
                  isVisible={showAddBudgetForm}
                  onClose={() => setShowAddBudgetForm(false)}
                  onSubmit={handleAddBudget}
                  />
                  </Modal>}
                  
            </>
          ) : (
            <>
              <AppBudgetContent budgetData={budgetData} />
              {!showAddSubcategoryForm && (
                <AddSubcategoryBudgetCard onPress={() => setShowAddSubcategoryForm(true)} />
              )}
              <AddSubcategoryBudgetForm
                isVisible={showAddSubcategoryForm}
                onClose={() => setShowAddSubcategoryForm(false)}
                onSubmit={handleAddSubcategoryBudget}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};
