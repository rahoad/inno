import { View, Text, TouchableOpacity } from 'react-native';
import { g } from '../styles/styles';


export default function TherapistCard({ therapist, onPress }) {
return (
<TouchableOpacity onPress={onPress} style={g.card} accessibilityRole="button">
<Text style={g.cardTitle}>{therapist.name}</Text>
<Text style={g.meta}>{therapist.field} • {therapist.city}</Text>
<Text style={g.meta}>Pris: {therapist.price} kr • Erfaring: {therapist.experience} år</Text>
</TouchableOpacity>
);
}