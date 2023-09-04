import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import AppPicker from "../components/AppPicker";
import AppFormPicker from "../components/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Kayan Daki",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Motoci",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Camera",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Wasanni",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Kayan Sawa",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Wasannin Waje ",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "kallo da Waqoqi",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Littafai",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Wasu Abubuwan",
    value: 9,
  },
];
const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
