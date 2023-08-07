import { Text, View, StyleSheet, Image } from 'react-native';

export function BasicContainer({children, padding=24}) {

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "#222",
    border: "2px solid r#fff",
    borderRadius: 4,
    display: "flex",
    gap: 8,
  }
});


