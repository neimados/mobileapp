import React from "react";
import { useState, useEffect } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export default function Fact_fetch() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getFacts = async () => {
       try {
        const response = await fetch('https://catfact.ninja/fact?max_length=100');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getFacts();
    }, []);
  
    return (
      <View>
        {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.txt}>{data.fact}</Text>
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    txt: {
      fontSize: 28,
      fontFamily: 'monospace',
		  fontWeight: 'bold',
    }
  });