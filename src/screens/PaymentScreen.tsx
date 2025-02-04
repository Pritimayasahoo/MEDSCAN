// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { RadioButton } from "react-native-paper";
// import AppBar from "../Header/AppBar";
// import { useNavigation } from '@react-navigation/native';


// const PaymentScreen = () => {
//   const navigation = useNavigation();
//   const [selectedMethod, setSelectedMethod] = useState("Razorpay");

//   return (
//     <View style={styles.container}>
//       <AppBar navigation={navigation} title={'Make Payment'} backgroundColor={undefined} />
//       <Text style={styles.header}>Pay ₹2 to view this scan</Text>
//       <Text style={styles.subHeader}>Select Payment Method</Text>

//       {/* Razorpay Option */}
//       <TouchableOpacity
//         style={[
//           styles.paymentOption,
//           selectedMethod === "Razorpay" && styles.selectedOption,
//         ]}
//         onPress={() => setSelectedMethod("Razorpay")}
//       >
//         {/* <RadioButton
//           value="Razorpay"
//           status={selectedMethod === "Razorpay" ? "checked" : "unchecked"}
//           onPress={() => setSelectedMethod("Razorpay")}
//         /> */}
//         <Text style={styles.paymentText}>Razorpay</Text>
//         <Text style={styles.paymentID}>pay_**Hq6</Text>
//       </TouchableOpacity>

//       {/* Stripe Option */}
//       <TouchableOpacity
//         style={[
//           styles.paymentOption,
//           selectedMethod === "Stripe" && styles.selectedOption,
//         ]}
//         onPress={() => setSelectedMethod("Stripe")}
//       >
//         {/* <View style={styles.flexContainer}> */}
//         {/* <RadioButton
//           value="Stripe"
//           status={selectedMethod === "Stripe" ? "checked" : "unchecked"}
//           onPress={() => setSelectedMethod("Stripe")}
//         /> */}
//         <Text style={styles.paymentText}>Stripe</Text>
//         {/* </View> */}

//         <Text style={styles.paymentID}>pay_**Hq6</Text>
//       </TouchableOpacity>

//       {/* Add Payment Method Button */}
//       <TouchableOpacity style={styles.addPaymentButton}>
//         <Text style={styles.addPaymentText}>+ Add Payment Method</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   subHeader: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   paymentOption: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 15,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     marginVertical: 5,
//   },
//   selectedOption: {
//     backgroundColor: "#dbeafe",
//     borderColor: "#3b82f6",
//   },
//   // flexContainer: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   // },
//   paymentText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
//   paymentID: {
//     fontSize: 14,
//     color: "gray",
//     marginLeft: 10,
//   },
//   addPaymentButton: {
//     marginTop: 20,
//     padding: 15,
//     borderRadius: 10,
//     backgroundColor: "#f1f5f9",
//     alignItems: "center",
//   },
//   addPaymentText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#3b82f6",
//   },
// });

// export default PaymentScreen;







import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AppBar from "../Header/AppBar";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import colors from "../styles/colors";

const { width, height } = Dimensions.get('window')


const PaymentScreen = () => {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState("Razorpay");

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} title={"Make Payment"} backgroundColor={undefined} />
      <Text style={styles.header}>Pay ₹2 to view this scan</Text>
      <Text style={styles.subHeader}>Select Payment Method</Text>

      {/* Razorpay Option */}
      <TouchableOpacity
        style={[styles.paymentOption, selectedMethod === "Razorpay" && styles.selectedOption]}
        onPress={() => setSelectedMethod("Razorpay")}
      >
        <Image source={require("../images/RazorpayImg.png")} style={styles.logo} />
        <View>
          <Text style={[styles.paymentText, selectedMethod === "Razorpay" && styles.selectedText]}>Razorpay</Text>
          <Text style={[styles.paymentID, selectedMethod === "Razorpay" && styles.selectedText]}>pay_**Hq6</Text>
        </View>
      </TouchableOpacity>

      {/* Stripe Option */}
      <TouchableOpacity
        style={[styles.paymentOption, selectedMethod === "Stripe" && styles.selectedOption]}
        onPress={() => setSelectedMethod("Stripe")}
      >
        <Image source={require("../images/stripeImg.png")} style={styles.logo} />
        <View>
          <Text style={[styles.paymentText, selectedMethod === "Stripe" && styles.selectedText]}>Stripe</Text>
          <Text style={[styles.paymentID, selectedMethod === "Stripe" && styles.selectedText]}>pay_**Hq6</Text>
        </View>
      </TouchableOpacity>

      {/* Add Payment Method Button */}
      <TouchableOpacity style={styles.addPaymentButton}
      onPress={()=>navigation.navigate('MakePaymentScreen')}
      >
        <Text style={styles.addPaymentText}>+ Add Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: "#3b82f6", // brand_primary
    borderColor: "#3b82f6",
  },
  selectedText: {
    color: "white",
  },
  logo: {
    width: width*0.1,
    height:height*0.06,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
    color:colors.black,
  },
  paymentID: {
    fontSize: 14,
    color:colors.gray_Font,
  },
  addPaymentButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.cancelButtonbg,
    alignItems: "center",
  },
  addPaymentText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray_Font,
  },
});

export default PaymentScreen;
