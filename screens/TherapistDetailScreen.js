import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { g } from '../styles/styles';
import { THERAPISTS } from '../data/therapists';


export default function TherapistDetailScreen() {
const t = THERAPISTS[0]; // simplere: viser altid første behandler


const handleBook = () => {
Alert.alert('Booking', `Du har anmodet om en tid hos ${t.name}.`);
};


return (
<View style={g.container}>
<Text style={g.title}>{t.name}</Text>
<Text style={g.subtitle}>{t.field} • {t.city}</Text>
<Text style={{ marginBottom: 12 }}>{t.description}</Text>
<Text style={{ marginBottom: 16 }}>Pris: {t.price} kr • Erfaring: {t.experience} år</Text>


<TouchableOpacity style={g.button} onPress={handleBook}>
<Text style={g.buttonText}>Book tid</Text>
</TouchableOpacity>
</View>
);
}