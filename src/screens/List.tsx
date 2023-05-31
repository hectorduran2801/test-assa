import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6172cfe5110a740017222e2b.mockapi.io/elements');
        setData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item) => (
          <View style={styles.taskContainer}>
          <View style={styles.circleContainer}>
          
          </View>
          
          <Text key={item.id} style={styles.taskText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
  },
  taskText: {
    flex: 1,
    padding: 10,
    color: 'black',
    marginBottom: 10,
    fontSize: 20
  },
  circleContainer: {
    width: 40,
    height: 40,
    borderRadius: 120,
    marginRight: 10,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default List;
