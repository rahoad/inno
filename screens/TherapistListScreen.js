import { useMemo, useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { g } from '../styles/styles';
import { THERAPISTS } from '../data/therapists';
import TherapistCard from '../components/TherapistCard';


export default function TherapistListScreen() {
const [q, setQ] = useState('');


const data = useMemo(() => {
const term = q.trim().toLowerCase();
if (!term) return THERAPISTS;
return THERAPISTS.filter(t =>
t.name.toLowerCase().includes(term) ||
t.field.toLowerCase().includes(term) ||
t.city.toLowerCase().includes(term)
);
}, [q]);


return (
<View style={g.container}>
<Text style={g.title}>Behandlere</Text>
<TextInput
placeholder="Søg (navn, fag, by)"
value={q}
onChangeText={setQ}
style={{
borderWidth: 1,
borderColor: '#cbd5e1',
borderRadius: 8,
padding: 10,
marginBottom: 12,
}}
accessibilityLabel="Søg efter behandler"
/>


<FlatList
data={data}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<TherapistCard
therapist={item}
onPress={() => alert('Åbn "Profil" fanen for detaljer')} />
)}
ListEmptyComponent={<Text>Ingen match.</Text>}
/>
</View>
);
}