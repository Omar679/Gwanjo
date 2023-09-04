import { useFormikContext } from "formik";
import React from "react";

import { ErrorMessage } from ".";
import AppPicker from "../Picker";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  placeholder,
  width,
  PickerItemComponent,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
export default AppFormPicker;
