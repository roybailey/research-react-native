import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../component/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultsList from '../component/ResultsList';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [searchApi, results, error] = useBusinesses();
    const filterResultsByPrice = (price) => results.filter(it => it.price === price);

    console.log(results);

    return (
        <View style={styles.container}>
            <SearchBar
                query={query}
                onQuery={setQuery}
                onSearch={() => searchApi(query)}
            />
            <View style={{marginLeft: 10, marginBottom: 10}}>
                <Text style={{color: 'grey'}}>Search : {query}</Text>
                <Text style={{color: 'grey'}}>We have found {results.length}</Text>
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        flex: 1,
    },
    error: {
        color: 'red'
    }
});

export default SearchScreen;
