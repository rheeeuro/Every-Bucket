import React, { Component } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  TouchableOpacity,
  ScrollView,
  AsyncStorage } from 'react-native';
  import { AppLoading } from "expo"; 
import { Divider } from 'react-native-elements';
import HeaderComponent from './Header';
import Footer from './Footer';
import Bucket from './Bucket';
import uuidv1 from "uuid/v1";

const { height, width } = Dimensions.get("window");

export default class App extends Component {
  state = {
    newBucket: "",
    buckets:[
      {
        id:1,
        picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mia1997.JPG/220px-Mia1997.JPG",
        bucketList:"축구화사기",
        starRate:"9.2",
        category:["취미", "운동","축구"],
      },
      {
        id:2,
        picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mia1997.JPG/220px-Mia1997.JPG",
        bucketList:"축구화사기",
        starRate:"9.2",
        category:["취미", "운동","축구"],
      },
      {
        id:3,
        picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mia1997.JPG/220px-Mia1997.JPG",
        bucketList:"축구화사기",
        starRate:"9.2",
        category:["취미", "운동","축구"],
      }
    ],
    isLoaded:true
  };

  componentDidMount = () => {
    this._loadBucket();
  }

  render() {
    const { newBucket, isLoaded, buckets } = this.state;
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <Divider style={{ backgroundColor: 'blue' }} />
     
        <ScrollView contentContainerStyle={styles.buckets}>
          {Object.values(buckets).reverse()
          .map(bucket =>
          <Bucket
            key={bucket.id}
            picture={bucket.picture}
            text={bucket.bucketList}
            starRate={bucket.starRate}
            category={bucket.category}
            deleteBucket={this._deleteBucket}
            updateBucket = {this._updateBucket}
            {...bucket}
             />)}
        </ScrollView>

        <Divider style={{ backgroundColor: 'blue'} } />
        <Footer />
      </View>
    );
  }


  _controlNewBucket = text =>{
    this.setState({
      newBucket: text
    })
  }
  _loadBucket = async () => {
    try {
      const buckets = await AsyncStorage.getItem("buckets");
      const parsedBuckets = (buckets == null) ? {} : JSON.parse(buckets);
      this.setState({ load: true, toDos: parsedToDos });
    } catch(err) {
      console.log(err);
    }

  }
  _addBucket = () => {
   const { newBucket } = this.state;
    if(newBucket != ""){
      this.setState(prevState => {
        const ID = uuidv1();
        const newBucketObject = {
          [ID]: {
            id: ID,
            text: newBucket,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          newBucket: "",
          buckets: {
            ...prevState.buckets,
            ...newBucketObject
          }
        };
        this._saveBuckets(newState.buckets);
        return { ...newState };
      });
    }
  };
  _deleteBucket = (id) => {
    this.setState(prevState => {
      const buckets = prevState.buckets;
      delete buckets[id];
      const newState = {
        ...prevState,
        ...buckets
      };
      this._saveBuckets(newState.buckets);
      return { ...newState };
    });
  };
  _updateBucket = (id, text) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        buckets: {
          ...prevState.buckets,
          [id]: {...prevState.buckets[id], text: text}
        }
      };
      this._saveBuckets(newState.buckets);
      return { ...newState };
    })
  };
  _saveBuckets = (newBuckets) => {
    const saveBuckets = AsyncStorage.setItem("buckets", JSON.stringify(newBuckets));
    };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "space-between",
  },
  contents: {
    flex: 15,
    width: width,
  },
  bucket: {
    alignItems: "center"
  }
});
