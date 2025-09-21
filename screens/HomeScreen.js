import { View, Text, TouchableOpacity } from 'react-native';
import { g } from '../styles/styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={g.container}>
      <Text style={g.title}>Velkommen</Text>
      <Text style={g.subtitle}>
        Naviger via fanerne forneden eller brug knapperne herunder.
      </Text>

      {/* Knap: til Behandlere-tab */}
      <TouchableOpacity
        style={g.button}
        onPress={() => navigation.navigate('List')}
        accessibilityLabel="Gå til Behandlere"
      >
        <Text style={g.buttonText}>Behandlere</Text>
      </TouchableOpacity>

      {/* Knap: til Profil-tab */}
      <TouchableOpacity
        style={g.button}
        onPress={() => navigation.navigate('Detail')}
        accessibilityLabel="Gå til Profil"
      >
        <Text style={g.buttonText}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
}
