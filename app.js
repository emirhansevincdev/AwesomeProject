import React from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  { id: '1', name: 'Vegetables', icon: 'leaf' },
  { id: '2', name: 'Fruits', icon: 'apple' },
  { id: '3', name: 'Beverages', icon: 'wine' },
  { id: '4', name: 'Grocery', icon: 'cart' },
  { id: '5', name: 'Edible Oil', icon: 'water' },
  { id: '6', name: 'Household', icon: 'home' },
];

const products = [
  { id: '1', name: 'Fresh Peach', price: '$8.00', unit: 'dozen', isNew: false, discount: null },
  { id: '2', name: 'Avocado', price: '$7.00', unit: '2.0 lbs', isNew: true, discount: null },
  { id: '3', name: 'Pineapple', price: '$9.90', unit: '1.50 lbs', isNew: false, discount: null },
  { id: '4', name: 'Black Grapes', price: '$7.05', unit: '5.0 lbs', isNew: false, discount: '-16%' },
  { id: '5', name: 'Pomegranate', price: '$2.09', unit: '1.50 lbs', isNew: true, discount: null },
  { id: '6', name: 'Fresh Broccoli', price: '$3.00', unit: '1 kg', isNew: false, discount: null },
];

const MarketApp = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      {item.isNew && <Text style={styles.newBadge}>NEW</Text>}
      {item.discount && <Text style={styles.discountBadge}>{item.discount}</Text>}
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productUnit}>{item.unit}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#888" />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Icon name="options-outline" size={20} color="#888" />
      </View>

      {/* Banner */}
      <Image
        source={{ uri: 'https://via.placeholder.com/400x200' }}
        style={styles.bannerImage}
      />
      <Text style={styles.bannerText}>20% off on your first purchase</Text>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <View key={category.id} style={styles.category}>
            <Icon name={category.icon} size={30} color="#4CAF50" />
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </View>

      {/* Featured Products */}
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  bannerText: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  category: {
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
    marginTop: 5,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  productsContainer: {
    paddingHorizontal: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  newBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff0',
    padding: 3,
    fontSize: 10,
    color: '#000',
    borderRadius: 5,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    padding: 3,
    fontSize: 10,
    color: '#fff',
    borderRadius: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#4CAF50',
  },
  productUnit: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MarketApp;
