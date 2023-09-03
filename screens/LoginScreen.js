import { Image, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          // Use parentheses to wrap the JSX elements you want to return
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCoreect={false} // Should be 'autoCorrect' instead of 'autoCoreect'
              icon="email"
              onChangeText={handleChange("email")} // Add the field name ('email' or 'password') here
              onBlur={() => setFieldTouched("email")}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false} // Correct the spelling to 'autoCorrect'
              icon="lock"
              onChangeText={handleChange("password")} // Add the field name ('email' or 'password') here
              onBlur={() => setFieldTouched("password")}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            {/* Change 'email' to 'password' for password errors */}
            <AppButton title="Login" onpress={handleSubmit} />
            {/* Change 'onpress' to 'onPress' */}
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    resizeMode: "contain",
  },
});
