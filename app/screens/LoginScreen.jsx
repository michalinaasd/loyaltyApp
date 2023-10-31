import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { LoginHeader } from "../components";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Loyalty", { user: response.user });
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert(response);
      console.log(response);
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        marginBottom: 150,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}
        style={{ flex: 1 }}
      >
        <LoginHeader />
        <View
          style={{
            flex: 2,
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#BEBEBE"
              value={email}
              onChangeText={setEmail}
              style={{
                width: "80%",
                borderWidth: 1,
                borderRadius: 50,
                borderColor: "#F991CC",
                padding: 15,
                marginBottom: 10,
              }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#BEBEBE"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              style={{
                width: "80%",
                borderWidth: 1,
                borderRadius: 50,
                borderColor: "#F991CC",
                padding: 15,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={signIn}
            style={{
              backgroundColor: "pink",
              width: "80%",
              alignSelf: "center",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: 500 }}>
              LOG IN
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
