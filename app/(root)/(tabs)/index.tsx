import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/ind ex.tsx to edit this screen.</Text>
    
        <Link href={'/sign-in'}>
            Sign in
        </Link>
        <Link href={'/explore'}>
            Explore
        </Link>
        <Link href={'/profile'}>
            Profile
        </Link>
        <Link href={'/properties/1'}>
            Properties
        </Link>
    
    </View>
  );
}
